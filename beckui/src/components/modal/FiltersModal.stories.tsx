import type { Meta, StoryObj } from '@storybook/react';
import { FiltersModal } from './FiltersModal';
import { filtersData } from '../../data/filtersData';

const meta: Meta<typeof FiltersModal> = {
  title: 'Components/Modal/FiltersModal',
  component: FiltersModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onApplyFilters: {
      action: 'filters applied',
      description: 'Callback function called when filters are applied',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    initialFilters: filtersData,
  },
};

