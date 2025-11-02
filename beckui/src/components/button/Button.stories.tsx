import { fn } from 'storybook/test';
import { Button } from './Button';
import { RemoveIcon, CloseIcon, CheckmarkIcon, PlusIcon } from '../icons';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Primary Button',
    size: 'large',
  },
};

export const PrimaryWithIcon = {
  args: {
    primary: true,
    labelAlign: 'center',
    label: 'Primary Button',
    icon: <PlusIcon size={20} color="currentColor" />,
    size: 'large',
  },
};

export const PrimaryDisabled = {
  args: {
    primary: true,
    disabled: true,
    label: 'Disabled Primary Button',
    size: 'large',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    size: 'medium',
  },
};

export const SecondaryDisabled = {
  args: {
    label: 'Secondary Button',
    size: 'medium',
    disabled: true,
  },
};

export const WithIconLeftAndLabel = {
  args: {
    label: 'Remove',
    size: 'medium',
    icon: <RemoveIcon size={22} color="currentColor" />,
    iconPosition: 'left',
  },
};

export const IconOnlyClose = {
  args: {
    label: '',
    size: 'medium',
    icon: <CloseIcon size={20} color="currentColor" />,
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with only an icon (no label) - Close icon for cancel actions.',
      },
    },
  },
};

export const IconOnlyCheckmark = {
  args: {
    state: 'edit',
    primary: true,
    customSize: '62px',
    type: 'iconButton',
    icon: <CheckmarkIcon size={20} color="currentColor" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with only an icon (no label) - Checkmark icon for save/confirm actions.',
      },
    },
  },
};
