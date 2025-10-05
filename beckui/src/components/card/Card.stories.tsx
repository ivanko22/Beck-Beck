import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { Typography } from '../typography/Typography';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
    style: {
      control: 'object',
      description: 'Inline style overrides merged with the default card styles.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Typography variant="leftLabel" style={{ marginBottom: '12px' }}>
        Card Title
      </Typography>
      <span style={{ color: 'var(--middle-grey)', lineHeight: 1.4 }}>
        Use the Card component to group related form controls, actions, or
        informational content with consistent spacing and borders.
      </span>
    </Card>
  ),
};

export const WithCustomSpacing: Story = {
  args: {
    style: {
      gap: 16,
      padding: '32px 24px',
    },
  },
  render: (args) => (
    <Card {...args}>
      <Typography variant="leftLabel" style={{ marginBottom: '8px' }}>
        Custom Layout
      </Typography>
      <span style={{ color: 'var(--middle-grey)', lineHeight: 1.4 }}>
        Override the default spacing to adapt the card for different content
        densities while keeping the base look and feel.
      </span>
    </Card>
  ),
};
