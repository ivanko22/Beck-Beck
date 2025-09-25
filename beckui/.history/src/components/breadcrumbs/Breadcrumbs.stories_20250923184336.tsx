import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { PageWrapper } from "../wrapper/PageWrapper";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    section: {
      control: "text",
      description: "Character/string used to separate breadcrumb items",
      defaultValue: "/",
    },
    current: {
      control: "object",
      description: "Array of breadcrumb items",
    },
    href: {
      control: "text",
      description: "URL for the section link",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const withPageWrapper = (StoryFn: () => React.ReactNode) => (
  <PageWrapper background="white" style={{ padding: "32px" }}>
    {StoryFn()}
  </PageWrapper>
);

export const Default: Story = {
  args: {
    section: "User Details",
    current: "Cooper Jane",
    href: '#',
  },
  decorators: [withPageWrapper],
};

export const WithLinks: Story = {
  args: {
    section: "User Details",
    current: "Cooper Jane",
    href: "#",
  },
  decorators: [withPageWrapper],
};
