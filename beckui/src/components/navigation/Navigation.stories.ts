import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#1e293b' },
      ],
    },
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
  },
};

// export const CustomUserEmail: Story = {
//   args: {
//     userEmail: 'john.doe@beckbecklaw.com',
//   },
// };

// export const WithInteractions: Story = {
//   args: {
//     userEmail: 'attorney@beckbecklaw.com',
//     onItemClick: (itemId: string) => {
//       console.log('Navigation item clicked:', itemId);
//     },
//     onSearch: (query: string) => {
//       console.log('Search query:', query);
//     },
//   },
// };

// export const LongEmail: Story = {
//   args: {
//     userEmail: 'very.long.email.address@beckbecklaw.com',
//   },
// };

// export const ShortEmail: Story = {
//   args: {
//     userEmail: 'a@b.co',
//   },
// };
