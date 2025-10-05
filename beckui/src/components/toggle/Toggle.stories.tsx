import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the toggle',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when toggle state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Wage Loss',
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Wage Loss',
    defaultChecked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Wage Loss',
    defaultChecked: true,
    disabled: true,
  },
};


export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle label="Unchecked" defaultChecked={false} />
      <Toggle label="Checked" defaultChecked={true} />
      <Toggle label="Disabled Unchecked" defaultChecked={false} disabled />
      <Toggle label="Disabled Checked" defaultChecked={true} disabled />
    </div>
  ),
};
