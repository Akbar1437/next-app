import React from "react";
import NextLInk from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLInk href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLInk>
  );
};

export default Link;
