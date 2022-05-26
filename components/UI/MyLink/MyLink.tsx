import Link from "next/link";
import cl from "./MyLink.module.css";
import { FC } from "react";

interface MyLinkProps {
  href: string;
  title: string;
  props?: any;
}

const MyLink: FC<MyLinkProps> = ({ href, title, props }) => {
  return (
    <Link href={href}>
      <a className={cl.a} {...props}>
        {title}
      </a>
    </Link>
  );
};

export default MyLink;
