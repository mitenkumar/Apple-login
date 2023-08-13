import { signIn, signOut } from "next-auth/react"
import AppleProvider from "next-auth/providers/apple"


const handleAppleSignIn = async (e) => {
    e.preventDefault()
    signIn('apple', { callbackUrl: 'https://stage-wl.liquidox.click' });}

const handleSignOut = async () => {
    signOut()
}



const authOptions = {
    session: {
        strategy: "jwt"
    },
    cookies: {
        pkceCodeVerifier: {
          name: 'next-auth.pkce.code_verifier',
          options: {
            httpOnly: true,
            sameSite: 'none',
            path: '/',
            secure: true
          }
        }
      },
    providers: [
            AppleProvider({
              clientId: process.env.APPLE_CLIENT_ID,
              clientSecret: process.env.APPLE_CLIENT_SECRET
            })
    ],
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

    secret: process.env.NEXTAUTH_SECRET
}

export { handleSignOut, authOptions, handleAppleSignIn }
