import type { Meta, StoryObj } from '@storybook/react';
import { Footer} from './Footer';
import { PrintIcon, EditIcon, RemoveIcon } from '../icons';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: { layout: 'centered' },
  args: {
    rightLabel: 'Edit',
    leftLabel: 'Remove',
  },
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    leftLabel: 'Remove',
    rightLabel: 'Edit',
    leftIcon: <RemoveIcon size={22} />,
    rightIcon: <EditIcon size={20} />,

  },
};

export const WithCustomIcons: Story = {
  args: {
    leftLabel: 'Print Settlement Statement',
    rightLabel: 'Edit',
    leftIcon: <PrintIcon size={22} />,
    rightIcon: <EditIcon size={20} />,

  },
};
