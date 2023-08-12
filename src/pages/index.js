import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const handleAppleLogin = async () => {
  try {
    const result = await signIn("apple", {
      callbackUrl: `https://apple-login-featu8dke-mitenkumar.vercel.app/`,
    });
    console.log("SignIn Result:", result);
  } catch (error) {
    console.error("Error during Apple Sign-In:", error);
  }
};
export default function Home() {
  return (
    <>
      <button onClick={handleAppleLogin}>sign in with apple </button>
    </>
  );
}
