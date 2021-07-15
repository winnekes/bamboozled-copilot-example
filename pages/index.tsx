import { Center, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Quiz } from "../components/quiz";

export default function Home() {
  // state defined by @winnekes
  const [isQuizRunning, setIsQuizRunning] = useState(false);

  /* 
  Copilot, render a Center with h="100vh" and a VStack with no props.
  The VStack is a stack of three elements:
  - a Heading with as="h1" and size="3xl" with Text "Bamboozled"
  - a Text with fontSize="xl" and pb={10} with Text "made by winnekes and Github Copilot"
  - if !isQuizRunning render  a Button component with the text "Start the quiz now", size="lg" and onClick={() => setIsQuizRunning(true)}
  - if IsQuizRunning render the Quiz component 
  */
  return (
    <Center h="100vh">
      <VStack>
        <Heading as="h1" size="3xl">
          Bamboozled
        </Heading>
        <Text fontSize="xl" pb={10}>
          made by winnekes and Github Copilot
        </Text>
        {!isQuizRunning && (
          <Button size="lg" colorScheme="blue" onClick={() => setIsQuizRunning(true)}>
            Start the quiz now
          </Button>
        )}
        {isQuizRunning && <Quiz />}
      </VStack>
    </Center>
  );
}
