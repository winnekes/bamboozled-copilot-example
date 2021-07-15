import { Center, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

// written by @winnekes
type Question = {
  category: string;
  question: string;
  correct_answer: boolean;
  incorrect_answer: boolean;
};

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isQuizRunning, setIsQuizRunning] = useState(false);

  const getBooleanFromString = (value: string): boolean => {
    return value === "True";
  };

  /* in useEffect fetch questions from https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean and setQuestions */
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean")
      .then((response) => response.json())
      .then((json) => {
        setQuestions(
          json.results.map((question) => ({
            category: question.category,
            question: question.question,
            correct_answer: getBooleanFromString(question.correct_answer), // modified by @winnekes
            incorrect_answer: getBooleanFromString(question.incorrect_answers[0]), // modified by @winnekes
          }))
        );
      });
  }, []);

  /* 
  Render a Center with h="100vh" and a VStack with no props.
  The VStack is a stack of three elements:
  - a Heading with as="h1" and size="3xl" with Text "Bamboozled"
  - a Text  with fontSize="2xl" with Text "made with love by @winnekes and @github-copilot"
  - if isQuizRunning=false render  a Button component with the text "Start the quiz now", size="lg" and onClick={() => setIsQuizRunning(true)}
  */

  return (
    <Center h="100vh">
      <VStack>
        <Heading as="h1" size="3xl">
          Bamboozled
        </Heading>
        <Text fontSize="2xl">made with love by @winnekes and @github-copilot</Text>
        {!isQuizRunning && (
          <Button size="lg" onClick={() => setIsQuizRunning(true)}>
            Start the quiz now
          </Button>
        )}
      </VStack>
    </Center>
  );
}
