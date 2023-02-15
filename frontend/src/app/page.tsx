"use client";

import { Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  const { data } = useSession();

  console.log("here is data", data);

  return (
    <div>
      {data?.user ? (
        <Button colorScheme="red" onClick={() => signOut()}>
          Sign Out
        </Button>
      ) : (
        <Button colorScheme="blue" onClick={() => signIn("goggle")}>
          Sign In
        </Button>
      )}
      {data?.user?.name}
    </div>
  );
}
