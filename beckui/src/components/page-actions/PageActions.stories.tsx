import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageActions } from './PageActions';

const meta: Meta<typeof PageActions> = {
  title: 'Components/PageActions',
  component: PageActions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSave: { action: 'save clicked' },
    onCancel: { action: 'cancel clicked' },
    onEdit: { action: 'edit clicked' },
    onRemove: { action: 'remove clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof PageActions>;

export const EditMode: Story = {
  args: {
    saved: false,
    disabledButton: false,
    saveLabel: 'Save',
    cancelLabel: 'Cancel',
  },
};

export const EditModeDisabled: Story = {
  args: {
    saved: false,
    disabledButton: true,
    saveLabel: 'Save',
    cancelLabel: 'Cancel',
  },
};

export const SavedMode: Story = {
  args: {
    saved: true,
    editLabel: 'Edit',
    removeLabel: 'Remove',
  },
};

export const CustomLabels: Story = {
  args: {
    saved: false,
    saveLabel: 'Save Changes',
    cancelLabel: 'Discard',
  },
};
