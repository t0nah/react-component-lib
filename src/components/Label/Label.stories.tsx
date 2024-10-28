import { type Meta, type StoryObj } from "@storybook/react";
import Label from "./Label";
import { type LabelProps } from "./Label.types";

const meta: Meta = {
  title: "Components/Label",
  component: Label,
  argTypes: {},
};
export default meta;

export const Default: StoryObj<LabelProps> = {
  args: {
    htmlFor: "my-input",
    text: "Username:",
  },
};

export const SmallFontSize: StoryObj<LabelProps> = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const LargeFontSize: StoryObj<LabelProps> = {
  args: {
    ...Default.args,
    size: "large",
  },
};

export const DisabledLabel: StoryObj<LabelProps> = {
  args: {
    ...Default.args,
    size: "large",
    disabled: true,
  },
};
