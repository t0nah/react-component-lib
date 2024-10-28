import React from "react";
import { type Meta, type Story } from "@storybook/react";
import Button from "./Button";
import { type ButtonProps } from "./Button.types";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};
export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  primary: true,
  size: "medium",
  text: "Primary Medium",
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  size: "small",
  text: "Small Button",
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: "large",
  text: "Large Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  size: "medium",
  text: "Disabled",
  disabled: true,
};

export const Success = Template.bind({});
Success.args = {
  primary: true,
  size: "medium",
  text: "Success",
  isSuccess: true,
};

export const Error = Template.bind({});
Error.args = {
  primary: true,
  size: "medium",
  text: "Error",
  isError: true,
};

export const Warning = Template.bind({});
Warning.args = {
  primary: true,
  size: "medium",
  text: "Warning",
  isWarning: true,
};
