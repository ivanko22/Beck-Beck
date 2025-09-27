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

    inputType: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'PasswordForgot', 'number', 'tel', 'url'],
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

export const WithError: Story = {
  args: {
    placeholder: 'Enter text here...',
    value: 'User&1234',
    label: 'Username',
    error: 'Username may only use A–Z, 0–9',
    size: 'large',
  },
};

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
    inputType: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    size: 'large',
  },
};

export const PasswordForgot: Story = {
  args: {
    inputType: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    size: 'large',
    showForgotPassword: true,
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Input with label',
    label: 'Input with label',
    value: 'Input with label',
    size: 'large',
    showForgotPassword: false,
  },
};

export const NoBorder: Story = {
  args: {
    value: 'Read-only input',
    label: 'Read-only Input',
    size: 'large',
    noBorder: true,
  },
};

export const Textarea: Story = {
  args: {
    inputType: 'textarea',
    placeholder: 'Enter multiple lines of text here...',
    label: 'Textarea',
    customSize: {
      width: '1000px',
      height: '100px',
    },
  },
};

export const TextareaFilled: Story = {
  args: {
    inputType: 'textarea',
    value: 'This template is used to request medical records from a provider. It ensures we have complete documentation of the client’s treatment history, which is necessary for case evaluation and settlement negotiations. Use this request whenever medical records are needed to support the client’s claim.',
    label: 'Textarea',
    customSize: {
      width: '1000px',
      height: '100px',
    },
  },
};

export const TextareaFilledDisabled: Story = {
  args: {
    inputType: 'textarea',
    value: 'This template is used to request medical records from a provider. It ensures we have complete documentation of the client’s treatment history, which is necessary for case evaluation and settlement negotiations. Use this request whenever medical records are needed to support the client’s claim.',
    label: 'Textarea',
    customSize: {
      width: '1000px',
      height: '100px',
    },
    disabled: true,
  },
};
