import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    console.log(session);
  }
  const push = () => {
    router.push("/register");
  };

  return (
    <>
      <button className="cursor-pointer" onClick={push}>
        Welcome click here
      </button>
      {!session ? (
        <>
          <p>hiii no sesssion {session?.toString()}</p>
        </>
      ) : (
        <div>
          <p>Email: {session.user.email}</p>
        </div>
      )}
    </>
  );
}