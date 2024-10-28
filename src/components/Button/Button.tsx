import React from "react";
import styled from "styled-components";
import { type ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "8px"
      : props.size === "medium"
        ? "12px 25px"
        : "18px 32px"};
  border: none;
  font-size: 1rem;
  border-radius: 1rem;
  min-width: 80px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  transition:
    background-color 0.3s linear,
    color 0.3s linear;

  background-color: ${(props) =>
    props.primary === true ? "#EB5552" : "#2F2F2F"};

  color: #ffffff;

  &:hover {
    background-color: ${(props) => (props.primary ? "#F5B74C" : "#878484")};
  }

  &:focus {
    outline: 2px solid #eb5552;
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => (props.primary ? "#C73438" : "#000000")};
  }

  &:disabled {
    background-color: #c8c8c8;
    color: #ffffff;
    cursor: not-allowed;
  }

  ${(props) =>
    props.isSuccess &&
    `
    background-color: #68E365;
    &:hover {
      background-color: #32B53A;
    }
    &:focus {
      outline: 2px solid #68E365;
      outline-offset: 2px;
    }
    &:active {
      background-color: #008906;
    }
  `}

  ${(props) =>
    props.isError &&
    `
    background-color: #FF677B;
    &:hover {
      background-color: F84B6A;
    }
    &:focus {
      outline: 2px solid #FF677B;
      outline-offset: 2px;
    }
    &:active {
      background-color: #F72B50;
    }
  `}

  ${(props) =>
    props.isWarning &&
    `
    background-color: #FFC021;
    &:hover {
      background-color: #FFAC00;
    }
    &:focus {
      outline: 2px solid #FFC021;
      outline-offset: 2px;
    }
    &:active {
      background-color: #FFA200;
    }
  `}
`;

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  disabled = false,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      size={size}
      {...props}
      aria-disabled={disabled ? true : undefined}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
