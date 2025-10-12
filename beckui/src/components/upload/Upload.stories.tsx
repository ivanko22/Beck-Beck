import type { Meta, StoryObj } from '@storybook/react';
import { Upload } from './Upload';

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Text to display in the upload area',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text (used when no files selected)',
    },
    withBorder: {
      control: 'boolean',
      description: 'Show upload area with dashed border',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const NoBorder: Story = {
  args: {
    label: 'Drop files here to attach and add files',
    withBorder: false,

  },
};

export const WithBorder: Story = {
  args: {
    label: 'Click or drag files here to attach',
    withBorder: true,
    style: {
      width: 512,
      height: 100,
      padding: '40px 20px',
    },
  },
};

