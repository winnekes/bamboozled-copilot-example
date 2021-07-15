import React, { useState, useEffect } from "react";
import { Question } from "../types";
import { Center, Box, Text, Button, Stack, VStack, Spinner } from "@chakra-ui/react";

export const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionsCorrectlyAnsweredCount, setQuestionsCorrectlyAnsweredCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Copilot, create a function called getBooleanFromString that returns true if the string is "True"
  const getBooleanFromString = (value: string): boolean => {
    return value === "True";
  };

  // Copilot, validate the answer of the user and update the questionsCorrectlyAnsweredCount if the answer is correct, and regardless of correct answer set the currentQuestion to the next question
  const validateAnswer = (answer: boolean) => {
    const question = questions[currentQuestion];
    const correctAnswer = question.correctAnswer;

    if (answer === correctAnswer) {
      setQuestionsCorrectlyAnsweredCount(questionsCorrectlyAnsweredCount + 1);
    }
    setCurrentQuestion(currentQuestion + 1); // modified by @winnekes
  };

  // Copilot, fetch using useEffect questions from https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean and setQuestions
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean")
      .then((response) => response.json())
      .then((json) => {
        setQuestions(
          json.results.map((question) => ({
            category: question.category,
            question: question.question,
            correctAnswer: getBooleanFromString(question.correct_answer), // modified by @winnekes
            incorrectAnswer: getBooleanFromString(question.incorrect_answers[0]), // modified by @winnekes
          }))
        );
      });
  }, []);

  // Copilot, render a Box with a Text if questions.length > 0 that renders a question from questions with the index currentQuestion, but if !questions.length then render a Spinner component
  // add two buttons to the Box, one with the Text "True" and one with the Text "False"
  return (
    <Box>
      {!questions.length && <Spinner />}
      {questions.length > 0 && (
        <>
          {questions.length > currentQuestion && (
            <Center py={6}>
              <Box maxW="600px" w="full" boxShadow="2xl" rounded="md" p={6} overflow="hidden">
                <Stack>
                  <Text color="green.500" textTransform="uppercase" fontWeight={800} fontSize="sm">
                    Question #{currentQuestion + 1}
                  </Text>
                  {/*modified by @winnekes */}
                  <Text
                    fontSize="2xl"
                    dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}
                    mb={6}
                  ></Text>

                  {/*modified by @winnekes */}
                  <Center>
                    <Button
                      size="lg"
                      colorScheme="green"
                      onClick={() => validateAnswer(true)}
                      mr={2}
                    >
                      True
                    </Button>
                    <Button size="lg" colorScheme="red" onClick={() => validateAnswer(false)}>
                      False
                    </Button>
                  </Center>
                </Stack>
              </Box>
            </Center>
          )}

          {/* Could not communicate well enough with the Copilot to write these lines */}
          {questions.length === currentQuestion && (
            <VStack>
              <Text fontSize="4xl">
                Congratulations, you answered {questionsCorrectlyAnsweredCount} of{" "}
                {questions.length} questions correctly!
              </Text>
            </VStack>
          )}
        </>
      )}
    </Box>
  );
};
