import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BaseDropdown } from './Dropdown';
import { PageWrapper } from '../wrapper/PageWrapper';
import { SignOutIcon } from '../icons';

const meta: Meta<typeof BaseDropdown> = {
  title: 'Components/Dropdown/UserDropdown',
  component: BaseDropdown,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  decorators: [
    (Story, ctx) => (
      <PageWrapper
        background="darkBlue"
        style={ctx.viewMode === 'docs' ? { width: '1000px' } : undefined}
      >
        <Story />
      </PageWrapper>
    ),
  ],

  args: {
    email: 'ivankordonets@gmail.com',
  },

  argTypes: {
    email: {
      control: 'text',
      description: 'User email displayed in the dropdown',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the dropdown menu is open',
      defaultValue: false,
    },
    menuItems: {
      control: 'object',
      description: 'Array of menu items with optional icons',
    },
    onSelect: {
      action: 'item clicked',
      description: 'Callback when a menu item is selected',
    },
    onLogout: {
      action: 'logout clicked',
      description: 'Callback when logout is selected',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseDropdown>;

const withPageWrapper = (StoryFn: () => React.ReactNode) => (
  <PageWrapper background="darkBlue">
    {StoryFn()}
  </PageWrapper>
);

const baseMenu = [
  { label: 'Profile' },
  { label: 'Settings' },
  { label: 'Sign out', icon: SignOutIcon },
];

export const Default: Story = {
  args: {
    type: 'userDropdown',
    value: 'ivankordonets@gmail.com',
    menuItems: baseMenu,
    onSelect: (item) => console.log('Clicked:', item),
  },
  decorators: [withPageWrapper],
};

export const Open: Story = {
  args: {
    type: 'userDropdown',
    value: 'ivankordonets@gmail.com',
    isOpen: true,
    menuItems: baseMenu,
  },
  decorators: [withPageWrapper],
};

export const Hover: Story = {
  args: {
    type: 'userDropdown',
    value: 'ivankordonets@gmail.com',
    isOpen: true,
    state: 'hover',
    menuItems: baseMenu,
  },
  decorators: [withPageWrapper],
};
