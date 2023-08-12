import { useState, useEffect } from "react";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme";
import Root from "./routes/Root";
import Home from "./routes/Home";
import BeatLoader from "react-spinners/BeatLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      // { path: "/", element: <Home /> },
      { index: true, element: <Home /> },
      // {
      //   path: "/notes/:noteId",
      //   element: <Note />,
      //   errorElement: <ErrorPage />,
      // },
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
        <Box
          //fontSize="xl"
          fontSize={{ base: "lg", md: "xl" }}
        >
          <RouterProvider router={router} />
        </Box>
      )}
    </ChakraProvider>
  );
}

export default App;
