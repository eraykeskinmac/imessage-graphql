"use client";

import { theme } from "@/chakra/theme";
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
        <AuthContext>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </AuthContext>
      </body>
    </html>
  );
}
