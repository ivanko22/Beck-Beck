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

export const Default: Story = {
  args: {
    type: 'save',
    saveLabel: 'Save',
  },
};

export const Save: Story = {
  args: {
    type: 'edit',
    saveLabel: 'Save',
  },
};

export const Saved: Story = {
  args: {
    type: 'saved',
    editLabel: 'Edit',
  },
};

