import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  const router=useRouter()
const redirect=()=>{
router.push("/register")
}
  return (
    <div>
      {!session ? (
        <button onClick={redirect}>Welcome! No session found.</button>
      ) : (
        <div>
          <h1>Welcome, {session.user.name}</h1>
          <p>Email: {session.user.email}</p>
          {session.user.image && (
            <Image src={session.user.image} alt="Profile" width={100} />
          )}
        </div>
      )}
    </div>
  );
}
