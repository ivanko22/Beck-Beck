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
    size: 'large',
  },
};

export const Active: Story = {
  args: {
    placeholder: 'Enter text here...',
    label: 'Input Label',
    size: 'large',
    value: 'This is activated input',
    active: true,
  },
};

export const Filled: Story = {
  args: {
    value: 'This is filled input',
    label: 'Filled Input Label',
    size: 'large',
  },
};

// Input with error
// export const WithError: Story = {
//   args: {
//     placeholder: 'Enter text here...',
//     label: 'Input with Error',
//     error: 'This field is required',
//   },
// };

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    label: 'Disabled Input',
    disabled: true,
    size: 'large',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    size: 'large',
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Input with label',
    label: 'Input with label',
    value: 'Input with label',
    size: 'large',
  },
};
