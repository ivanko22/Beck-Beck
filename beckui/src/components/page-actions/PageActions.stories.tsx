import type { Meta, StoryObj } from '@storybook/react';
import { PageActions } from './PageActions';
import { CheckmarkIcon, CloseIcon } from '../icons';

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
  },
};

export const IconButtonSave: Story = {
  args: {
    state: 'edit',   
    type: 'iconButton',
    leftIcon: <CloseIcon size={20} />,
    rightIcon: <CheckmarkIcon size={20} />,
  },
};

export const IconButtonEdit: Story = {
  args: {
    state: 'saved',   
    type: 'iconButton',
  },
};

