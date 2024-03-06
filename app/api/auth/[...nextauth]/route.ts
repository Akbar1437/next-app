import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord";

const prisma = new PrismaClient();
const scopes = ["identify", "email", "applications.commands.permissions"];
const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
      authorization: { params: { scope: scopes.join(" ") } },
    }),
  ],
});
export { handler as GET, handler as POST };
