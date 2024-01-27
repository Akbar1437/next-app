import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-y-1 border-y mb-5  h-14">
      <Link href={"/"} className="mt-2">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 px-5">
        <li>
          {links.map((link) => (
            <Link
              key={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors px-5"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
