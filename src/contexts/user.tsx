"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { userActions } from "@/mocks/user";
import { User } from "@/shared.types";

type UserProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<User | null>(null);

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(function () {
    userActions
      .getByRight() // user without subscriptions (no rights)
      // .getByRight("RIGHT_1") // user with one subscription (has right_1)
      // .getByRight("RIGHT_2") // user with multiple subscriptions (has right_1 && right_2)
      .then((user) => setUser(user))
      .catch(() => {
        throw new Error("💥 Error fetching user! 💥");
      });
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  const user = useContext(UserContext);
  if (user === undefined)
    throw new Error(
      'You are trying to consume "User" context out of its provider scope!'
    );
  return user;
}
