import React from "react";
import styled from "styled-components";
import { type LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  font-size: ${(props) =>
    props.size === "small"
      ? "0.8rem"
      : props.size === "medium"
        ? "1rem"
        : "1.1rem"};
  font-family: "Playfair Display", serif;
  cursor: pointer;
  color: "#2F2F2F";
  ${(props) =>
    props.disabled &&
    `
    background-color: grey;
    cursor: not-allowed;
    color: #ccc;
  `}
`;

const Label: React.FC<LabelProps> = ({
  size = "medium",
  htmlFor,
  text,
  disabled = false,
  ...props
}) => {
  return (
    <StyledLabel size={size} htmlFor={htmlFor} disabled={disabled} {...props}>
      {text}
    </StyledLabel>
  );
};

export default Label;
