import type { Meta, StoryObj } from '@storybook/react';
import { Border } from './Border';

const meta: Meta<typeof Border> = {
  title: 'Components/Border',
  component: Border,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the border',
    },
    color: {
      control: 'color',
      description: 'Color of the border',
    },
    weight: {
      control: 'text',
      description: 'Weight/thickness of the border',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: '1000px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomWidth: Story = {
  args: {
    width: '1000px',
  },
};

export const CustomColor: Story = {
  args: {
    color: '#4F46E5',
  },
};

export const CustomWeight: Story = {
  args: {
    weight: '3px',
  },
};

export const AllCustom: Story = {
  args: {
    width: '900px',
    color: '#10B981',
    weight: '1px',
  },
};
