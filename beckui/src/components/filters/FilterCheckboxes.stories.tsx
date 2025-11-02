import type { Meta, StoryObj } from '@storybook/react';
import { FilterCheckboxes } from './FilterCheckboxes';
import { Wrapper } from '../wrapper/PageWrapper';

const meta: Meta<typeof FilterCheckboxes> = {
  title: 'Components/Filters/FilterCheckboxes',
  component: FilterCheckboxes,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Wrapper background="white">
        <Story />
      </Wrapper>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FilterCheckboxes>;

const statusOptions = [
  { label: 'No Offer 30+' },
  { label: 'Offer Accepted' },
  { label: 'Respond' },
  { label: 'Waiting on Signed Release' },
  { label: 'Waiting on Blank Release' },
  { label: 'Check Pending' },
];

export const Default: Story = {
  args: {
    title: 'Filter by Status',
    options: statusOptions,
    onClose: () => console.log('Close clicked'),
    onOptionChange: (label, checked) => console.log(`${label}: ${checked}`),
  },
};

export const WithPreselectedOptions: Story = {
  args: {
    title: 'Filter by Status',
    options: [
      { label: 'No Offer 30+', checked: false },
      { label: 'Offer Accepted', checked: true },
      { label: 'Respond', checked: false },
      { label: 'Waiting on Signed Release', checked: false },
      { label: 'Waiting on Blank Release', checked: true },
      { label: 'Check Pending', checked: false },
    ],
    onClose: () => console.log('Close clicked'),
    onOptionChange: (label, checked) => console.log(`${label}: ${checked}`),
  },
};
