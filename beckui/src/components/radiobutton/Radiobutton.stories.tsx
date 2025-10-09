import type { Meta, StoryObj } from "@storybook/react";
import { RadioButtonGroup, RadioOption } from "./RadioButtonGroup";

const meta: Meta<typeof RadioButtonGroup> = {
  title: "Components/RadioButtonGroup",
  component: RadioButtonGroup,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof RadioButtonGroup>;

const basicOptions: RadioOption[] = [
  { label: "Option A", value: "option-a" },
  { label: "Option B", value: "option-b" },
  { label: "Option C", value: "option-c" },
];

const yesNoOptions: RadioOption[] = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const yesNoMaybeOptions: RadioOption[] = [
  { label: "Maybe", value: "maybe" },
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

export const BasicGroup: Story = {
  args: {
    title: "Basic Group",
    name: "basic-group",
    options: basicOptions,
    defaultValue: "option-a",
  },
};

export const VerticalLayout: Story = {
  args: {
    title: "Vertical Layout",
    name: "vertical-group",
    options: basicOptions,
    direction: "vertical",
    defaultValue: "option-b",
    gap: "12px",
  },
};

export const WithDisabledOption: Story = {
  args: {
    title: "With Disabled Option",
    name: "disabled-group",
    options: [
      { label: "Option A", value: "option-a" },
      { label: "Option B", value: "option-b", disabled: true },
      { label: "Option C", value: "option-c" },
    ],
    defaultValue: "option-a",
  },
};

export const FullyDisabled: Story = {
  args: {
    title: "Fully Disabled",
    name: "fully-disabled",
    options: yesNoOptions,
    disabled: true,
    defaultValue: "yes",
  },
};

export const ThreeOptionsExample: Story = {
  args: {
    title: "Three Options Example",
    name: "three-options",
    options: yesNoMaybeOptions,
    direction: "horizontal",
    gap: "30px",
    defaultValue: "maybe",
  },
};

