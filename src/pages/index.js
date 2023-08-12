import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const handleAppleLogin = async () => {
  try {
    const result = await signIn("apple", {
      callbackUrl: "https://apple-login-zeta.vercel.app/",
    });
    console.log("SignIn Result:", result);
  } catch (error) {
    console.error("Error during Apple Sign-In:", error);
  }
};

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    console.log(session);
  }
  return (
    <>
      <button onClick={handleAppleLogin}>sign in with apple </button>
    </>
  );
}
