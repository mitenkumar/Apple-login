import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const handleAppleLogin = async () => {
  try {
    await signIn("apple");
  } catch (error) {
    console.error("Error during Apple Sign-In:", error);
  }
};

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      {!session ? (
        <button onClick={handleAppleLogin}>Sign in with Apple</button>
      ) : (
        <div>
          <p>Email: {session.user.email}</p>
          <p>Name: {session.user.name}</p>
      
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
