import { Center, Heading, VStack } from "@chakra-ui/react";

export default function Home() {
  /* Render a Center with h of "100vh" and a VStack.
  The VStack is a stack of two elements:
  - a Heading as="h1" and size="3xl" with Text "Bamboozled"
  - another Heading as="h2" and size="2xl" with Text "made with love by Simona and Github Copilot"
   */

  // written by Github Copilot without modification
  return (
    <Center h="100vh">
      <VStack>
        <Heading as="h1" size="3xl">
          Bamboozled
        </Heading>
        <Heading as="h2" size="2xl">
          made with love by Simona and Github Copilot
        </Heading>
      </VStack>
    </Center>
  );
}
