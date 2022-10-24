// common place to import context for any component that needs it
import { createContext } from "react";

export const UserContext = createContext({ user: null, username: null });
