import { createContext } from "react";
import { TypeContext } from "src/Type";

export const ThemeContext = createContext<TypeContext | null>(null);

