import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { UserDropdown } from './UserDropdown';
import { PageWrapper } from '../wrapper/PageWrapper';
import { SignOutIcon } from '../icons';

const meta: Meta<typeof UserDropdown> = {
  title: 'Components/UserDropdown',
  component: UserDropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    email: {
      control: 'text',
      description: 'User email displayed in the dropdown',
      defaultValue: 'ivankordonets@gmail.com',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the dropdown menu is open',
      defaultValue: false,
    },
    menuItems: {
      control: 'object',
      description: 'Array of menu item labels',
      defaultValue: ['Profile', 'Settings', 'Sign out'],
    },
    onSelect: {
      action: 'menu item selected',
      description: 'Triggered when a menu item is clicked',
    },
    onLogout: { action: 'onLogout' },
  },
};

export default meta;
type Story = StoryObj<typeof UserDropdown>;

const withPageWrapper = (StoryFn: () => React.ReactNode) => (
  <PageWrapper background="darkBlue" padding="32px">
    {StoryFn()}
  </PageWrapper>
);

export const Default: Story = {
  args: {
    email: 'ivankordonets@gmail.com',
    menuItems: [
      { label: 'Profile' },
      { label: 'Settings' },
      { label: 'Sign out', icon: SignOutIcon }
    ],
    onSelect: (item) => console.log('Clicked:', item)
  },
  decorators: [withPageWrapper],
};
