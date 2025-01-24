import { Collection, MongoClient } from "mongodb";
import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";
import { cache } from "react";
import { cookies } from "next/headers";
import { Argon2id } from "oslo/password";
import { redirect } from 'next/navigation';

const client = new MongoClient('mongodb://localhost:3000');
export async function dbConnect() {
  await client.connect();
};

const db = client.db();
const sessions: Collection<Session> = db.collection("sessions");
export const users: Collection<User> = db.collection("users");

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

export async function setSessionTokenCookie(token: string, expiresAt: Date): Promise<void> {
	const cookieStore = await cookies();
	cookieStore.set("session", token, {
		httpOnly: true,
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		expires: expiresAt,
		path: "/"
	});
}

export async function deleteSessionTokenCookie(): Promise<void> {
	const cookieStore = await cookies();
	cookieStore.set("session", "", {
		httpOnly: true,
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		maxAge: 0,
		path: "/"
	});
}

export const getCurrentSession = cache(async (): Promise<SessionValidationResult> => {
	const cookieStore = await cookies();
	const token = cookieStore.get("session")?.value ?? null;
	if (token === null) {
		return { session: null, user: null };
	}
	const result = await validateSessionToken(token);
	return result;
});

export async function signup(formData: FormData): Promise<any> {
    'use server';
    
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const hashedPassword = await new Argon2id().hash(password);

    try {
        await dbConnect();
        
        const user = await users.insertOne({
            id: username,
            password: password
        });

        const token = generateSessionToken();
        const session = createSession(token, username, password);
        setSessionTokenCookie(
            (await session).id,
            (await session).expiresAt
        );
      } catch (e) {
        console.log('error', e);
        return {
          error: 'An unknown error occurred',
        };
      }
      return redirect('/');
}


export async function signin(formData: FormData){
    'use server';
 
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    await dbConnect();
    const existingUser = await users.findOne({ id: username });
    const validPassword = await new Argon2id().verify(
        existingUser!.password,
        password
    );

    const token = generateSessionToken();
    const session = createSession(token, username, password);
    setSessionTokenCookie(
        (await session).id,
        (await session).expiresAt
    );
    return redirect('/');
}
export async function logout(): Promise<any>{
    'use server';
    const session = getCurrentSession();
    if (!session) {
    return {
      error: 'Unauthorized',
    };
  }
 
  await invalidateSession((await session).session!.id);
  deleteSessionTokenCookie();
  return redirect('/');
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
