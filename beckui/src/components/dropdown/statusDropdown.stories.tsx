import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BaseDropdown } from './Dropdown';
import { Wrapper } from '../wrapper/PageWrapper';

type MenuItem = { label: string; icon?: React.ComponentType<any>; state?: 'default' | 'hover' | 'selected' };

const meta: Meta<typeof BaseDropdown> = {
  title: 'Components/Dropdown/StatusDropdown',
  component: BaseDropdown,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Wrapper background="white">
        <Story />
      </Wrapper>
    ),
  ],

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
  <Wrapper background="white">
    {StoryFn()}
  </Wrapper>
);

const statusMenu: MenuItem[] = [
  // Green/Teal statuses
  { label: 'Offer Accepted' },
  { label: 'Final Offer Received, waiting on lien sheet' },
  { label: 'Final Offer Received, lien sheet complete' },
  { label: 'Awaiting Settlement Hearing' },
  { label: 'Finished Case (Archive It)' },
  
  // Blue statuses
  { label: 'BP Received' },
  { label: 'BP Sent Via Mail' },
  { label: 'Blank Release' },

  // Dark Blue statuses
  { label: 'Ordered/Waiting on Old Medical' },

  // Red statuses
  { label: 'No Offer 30+' },
  
  // Orange statuses
  { label: 'Awaiting Mediation' },
  { label: 'Referred Case' },
  { label: 'Respond' },

  // Yellow statuses
  { label: 'Treating & No medical ordered yet' },
  { label: 'Finished Treating/ RTS & Awaiting' },
  { label: 'Finished Treating/ RTS & All Medical' },
  { label: 'RTS/All Medical Received' },
  
  // Purple statuses
  { label: 'Sent to Demand Writer' },
  { label: 'Liability Demand Sent' },
  { label: 'UM Demand Sent' },
  { label: 'UIM Demand Sent' },
  { label: '30 Day Extension Given to Adjuster' },
  { label: 'Signed Release' },

  // Black statuses
  { label: 'Check Pending' },
];

export const Default: Story = {
  render: () => {
    const [statusDropdownValue, setStatusDropdownValue] = React.useState('Offer Accepted');
    const [statusDropdownState, setStatusDropdownState] = React.useState<'default' | 'hover' | 'selected'>('default');
    
    return (
      <BaseDropdown
        type="statusDropdown"
        menuItems={statusMenu}
        value={statusDropdownValue}
        state={statusDropdownState}
        label="Status"
        onSelect={(item) => {
          setStatusDropdownValue(item);
          setStatusDropdownState('selected');
        }}
      />
    );
  },
  decorators: [withPageWrapper],
};
