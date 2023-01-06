"use client";

/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/dot-notation */
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import {
  TUserWithoutPassword,
  TCredentials,
  AuthState,
} from "../types/apiTypes";
import axiosInstance from "../utils/axiosInstance";

interface IUserContext {
  user: TUserWithoutPassword | null;
  isAuth: boolean;
  signIn: (credentials: TCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

const UserContext = createContext<IUserContext | null>(null);

type TUserContextProviderProps = {
  children: React.ReactNode;
};

function UserContextProvider({ children }: TUserContextProviderProps) {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuth: false,
  });

  const signIn = async ({ email, password }: TCredentials) => {
    try {
      const { data, headers } = await axiosInstance.post("auth/signin", {
        email,
        password,
      });
      setAuthState(() => ({
        isAuth: true,
        user: data,
      }));

      const token = headers["authorization"];

      axiosInstance.defaults.headers.common["authorization"] = token;
      localStorage.setItem("token", token || "");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const signOut = async () => {
    setAuthState(() => ({
      isAuth: false,
      user: null,
    }));
    localStorage.removeItem("token");
    axiosInstance.defaults.headers.common["authorization"] = "";
    router.push("/auth/signin");
  };

  return (
    <UserContext.Provider
      value={{
        user: authState.user,
        isAuth: authState.isAuth,
        signIn,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useAuth must be used within a UserContextProvider");
  }
  return context;
};

export default UserContextProvider;
