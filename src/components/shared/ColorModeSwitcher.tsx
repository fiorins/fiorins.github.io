import React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

const ColorModeSwitcher = React.forwardRef(
  (
    props: Omit<IconButtonProps, "aria-label">,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

    return (
      <IconButton
        ref={ref}
        aria-label="Color mode switch"
        variant="ghost"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        rounded="full"
        _hover={{
          bg: "icon-hover",
        }}
        _active={{ bg: "transparent" }}
        style={{ boxShadow: "none" }}
        {...props}
      />
    );
  }
);

export default ColorModeSwitcher;
