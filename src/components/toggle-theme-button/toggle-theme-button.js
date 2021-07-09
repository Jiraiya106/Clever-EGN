import React, { useContext } from "react";
import { ThemeContext } from "../theme-context";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      style={{ background: theme.background, color: theme.foreground }}
      onClick={toggleTheme}
    >
      Dark / Light
    </button>
  );
};
