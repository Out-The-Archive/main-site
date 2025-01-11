import { Collection, MongoClient } from "mongodb";
import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";

const client = new MongoClient(process.env.MONGO_URI!);
async() => {
  await client.connect();
};

const db = client.db();
const sessions: Collection<Session> = db.collection("sessions");

export function generateSessionToken(): string {
	const bytes = new Uint8Array(20);
    crypto.getRandomValues(bytes);
    const token = encodeBase32LowerCaseNoPadding(bytes);
    return token;
}

export async function createSession(token: string, userId: string, userPassword: string): Promise<Session> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
    const session: Session = {
        id: sessionId,
        userId,
        userPassword,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
    };

    await sessions.insertOne(
        {
            id: session.id,
            userId: session.userId,
            userPassword: session.userPassword,
            expiresAt: session.expiresAt
        }
    );

    return session;
    
}

export async function validateSessionToken(token: string): Promise<SessionValidationResult> {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
    const row = await sessions.findOne({id: sessionId});
    if (row === null) {
		return { session: null, user: null };
	}
    const session: Session = {
        id: row.id,
        userId: row.userId,
        userPassword: row.userPassword,
        expiresAt: row.expiresAt
    }

    const user: User = {
        id: row.userId,
        password: row.userPassword
    }

    if(Date.now() >= session.expiresAt.getTime()){
        await sessions.deleteOne({id: session.id});
        return {session: null, user: null};
    }

    if(Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15){
        session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
        await sessions.updateOne(
            { id: session.id },
			{ $set: { expiresAt: session.expiresAt } }
        );
    }
    return {session, user};
}

export async function invalidateSession(sessionId: string): Promise<void> {
    await sessions.deleteOne({id: sessionId});
}

export type SessionValidationResult =
	| { session: Session; user: User }
	| { session: null; user: null };

export interface User {
    id: string;
    password: string;
}
export interface Session {
    id: string;
    userId: string;
    userPassword: string;
    expiresAt: Date;
}

/*
import { MongoClient, Collection } from "mongodb";
import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";

const client = new MongoClient("mongodb://localhost:3000");
await client.connect();
const db = client.db("./db");
const sessions: Collection<SessionDocument> = db.collection("sessions");

export function generateSessionToken(): string {
	const bytes = new Uint8Array(20);
	crypto.getRandomValues(bytes);
	return encodeBase32LowerCaseNoPadding(bytes);
}

export async function createSession(token: string, userId: number): Promise<Session> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session: Session = {
		id: sessionId,
		userId,
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
	};

	await sessions.insertOne({
		_id: session.id,
		userId: session.userId,
		expiresAt: session.expiresAt,
	});

	return session;
}

export async function validateSessionToken(token: string): Promise<Session | null> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const document = await sessions.findOne({ _id: sessionId });

	if (!document) {
		return null;
	}

	const session: Session = {
		id: document._id,
		userId: document.userId,
		expiresAt: new Date(document.expiresAt),
	};

	if (Date.now() >= session.expiresAt.getTime()) {
		await sessions.deleteOne({ _id: sessionId });
		return null;
	}

	if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
		session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
		await sessions.updateOne(
			{ _id: session.id },
			{ $set: { expiresAt: session.expiresAt } }
		);
	}

	return session;
}

export async function invalidateSession(sessionId: string): Promise<void> {
	await sessions.deleteOne({ _id: sessionId });
}

export interface Session {
	id: string;
	userId: number;
	expiresAt: Date;
}

interface SessionDocument {
	_id: string;
	userId: number;
	expiresAt: Date;
}
*/