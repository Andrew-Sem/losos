import React, { FC } from "react";
import MyLink from "../UI/MyLink/MyLink";
import cl from "./Navbar.module.css";
import { AiOutlineHome, AiOutlineTool, AiOutlineUser } from "react-icons/ai";
import { CgMathPercent } from "react-icons/cg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

interface link {
  title: string;
  href: string;
  losos: any;
}

const Navbar: FC = () => {
  const links: Array<link> = [
    { title: "Home", href: "/", losos: <AiOutlineHome /> },
    { title: "About", href: "/about", losos: <AiOutlineHome /> },
    { title: "Session", href: "/session", losos: <AiOutlineHome /> },
    { title: "Features", href: "/features", losos: <AiOutlineHome /> },
  ];
  return (
    <nav>
      <ul className={cl.navbar__widescreen}>
        <span>
          <ThemeSwitcher isSmallScreen={false} />
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
        <li className={cl.link__smallscreen}>
          <AiOutlineHome className={cl.icon} />
          <span className={cl.title}>Home</span>
        </li>
        <li className={cl.link__smallscreen}>
          <AiOutlineUser className={cl.icon} />
          <span className={cl.title}>About</span>
        </li>
        <li className={cl.link__smallscreen}>
          {/* <RiMoneyDollarCircleLine className={cl.icon} />
          <span className={cl.title}>Pricing</span> */}
          <ThemeSwitcher isSmallScreen={true} styles={cl.icon} />
        </li>
        <li className={cl.link__smallscreen}>
          <CgMathPercent className={cl.icon} />
          <span className={cl.title}>Session</span>
        </li>
        <li className={cl.link__smallscreen}>
          <AiOutlineTool className={cl.icon} />
          <span className={cl.title}>Features</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
