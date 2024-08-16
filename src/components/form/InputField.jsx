import {
  FormControl,
  FormErrorMessage,
  Box,
  FormLabel,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

const InputField = ({
  name,
  title,
  type,
  register,
  error,
  placeholder,
  required,
  maxLength,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [activeType, setActiveType] = useState(type);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (!show) {
      setActiveType("text");
    } else {
      setActiveType("password");
    }
    setShow(!show);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <FormControl isInvalid={error}>
      <Box
        position="absolute"
        top="-3"
        zIndex={4}
        background="#FAFAFA"
        px="2"
        borderRadius="base"
        ml="2">
        <FormLabel
          htmlFor={name}
          mb="0"
          fontSize="sm"
          zIndex="1"
          color="#757575">
          {title}
        </FormLabel>
      </Box>
      <InputGroup>
        <Input
          pl={name == "phone" && isFocused ? "75px" : 2}
          height="55px"
          minW="220px"
          step="any"
          type={activeType}
          maxLength={maxLength || 50}
          placeholder={placeholder}
          {...register(name, {
            required: required ? "Campo Necessario" : false,
          })}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          transition="background-color 0.3s, border-color 0.3s, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
          _hover={{
            bg: isHovered ? "gray.100" : "white",
            transform: "scale(1.01)",
            boxShadow: "base",
          }}
          _focus={{ borderColor: isFocused ? "blue.400" : "gray.300" }}
        />

        {name == "phone" && isFocused && (
          <InputLeftElement width="4.7rem" height="100%">
            <Text color="textFont">+ 258</Text>
          </InputLeftElement>
        )}
        {type == "password" && (
          <InputRightElement width="4.7rem" height="100%">
            <Button size="sm" onClick={handleClick} my="3px">
              {show ? "hide" : "show"}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>

      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.any,
  error: PropTypes.object,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  message: PropTypes.string,
};
export default InputField;
