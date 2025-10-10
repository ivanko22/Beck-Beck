import { fn } from 'storybook/test';
import { Button } from './Button';
import { RemoveIcon } from '../icons';

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

export const WithIconLeft = {
  args: {
    label: 'Remove',
    size: 'medium',
    icon: <RemoveIcon size={22} color="currentColor" />,
    iconPosition: 'left',
  },
};
