import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Inputs';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'text' },
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default input
export const Default: Story = {
  args: {
    placeholder: 'Enter text here...',
    label: 'Input Label',
  },
};

// Small input
export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small input',
    label: 'Small Input',
  },
};

// Large input
export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large input',
    label: 'Large Input',
  },
};

// Input with error
export const WithError: Story = {
  args: {
    placeholder: 'Enter text here...',
    label: 'Input with Error',
    error: 'This field is required',
  },
};

// Disabled input
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    label: 'Disabled Input',
    disabled: true,
  },
};

// Email input
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email Address',
  },
};

// Password input
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
  },
};

// Number input
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
    label: 'Number Input',
  },
};

// Input without label
export const NoLabel: Story = {
  args: {
    placeholder: 'Input without label',
  },
};
