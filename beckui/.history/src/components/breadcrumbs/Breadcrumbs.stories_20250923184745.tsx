import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],

  // Default args shown in the Controls panel
  args: {
    section: 'User Details',
    current: 'Cooper Jane',
    separator: '/',
    href: '#', // optional: makes section clickable
  },

  argTypes: {
    section: {
      control: 'text',
      description: 'Parent/section label (left part).',
    },
    current: {
      control: 'text',
      description: 'Current page label (right/active part).',
    },
    separator: {
      control: 'text',
      description: 'Character/string shown between items.',
    },
    href: {
      control: 'text',
      description: 'Optional URL for the section link. Omit to render plain text.',
    },
    onSectionClick: {
      action: 'section clicked',
      table: { category: 'events' },
      description: 'Fires when the section is clicked (if clickable).',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

export const NoLink: Story = {
  args: { href: undefined },
};

export const CustomSeparator: Story = {
  args: { separator: '›' },
};