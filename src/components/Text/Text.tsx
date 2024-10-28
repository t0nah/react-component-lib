import React from "react";
import styled from "styled-components";
import { type TextProps } from "./Text.types";

const StyledText = styled.span<TextProps>`
  font-family: "Playfair Display", serif;
  font-size: ${(props) =>
    props.types === "header"
      ? "1.6rem"
      : props.types === "paragraph"
        ? "1rem"
        : "0.7rem"};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  ${(props) =>
    props.disabled &&
    `
    background-color: grey;
    cursor: not-allowed;
    color: #ccc;
  `}
`;

const Text: React.FC<TextProps> = ({
  types = "paragraph",
  bold,
  italic,
  text,
  ...props
}) => {
  return (
    <StyledText types={types} bold={bold} italic={italic} {...props}>
      {text}
    </StyledText>
  );
};

export default Text;
