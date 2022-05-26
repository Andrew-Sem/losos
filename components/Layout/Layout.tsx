import Head from "next/head";
import cl from "./Layout.module.css";
import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

interface LayoutProps {
  title?: string;
  children: any;
}

const Layout: FC<LayoutProps> = ({ title = "Next app", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="keywords"
          content="next, next.js, nextjs, javascript, js, react, react.js"
        />
        <meta name="description" content="losos" />
        <meta charSet="utf-8" />
      </Head>
      <header className={cl.header}>
        <div className="container">
          <div className={cl.header_inner}>
            {/* <ThemeSwitcher /> */}
            <Navbar />
          </div>
        </div>
      </header>
      <main className={cl.main}>{children}</main>
    </>
  );
};

export default Layout;
