import { PrismaAdapter } from "@next-auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";

const prisma = new PrismaClient();
const scopes = ["identify"].join(" ");

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
      authorization: { params: { scope: scopes } },
    }),
  ],
  session: { strategy: "jwt" },
};

export default authOptions;
