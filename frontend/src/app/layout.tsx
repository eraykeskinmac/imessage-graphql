"use client";

import { theme } from "@/chakra/theme";
import { client } from "@/graphql/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContext from "../pages/api/auth/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ApolloProvider client={client}>
          <AuthContext>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </AuthContext>
        </ApolloProvider>
      </body>
    </html>
  );
}
