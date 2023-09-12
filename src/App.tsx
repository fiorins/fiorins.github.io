/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme";
import RootLayout from "./routes/RootLayout";
import HomePage from "./routes/HomePage";
import NotFoundPage from "./routes/NotFoundPage";
import ErrorPage from "./routes/ErrorPage";
import NotePage, { loader as notePageLoader } from "./routes/NotePage";
import NoteTestPage from "./routes/NoteTestPage";
import BeatLoader from "react-spinners/BeatLoader";
import Note from "./components/Note";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/note",
        element: <Note />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/notes/:title", //without "/notes/" it could be in conflit with other github pages
        element: <NotePage />,
        loader: notePageLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const onLoadEffect = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(onLoadEffect, []);

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <Flex minHeight="100vh" justifyContent="center" alignItems="center">
          <BeatLoader color="#899499" size={20} />
        </Flex>
      ) : (
        <Box fontSize={{ base: "lg", md: "xl" }}>
          <RouterProvider router={router} />
        </Box>
      )}
    </ChakraProvider>
  );
}

export default App;
