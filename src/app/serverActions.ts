'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";
import { dbConnect, generateSessionToken, createSession, validateSessionToken, invalidateSession, setSessionTokenCookie, deleteSessionTokenCookie, users } from "./auth";
import { SessionValidationResult } from "./auth";

export async function signup(formData: FormData): Promise<void> {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const hashedPassword = await new Argon2id().hash(password);

    try {
        await dbConnect();
        await users.insertOne({ id: username, password: hashedPassword });

        const token = generateSessionToken();
        const session = await createSession(token, username, hashedPassword);
        await setSessionTokenCookie(session.id, session.expiresAt);
    } catch (error) {
        console.error("Error during signup:", error);
        throw new Error("An unknown error occurred");
    }

    redirect("/");
}

export async function signin(formData: FormData): Promise<void> {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    await dbConnect();
    const existingUser = await users.findOne({ id: username });

    if (!existingUser || !(await new Argon2id().verify(existingUser.password, password))) {
        throw new Error("Invalid credentials");
    }

    const token = generateSessionToken();
    const session = await createSession(token, username, existingUser.password);
    await setSessionTokenCookie(session.id, session.expiresAt);

    redirect("/");
}

export async function logout(): Promise<void> {
    const session = await getCurrentSession();
    if (!session || !session.session) {
        throw new Error("Unauthorized");
    }

    await invalidateSession(session.session.id);
    await deleteSessionTokenCookie();

    redirect("/");
}

export async function getCurrentSession(): Promise<SessionValidationResult> {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value ?? null;

    if (!token) {
        return { session: null, user: null };
    }

    return await validateSessionToken(token);
}
