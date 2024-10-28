import React from "react";
import styled from "styled-components";
import { type RadioProps } from "./Radio.types";

const StyledRadio = styled.input`
  margin: 0.5rem;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
  `}
`;

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <StyledRadio
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Radio;
