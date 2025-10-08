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
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    accept: {
      control: 'text',
      description: 'File types to accept (e.g., ".pdf,.doc,.docx")',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the upload component',
    },
    onFileSelect: {
      action: 'files selected',
      description: 'Callback when files are selected',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  args: {
    label: 'Drop files here to attach and add files',
    onFileSelect: (files) => console.log('Files selected:', files),
  },
};

export const WithCustomLabel: Story = {
  args: {
    label: 'Upload your documents here',
    onFileSelect: (files) => console.log('Files selected:', files),
  },
};

export const MultipleFiles: Story = {
  args: {
    label: 'Drop multiple files here',
    multiple: true,
    onFileSelect: (files) => console.log('Multiple files selected:', files),
  },
};

export const SpecificFileTypes: Story = {
  args: {
    label: 'Upload PDF documents only',
    accept: '.pdf',
    onFileSelect: (files) => console.log('PDF files selected:', files),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Upload disabled',
    disabled: true,
    onFileSelect: (files) => console.log('Files selected:', files),
  },
};

export const ImageFiles: Story = {
  args: {
    label: 'Upload images',
    accept: 'image/*',
    multiple: true,
    onFileSelect: (files) => console.log('Image files selected:', files),
  },
};

export const DocumentFiles: Story = {
  args: {
    label: 'Upload documents',
    accept: '.pdf,.doc,.docx,.txt',
    multiple: true,
    onFileSelect: (files) => console.log('Document files selected:', files),
  },
};

export const CustomStyling: Story = {
  args: {
    label: 'Custom styled upload area',
    onFileSelect: (files) => console.log('Files selected:', files),
    style: {
      minWidth: '300px',
      minHeight: '80px',
      justifyContent: 'center',
    },
  },
};
