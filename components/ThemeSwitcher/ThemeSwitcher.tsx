import React, { useState, useEffect, FC } from "react";
import cl from "./ThemeSwitcher.module.css";
import { BiSun } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";

interface ThemeSwitcherProps {
  styles?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ styles }) => {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    const theme: string = window.localStorage.getItem("theme") || "light";
    theme === "light" ? setIcon("dark") : setIcon("light");
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = (theme: string) => {
    if (theme === "dark") {
      setIcon("dark");
      theme = "light";
      localStorage.setItem("theme", theme);
    } else {
      setIcon("light");
      theme = "dark";
      localStorage.setItem("theme", theme);
    }
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div>
      <div className={[cl.switcher_wrapper, styles].join(" ")}>
        {icon === "dark" ? (
          <BsMoon
            className={[cl.switcher, cl.dark].join(" ")}
            onClick={() => toggleTheme("light")}
          />
        ) : (
          <BiSun
            className={[cl.switcher, cl.light].join(" ")}
            onClick={() => toggleTheme("dark")}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
