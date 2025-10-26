import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The text label for the badge',
    },
    color: {
      control: 'color',
      description: 'Text color of the badge circle',
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Badge',
    badgeLabel: '1',
    color: 'var(--secondary-color)',
  },
};

export const Blue: Story = {
  args: {
    label: 'Intake & Planning',
    badgeLabel: '2',
    color: 'var(--blue)',
  },
};

export const Yellow: Story = {
  args: {
    label: 'Treatment Phase',
    badgeLabel: '3',
    color: 'var(--yellow)',
  },
};

export const Purple: Story = {
  args: {
    label: 'Demand Preparation',
    badgeLabel: '4',
    color: 'var(--purple)',
  },
};

export const Orange: Story = {
  args: {
    label: 'Negotiation',
    badgeLabel: '5',
    color: 'var(--orange)',
  },
};

export const Green: Story = {
  args: {
    label: 'Settlement',
    badgeLabel: '6',
    color: 'var(--success)',
  },
};

export const AllPhases: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Badge label="Intake & Planning" color="var(--blue)" badgeLabel='1' />
      <Badge label="Treatment Phase" color="var(--yellow)" badgeLabel='2' />
      <Badge label="Post-Treatment" color="var(--secondary-color)" badgeLabel='3' />
      <Badge label="Demand Preparation" color="var(--purple)" badgeLabel='4' />
      <Badge label="Negotiation" color="var(--orange)" badgeLabel='5' />
      <Badge label="Settlement" color="var(--success)" badgeLabel='6' />
    </div>
  ),
};
