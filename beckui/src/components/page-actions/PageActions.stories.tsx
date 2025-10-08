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
    state: 'save',
    type: 'button',
    saveLabel: 'Save',
  },
};

export const Save: Story = {
  args: {
    state: 'edit',
    type: 'button',
    saveLabel: 'Save',
  },
};

export const Saved: Story = {
  args: {
    state: 'saved',   
    type: 'button',
    editLabel: 'Edit',
  },
};

export const IconButtonSave: Story = {
  args: {
    state: 'edit',   
    type: 'iconButton',
    editLabel: 'Edit',
  },
};

export const IconButtonEdit: Story = {
  args: {
    state: 'saved',   
    type: 'iconButton',
    editLabel: 'Edit',
  },
};

