import React, { FC } from "react";
import MyLink from "../UI/MyLink/MyLink";
import cl from "./Navbar.module.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineTool } from "react-icons/ai";
import { GiCirclingFish } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

interface link {
  title: string;
  href: string;
  icon: any;
}

const Navbar: FC = () => {
  const links: Array<link> = [
    { title: "Home", href: "/", icon: <AiOutlineHome className={cl.icon} /> },
    {
      title: "About",
      href: "/about",
      icon: <AiOutlineUser className={cl.icon} />,
    },
    {
      title: "Losos",
      href: "/losos",
      icon: <GiCirclingFish className={cl.icon} />,
    },
    {
      title: "Features",
      href: "/features",
      icon: <VscTools className={cl.icon} />,
    },
  ];
  return (
    <nav>
      <ul className={cl.navbar__widescreen}>
        <span>
          <ThemeSwitcher />
        </span>
        <div className={cl.links__widescreen}>
          {links.map((link) => (
            <li key={link.href}>
              <MyLink title={link.title} href={link.href} />
            </li>
          ))}
        </div>
      </ul>
      <ul className={cl.navbar__smallscreen}>
        {links.map((link) => (
          <li key={link.href} className={cl.link__smallscreen}>
            {link.icon}
            <MyLink href={link.href} title={link.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
