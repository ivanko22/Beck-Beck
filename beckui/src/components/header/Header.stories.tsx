import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    section: { control: "text", description: "Breadcrumbs section title" },
    current: { control: "text", description: "Breadcrumbs current item" },
    subtitle: { control: "text", description: "Subtitle text under the header" },
    onClose: { action: "closed", description: "Triggered when close icon is clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    section: "User Details",
    current: "Cooper Jane",
    subtitle: "Here you can manage internal user",
  },
};
