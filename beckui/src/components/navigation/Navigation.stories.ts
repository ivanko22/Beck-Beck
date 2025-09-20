import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';
import { SignOutIcon } from '../icons';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,

  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],

  argTypes: {
    userEmail: {
      control: { type: 'text' },
      description: 'User email address displayed in the profile section',
    },
    onItemClick: {
      action: 'navigation item clicked',
      description: 'Callback function when a navigation item is clicked',
    },
    onSearch: {
      action: 'search performed',
      description: 'Callback function when search is performed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userEmail: 'ivankordonets@gmail.com',
    dropdownMenuItems: [
      { label: 'Profile' },
      { label: 'Settings' },
      { label: 'Sign out', icon: SignOutIcon }
    ],
  },
};
