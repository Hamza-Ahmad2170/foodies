"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./css/NavLink.module.css";

export default function NavLink({ href, children }) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${classes.link} ${pathName === href ? classes.active : ""}`}
    >
      {children}
    </Link>
  );
}
