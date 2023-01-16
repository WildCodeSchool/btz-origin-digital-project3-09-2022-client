"use client";

import React from "react";

import { useRouter } from "next/navigation";
import axiosInstance from "../../../src/utils/axiosInstance";
import { TNewUser } from "../../../src/types/apiTypes";

export default function Signup() {
  const router = useRouter();
  const [credentials, setCredentials] = React.useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = async ({
    email,
    firstname,
    lastname,
    password,
    confirmPassword,
    username,
  }: TNewUser) => {
    try {
      if (password === confirmPassword) {
        const { data, headers } = await axiosInstance.post("auth/signup", {
          email,
          firstname,
          lastname,
          password,
          username,
        });
        router.push("/auth/signin");
      } else {
        alert("Confirm Password is not the same as password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center align-middle flex-col text-primary_font min-h-[calc(100vh-64px)] flex-grow w-screen">
      <div>
        <h1 className="flex justify-center py-5 text-xl">
          Create Your Account
        </h1>
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
        <div className="py-2">
          <input
            className="px-2 py-1 rounded-lg"
            type="username"
            id="username"
            name="username"
            placeholder="Enter your username..."
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="py-2">
          <input
            className="px-2 py-1 rounded-lg"
            type="firstname"
            id="firstname"
            name="firstname"
            placeholder="Enter your firstname..."
            value={credentials.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="py-2">
          <input
            className="px-2 py-1 rounded-lg"
            type="lastname"
            id="lastname"
            name="lastname"
            placeholder="Enter your lastname..."
            value={credentials.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="py-2">
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

        <div className="py-2">
          <input
            className="px-2 py-1 rounded-lg"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter your confirmPassword..."
            value={credentials.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      <div>
        <button
          className="text-primary_font bg-footer px-5 py-1 rounded-lg "
          type="submit"
          onClick={() => signUp(credentials)}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}
