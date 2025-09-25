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
      description: 'Parent/section label (left part).',
    },
    current: {
      control: "text",
      description: 'Current page label (right/active part).',
    },
    href: {
      control: "text",
      description: 'Optional URL for the section link. Omit to render plain text.',
    },
    onSectionClick: {
      action: 'section clicked',
      table: { category: 'events' },
      description: 'Fires when the section is clicked (if clickable).',
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
    href: "",
  },
  decorators: [withPageWrapper],
};
