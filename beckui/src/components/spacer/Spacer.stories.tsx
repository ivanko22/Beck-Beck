import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'Components/Spacer',
  component: Spacer,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Predefined spacer size',
    },
    customSize: {
      control: 'number',
      description: 'Custom size in pixels',
    },
    horizontal: {
      control: 'boolean',
      description: 'Horizontal spacer instead of vertical',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <div>
      <div style={{ backgroundColor: '#f0f0f0', padding: '8px' }}>Content above</div>
      <Spacer {...args} />
      <div style={{ backgroundColor: '#f0f0f0', padding: '8px' }}>Content below</div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div>
      <h3>Vertical Spacers</h3>
      <div style={{ backgroundColor: '#e0e0e0', padding: '4px', marginBottom: '8px' }}>xs (4px)</div>
      <Spacer size="xs" />
      <div style={{ backgroundColor: '#e0e0e0', padding: '4px', marginBottom: '8px' }}>sm (8px)</div>
      <Spacer size="sm" />
      <div style={{ backgroundColor: '#e0e0e0', padding: '4px', marginBottom: '8px' }}>md (16px)</div>
      <Spacer size="md" />
      <div style={{ backgroundColor: '#e0e0e0', padding: '4px', marginBottom: '8px' }}>lg (24px)</div>
      <Spacer size="lg" />
      <div style={{ backgroundColor: '#e0e0e0', padding: '4px', marginBottom: '8px' }}>xl (32px)</div>
      <Spacer size="xl" />
      <div style={{ backgroundColor: '#e0e0e0', padding: '4px', marginBottom: '8px' }}>xxl (48px)</div>
      <Spacer size="xxl" />
      <div style={{ backgroundColor: '#e0e0e0', padding: '4px' }}>End</div>
    </div>
  ),
};

export const Horizontal: Story = {
  args: {
    size: 'lg',
    horizontal: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#f0f0f0', padding: '8px' }}>Left</div>
      <Spacer {...args} />
      <div style={{ backgroundColor: '#f0f0f0', padding: '8px' }}>Right</div>
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    customSize: 60,
  },
  render: (args) => (
    <div>
      <div style={{ backgroundColor: '#f0f0f0', padding: '8px' }}>Content above</div>
      <Spacer {...args} />
      <div style={{ backgroundColor: '#f0f0f0', padding: '8px' }}>Content below (60px gap)</div>
    </div>
  ),
};

export const InlineExample: Story = {
  render: () => (
    <div>
      <h3>Real-world usage example</h3>
      <div style={{ backgroundColor: '#f0f0f0', padding: '16px', borderRadius: '4px' }}>
        <h4>Section Title</h4>
        <Spacer size="sm" />
        <p>This is some content that needs spacing.</p>
        <Spacer size="md" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button style={{ padding: '8px 16px' }}>Action 1</button>
          <Spacer size="sm" horizontal />
          <button style={{ padding: '8px 16px' }}>Action 2</button>
        </div>
      </div>
    </div>
  ),
};
