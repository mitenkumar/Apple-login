import { signIn } from "next-auth/react";
import AppleProvider from "next-auth/providers/apple";
import NextAuth from "next-auth/next";
const handleAppleSignIn = async (e) => {
  e.preventDefault();
  signIn("apple");
};

export default NextAuth({
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET,
    }),
  ],
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  pages: {
      signIn: '/register'
  },
  callbacks: {
      async signIn(user, account, profile) {
          console.log(user);
          return true;
      },
      async redirect(url, baseUrl) {
          return `${process.env.NEXTAUTH_URL}/register`;
      },
  },
  callbackUrl: `${process.env.NEXTAUTH_URL}/accredited-investor`,

  secret: process.env.NEXTAUTH_SECRET,
});

export { handleAppleSignIn };
