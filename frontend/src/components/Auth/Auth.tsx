import { CreateUsernameData, CreateUsernameVariables } from "@/util/types";
import { useMutation } from "@apollo/client";
import { Button, Center, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import React from "react";
import UserOperations from "../../graphql/operations/users";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUsername] = React.useState<string>("");

  const [createUsername, { data, loading, error }] = useMutation<
    CreateUsernameData,
    CreateUsernameVariables
  >(UserOperations.Mutations.createUsername);

  const onSubmit = async () => {
    try {
      await createUsername({ variables: { username } });
    } catch (error) {
      console.log("onsubmit error", error);
    }
  };
  return (
    <>
      <Center height="100vh">
        <Stack spacing={8} align="center">
          {session ? (
            <>
              <Text fontSize="3xl">Create Username</Text>
              <Input
                placeholder="Enter a username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <Button width="100%" onClick={onSubmit}>
                Save
              </Button>
            </>
          ) : (
            <>
              <Text fontSize="3xl">MessengerQL</Text>
              <Button onClick={() => signIn("google")}>
                Continue with Google
              </Button>
            </>
          )}
        </Stack>
      </Center>
    </>
  );
};

export default Auth;
