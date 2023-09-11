import {
  HStack,
  Icon,
  Stack,
  Heading,
  Spacer,
  useColorModeValue,
  Divider,
  Box,
  Flex,
} from "@chakra-ui/react";
import { HiCode } from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";

export const Footer = () => {
  return (
    <Flex flexDirection="column" w="full">
      <Divider borderBottomWidth="6px" variant="dashed" mb="8" />
      <Stack direction={["column", "row"]} px={{ base: 2, md: 8 }}>
        <Box>
          <Heading fontFamily="heading" size="sm" display="inline" pr={4}>
            ©
          </Heading>
          <Heading fontFamily="mono" size="sm" display="inline">
            2021-2023
          </Heading>
        </Box>
        <Spacer />
        <HStack spacing={2}>
          <Icon as={HiCode} verticalAlign="sub" />
          <Heading fontFamily="mono" size="sm">
            with
          </Heading>
          <Icon
            as={IoMdHeart}
            verticalAlign="sub"
            color={useColorModeValue("#C3B1E1", "#702963")}
          />
          <Heading fontFamily="mono" size="sm">
            by the undersigned
          </Heading>
        </HStack>
      </Stack>
    </Flex>
  );
};
