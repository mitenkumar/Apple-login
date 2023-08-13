import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });
const handleAppleLogin = async () => {
  try {
    const result = await signIn("apple");
    if (result?.error) {
      console.error("Error during Apple Sign-In:", result.error);
    } else if (result?.session) {
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
      <button onClick={handleAppleLogin}>Sign in with Apple</button>
      {!session ? (
        <>
          <p>Welcome register </p>
        </>
      ) : (
        <div>
          <p>Email: {session.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
    </>
  );
}