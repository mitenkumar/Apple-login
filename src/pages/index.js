import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const handleAppleLogin = async () => {
  try {
    const result = await signIn("apple", {
      callbackUrl: "https://apple-login-zeta.vercel.app/",
    });

    if (result?.error) {
      console.error("Error during Apple Sign-In:", result.error);
    } else if (result?.session) {
      // User is successfully signed in, you can access user data from result.session.user
      console.log("Signed in user:", result.session.user);
    }
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
      {!session ? (
        <>
          <p>Welcome</p>
          <button onClick={handleAppleLogin}>Sign in with Apple</button>
        </>
      ) : (
        <div>
          <p>Welcome, {session.user.name}!</p>
          <p>Email: {session.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
    </>
  );
}
