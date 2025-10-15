import type { Meta, StoryObj } from '@storybook/react';
import { CardUploadBills } from './CardUploadBills';
import { Wrapper } from '../wrapper/PageWrapper';
import { Typography } from '../typography/Typography';

const meta: Meta<typeof CardUploadBills> = {
  title: 'Components/Card/CardUploadBills',
  component: CardUploadBills,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardUploadBills>;

export const Empty: Story = {
  args: {
    items: [],
    title: 'Bills',
  },
  render: (args) => (
    <Wrapper type="column" style={{ minWidth: 500, flex: 1, gap: 0 }}>
      <CardUploadBills {...args} />
    </Wrapper>
  ),
};

export const WithBills: Story = {
  args: {
    items: [
      { name: 'Medical Bill - Dr. Smith', uploaded: '10/05/2025' },
      { name: 'Hospital Invoice #12345', uploaded: '10/08/2025' },
      { name: 'Physical Therapy - Session 1-5', uploaded: '10/10/2025' },
    ],
    title: 'Records',
  },
  render: (args) => (
    <Wrapper type="column" style={{ minWidth: 500, flex: 1, gap: 0 }}>
      <CardUploadBills {...args} />
    </Wrapper>
  ),
};

export const LongList: Story = {
  args: {
    items: [
      { name: 'Medical Bill - Dr. Smith', uploaded: '10/05/2025' },
      { name: 'Hospital Invoice #12345', uploaded: '10/08/2025' },
      { name: 'Physical Therapy - Session 1-5', uploaded: '10/10/2025' },
      { name: 'Prescription Medications', uploaded: '10/11/2025' },
      { name: 'Emergency Room Visit', uploaded: '10/12/2025' },
      { name: 'Lab Work Results', uploaded: '10/13/2025' },
      { name: 'Specialist Consultation', uploaded: '10/14/2025' },
    ],
    title: 'Records',
  },
  render: (args) => (
    <Wrapper type="column" style={{ minWidth: 500, flex: 1, gap: 0 }}>
      <CardUploadBills {...args} />
    </Wrapper>
  ),
};

