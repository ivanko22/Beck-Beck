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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialFilters: filtersData,
  },
};

