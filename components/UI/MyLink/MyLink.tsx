import Link from "next/link";
import cl from "./MyLink.module.css";
import { FC } from "react";

interface MyLinkProps {
  href: string;
  title: string;
  className?: string;
  icon?: React.FC;
  props?: any;
}

const MyLink: FC<MyLinkProps> = ({ href, title, icon, className, props }) => {
  return (
    <Link href={href}>
      <a className={[cl.a, className].join(" ")} {...props}>
        {icon}
        {title}
      </a>
    </Link>
  );
};

export default MyLink;
