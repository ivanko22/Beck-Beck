import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],

  args: {
    disabled: false,
  },

  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text displayed next to the checkbox',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the checkbox if true',
    },
    color: {
      control: 'color',
      description: 'Color of the checkbox accent',
    },
    onChange: {
      action: 'toggled',
      description: 'Callback when checkbox state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
    args: {
    label: 'Disabled option',
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
    checked: true,
  },
};

export const Blue: Story = {
  args: {
    label: 'Intake & Planning',
    color: 'var(--blue)',
    checked: true,
  },
};

export const Yellow: Story = {
  args: {
    label: 'Treatment Phase',
    color: 'var(--yellow)',
    checked: true,
  },
};

export const Purple: Story = {
  args: {
    label: 'Demand Preparation',
    color: 'var(--purple)',
    checked: true,
  },
};

export const Orange: Story = {
  args: {
    label: 'Negotiation',
    color: 'var(--orange)',
    checked: true,
  },
};

export const Green: Story = {
  args: {
    label: 'Settlement',
    color: 'var(--success)',
    checked: true,
  },
};

export const AllPhases: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <Checkbox label="Intake & Planning" colorLabel="var(--dark-grey)" color="var(--secondary-color)" checked />
        <Checkbox label="Treatment Phase" colorLabel="var(--dark-grey)" color="var(--yellow)" checked />
        <Checkbox label="Post-Treatment" colorLabel="var(--dark-grey)" color="var(--blue)" checked />
        <Checkbox label="Demand Preparation" colorLabel="var(--dark-grey)" color="var(--purple)" checked />
        <Checkbox label="Negotiation" colorLabel="var(--dark-grey)" color="var(--orange)" checked />
        <Checkbox label="Settlement" colorLabel="var(--dark-grey)" color="var(--success)" checked />
      </div>
    );
  },
};
