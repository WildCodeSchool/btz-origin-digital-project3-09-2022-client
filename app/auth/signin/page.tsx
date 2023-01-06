"use client";

import React from "react";
import { useAuth } from "../../../src/context/UserContext";

export default function Signin() {
  const { signIn } = useAuth();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex justify-center items-center align-middle flex-col text-primary_font h-full  flex-grow w-screen">
      <div>
        <h1 className="flex justify-center py-5 text-2xl">Login</h1>
      </div>
      <form className="flex space-y-5 flex-col justify-center">
        <div>
          <input
            className="px-2 py-1 rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            autoComplete="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="py-5">
          <input
            className="px-2 py-1 rounded-lg"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      <div className="">
        <button type="button" onClick={() => signIn(credentials)}>
          Sign In
        </button>
      </div>
    </div>
  );
}
