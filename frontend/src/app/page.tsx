"use client";

import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data } = useSession();

  console.log("here is data", data);

  return (
    <Box>
      123
    </Box>
   
  );
};

export default Home;
