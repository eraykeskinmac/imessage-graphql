"use client";

import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log("here is data", session);

  return (
    <div>
      <button onClick={() => signIn("google")}>Sign In</button>
    </div>
  );
}
