import { redirect } from "next/navigation";
import { generateSessionToken, getCurrentSession, logout, signup, signin, validateSessionToken } from "./auth";
import type { NextRequest } from "next/server";
import MobileMenu from "./menu";

export default async function Home() {
  return (
    <div>
      <MobileMenu/>
    </div>
  );

  /*const { user } = await getCurrentSession();
  if (user) {
    return (
      <>
        <p>logged in as {user.id}</p>
        <br></br>
        <button formAction={logout}>log out</button>
      </>
    );
  } else {
    return (
      <>
        <form>
          <label htmlFor="username"></label>
          <input type="text"></input>
          <label htmlFor="password"></label>
          <input type="text"></input>
        </form>
        <button formAction={signup}>sign up</button>
        <button formAction={signin}>sign in</button>
      </>
    );
    }*/
}
