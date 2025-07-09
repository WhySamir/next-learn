"use client";

import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};
const defaultTheme: Theme = {
  colors: { primary: "#000000", secondary: "#ffffff" },
};
const ThemeContext = createContext<Theme>(defaultTheme);

export const Themeprovider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a Themeprovider");
  }
  return context;
};
