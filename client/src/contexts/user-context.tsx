import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  name: string;
  alias: string;
  setName: (name: string) => void;
  setAlias: (alias: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");

  return (
    <UserContext.Provider value={{ name, alias, setName, setAlias }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  
  return context;
}
