import React, { createContext, useContext, useState } from "react";
import { IUserData } from "../models/user";

interface UserContextProps {
  users: IUserData[];
  setUsers:(users: IUserData[]) => void;
}
const UserContext = createContext({} as UserContextProps);

export const UserProvider: React.FC = ({ children }) => {
const [users, setUsers] = useState<IUserData[]>([]);

  return (
    <UserContext.Provider value={{ users, setUsers}}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext);
  const { users, setUsers } = context;
  return { users, setUsers };
}