import NextAuth from "next-auth";

import AppleProvider from "next-auth/providers/apple";

export default NextAuth({
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET,
      scope: "name email",
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
      },
    }),
  ],
});
