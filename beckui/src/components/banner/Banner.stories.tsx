import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['warning', 'info', 'success', 'error'],
      description: 'The variant/style of the banner',
    },
    children: {
      control: 'text',
      description: 'The message content to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Driver and policyholder names different. Compare BP with PR to check if the client has their own policy. If confirmed, add a second insurance section.',
  },
};

export const ShortWarning: Story = {
  args: {
    variant: 'warning',
    children: 'This is a warning message.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'An error has occurred. Please try again.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Operation completed successfully.',
  },
};

export const CustomWidth: Story = {
  args: {
    variant: 'warning',
    children: 'Driver and policyholder names different. Compare BP with PR to check if the client has their own policy. If confirmed, add a second insurance section.',
    style: { maxWidth: '600px' },
  },
};


