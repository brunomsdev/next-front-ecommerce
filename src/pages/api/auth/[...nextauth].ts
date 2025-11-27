import instance from "@/services/api";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await instance.post("/login", {
            email: credentials.email,
            password: credentials.password,
          });

          const { token, user } = response.data;

          if (token && user) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image,
              token: token,
            };
          }

          return null;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {},
  pages: {},
  session: {},
  secret: "",
};

export default NextAuth(authOptions);
