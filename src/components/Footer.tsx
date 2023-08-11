import {
  HStack,
  Icon,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
  Divider,
  Box,
} from "@chakra-ui/react";
import { HiCode } from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";

export const Footer = () => {
  return (
    <Box>
      <Divider borderBottomWidth="6px" variant="dashed" mb="8" />
      <Flex minWidth="max-content" alignItems="center" gap="2" px="8">
        <Heading fontFamily="heading" size="sm">
          ©
        </Heading>
        <Heading fontFamily="mono" size="sm">
          2021-2023
        </Heading>
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
      </Flex>
    </Box>
  );
};
