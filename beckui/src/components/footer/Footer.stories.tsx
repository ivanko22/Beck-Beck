import type { Meta, StoryObj } from '@storybook/react';
import { Footer} from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: { layout: 'centered' },
  args: {
    editLabel: 'Edit',
    removeLabel: 'Remove',
  },
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    onEdit: () => console.log('Edit clicked'),
    onRemove: () => console.log('Remove clicked'),
  },
};
