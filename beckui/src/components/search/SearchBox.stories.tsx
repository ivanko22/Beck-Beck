import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SearchBox } from './SearchBox';

import { Wrapper } from '../wrapper/PageWrapper';

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

const withPageWrapper = (StoryFn: () => React.ReactNode) => (
  <Wrapper background="darkBlue">{StoryFn()}</Wrapper>
);

const withWhiteWrapper = (StoryFn: () => React.ReactNode) => (
  <Wrapper background="white">{StoryFn()}</Wrapper>
);

export const Default: Story = {
  args: {
    placeholder: 'Search by Name, Phone',
  },
  decorators: [withPageWrapper],
};

export const active: Story = {
  args: {
    placeholder: 'Search by Name, Phone',
    value: 'John Doe',
    isActive: true,
  },
  decorators: [withPageWrapper],
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search by Name, Phone',
    value: 'John Doe',
  },
  decorators: [withPageWrapper],
};

export const Primary: Story = {
  args: {
    placeholder: 'Search by Case Number',
    type: 'primary',
  },
  decorators: [withWhiteWrapper],
};

export const PrimaryActive: Story = {
  args: {
    placeholder: 'Search by Case Number',
    type: 'primary',
    isActive: true,
  },
  decorators: [withWhiteWrapper],
};


export const PrimaryWithValue: Story = {
  args: {
    placeholder: 'Search by Case Number',
    type: 'primary',
    value: '#12374',
  },
  decorators: [withWhiteWrapper],
};