import { signIn, useSession } from "next-auth/react";

const handleAppleLogin = async () => {
 signIn("apple");

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