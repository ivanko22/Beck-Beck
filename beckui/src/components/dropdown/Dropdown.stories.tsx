import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BaseDropdown } from './Dropdown';
import { PageWrapper } from '../wrapper/PageWrapper';
import type { MenuItem } from './Dropdown'; 

const meta: Meta<typeof BaseDropdown> = {
  title: 'Components/Dropdown/BaseDropdown',
  component: BaseDropdown,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PageWrapper background="white">
        <Story />
      </PageWrapper>
    ),
  ],

  args: {
    value: 'ivankordonets@gmail.com',
  },

  argTypes: {
    state: { control: 'radio', options: ['default', 'hover', 'active'] },
    value: {
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
  <PageWrapper background="white">
    {StoryFn()}
  </PageWrapper>
);

const baseMenu: MenuItem[] = [
  { label: 'Dropdown Item 1' },
  { label: 'Dropdown Item 2' },
  { label: 'Dropdown Item 3' },
];

const baseMenuHovered: MenuItem[] = [
  { label: 'Dropdown Item 1' },
  { label: 'Dropdown Item 2', state: 'hover' },
  { label: 'Dropdown Item 3' },
];

export const Default: Story = {
  render: () => {
    const [baseDropdownValue, setBaseDropdownValue] = React.useState('Select');
    const [baseDropdownState, setBaseDropdownState] = React.useState<'default' | 'hover' | 'selected'>('default');
    
    return (
      <BaseDropdown
        type="BaseDropdown"
        menuItems={baseMenu}
        value={baseDropdownValue}
        state={baseDropdownState}
        label="Insurance Company"
        onSelect={(item) => {
          setBaseDropdownValue(item);
          setBaseDropdownState('selected');
        }}
      />
    );
  },
  decorators: [withPageWrapper],
};

export const Open: Story = {
  args: {
    type: 'BaseDropdown',
    value: 'Base Dropdown',
    isOpen: true,
    menuItems: baseMenu,
  },
  decorators: [withPageWrapper],
};

export const Hover: Story = {
  args: {
    type: 'BaseDropdown',
    value: 'Base Dropdown',
    isOpen: true,
    menuItems: baseMenuHovered,
  },
  decorators: [withPageWrapper],
};

export const Selected: Story = {
  args: {
    type: 'BaseDropdown',
    value: 'Base Dropdown',
    isOpen: false,
    state: 'selected',
    label: 'Insurance Company',
    menuItems: baseMenuHovered,
  },
  decorators: [withPageWrapper],
};

export const WithLabel: Story = {
  args: {
    type: 'BaseDropdown',
    label: 'User',
    value: 'John Doe',
    isOpen: false,
    state: 'selected',
    menuItems: baseMenuHovered,
  },
  decorators: [withPageWrapper],
};

export const Disabled: Story = {
  args: {
    type: 'BaseDropdown',
    label: 'User',
    value: 'John Doe',
    isOpen: false,
    state: 'selected',
    disabled: true,
    menuItems: baseMenuHovered,
  },
  decorators: [withPageWrapper],
};

export const NoBorder: Story = {
  args: {
    type: 'BaseDropdown',
    label: 'User',
    value: 'John Doe',
    isOpen: false,
    state: 'selected',
    noBorder: true,
    menuItems: baseMenuHovered,
  },
  decorators: [withPageWrapper],
};

