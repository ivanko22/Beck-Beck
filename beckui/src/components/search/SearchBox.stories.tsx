import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SearchBox } from './SearchBox';

const meta: Meta<typeof SearchBox> = {
  title: 'Components/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A search input component with an integrated search icon and customizable styling.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text displayed when input is empty',
      defaultValue: 'Search by Name, Phone',
    },
    value: {
      control: { type: 'text' },
      description: 'Current value of the search input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
  args: {
    placeholder: 'Search by Name, Phone',
  },
};

export const active: Story = {
  args: {
    placeholder: 'Search by Name, Phone',
    value: 'John Doe',
    isActive: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search by Name, Phone',
    value: 'John Doe',
  },
};
