import React, { createContext, useState } from "react";
import { IUser } from "../interfaces/interfaceUser";

export interface IAuthContext {
  user: IUser | null;
  signIn?: (email: string, password: string) => Promise<boolean>;
  signOut?: () => void;
  signUp?: (data: IUser) => Promise<boolean>;
}

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const AuthContext = createContext<IAuthContext>(null!);

  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
