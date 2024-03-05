import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "../../../../../prisma/generated";

const prisma = new PrismaClient()

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, target }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          const userExists = await prisma.user.findFirst({where:{ email }});

          if (!userExists) {
            return user
          }else{
            return user
          }
        } catch (error) {
          return user
        }
      }
    },
  },
};

export default authOptions