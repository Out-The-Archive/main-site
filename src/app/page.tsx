"use client";

import { useState } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (color: string) => {
    setBgColor(color);
  };

  return (
    <>
      <form action="/auth/signup" method="POST">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign Up</button>
      </form>
      <form action="/auth/signin" method="POST">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
      <form action="/auth/logout" method="POST">
        <button type="submit">Log Out</button>
      </form>
      <h2>Background Color Demo</h2>
      <div
        style={{
          margin: "1rem auto",
          padding: "2rem",
          backgroundColor: bgColor,
          width: "200px",
          height: "200px",
          border: "1px solid #ccc",
        }}
      >
        Box with color: {bgColor}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button
          onClick={() => handleClick("red")}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "red",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Red
        </button>
        <button
          onClick={() => handleClick("green")}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "green",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Green
        </button>
        <button
          onClick={() => handleClick("blue")}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "blue",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Blue
        </button>
      </div>
    </>
  );
}
