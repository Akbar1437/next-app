"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
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
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors px-5": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <Box>
          {status === "authenticated" && (
            <Link href={"/api/auth/signout"}>Log out</Link>
          )}
          {status === "unauthenticated" && (
            <Link href={"api/auth/signin"}>Login</Link>
          )}
        </Box>
      </ul>
    </nav>
  );
};

export default NavBar;
