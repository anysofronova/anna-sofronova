import { useLayoutEffect, useState } from "react";

const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || defaultTheme
  );
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
