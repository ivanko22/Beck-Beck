import type { Meta, StoryObj } from '@storybook/react';
import { RowMedAuth } from './RowMedAuth';
import { Wrapper } from '../wrapper/PageWrapper';
import { TableHeader } from '../table/TableHeader';

const meta: Meta<typeof RowMedAuth> = {
  title: 'Components/Row/RowMedAuth',
  component: RowMedAuth,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RowMedAuth>;

const sampleRow = {
  id: '1',
  state: 'saved' as const,
  orderRecordsDate: '5/29/25',
  orderBillsDate: '7/29/25',
  providerName: 'Springfield ER',
  address: '1234 Medical Plaza',
  city: 'Springfield',
  stateCode: 'IL',
  zipCode: '62701',
  recordsArrived: true,
  billsArrived: false,
  billedAmount: '$3,800',
  notes: 'Awaiting radiology confirmation',
};

export const Default: Story = {
  args: {
    row: sampleRow,
  },
  render: (args) => (
    <Wrapper type="pageWrapperContentColumn" style={{ width: '100%' }}>
      <TableHeader
        columns={[
          { label: 'Order Records', width: '160px' },
          { label: 'Order Bills', width: '150px' },
          { label: 'Medical Provider Name, Address, City, State, Zip', width: '380px' },
          { label: 'Records Arrived?', width: '130px' },
          { label: 'Bills Arrived?', width: '100px' },
          { label: 'Billed Amount', width: '100px' },
          { label: 'Notes', width: '290px' },
          { label: '', width: '32px' },
        ]}
        useSpaceBetween={true}
      />
      <RowMedAuth {...args} />
    </Wrapper>
  ),
};

export const EditMode: Story = {
  args: {
    row: {
      ...sampleRow,
      state: 'edit' as const,
    },
  },
  render: (args) => (
    <Wrapper type="pageWrapperContentColumn" style={{ width: '100%' }}>
      <TableHeader
        columns={[
          { label: 'Order Records', width: '160px' },
          { label: 'Order Bills', width: '150px' },
          { label: 'Medical Provider Name, Address, City, State, Zip', width: '380px' },
          { label: 'Records Arrived?', width: '130px' },
          { label: 'Bills Arrived?', width: '100px' },
          { label: 'Billed Amount', width: '100px' },
          { label: 'Notes', width: '290px' },
          { label: '', width: '32px' },
        ]}
        useSpaceBetween={true}
      />
      <RowMedAuth {...args} />
    </Wrapper>
  ),
};

export const MultipleRows: Story = {
  render: () => {
    const rows = [
      {
        id: '1',
        state: 'saved' as const,
        orderRecordsDate: '5/29/25',
        orderBillsDate: '7/29/25',
        providerName: 'Springfield ER',
        address: '1234 Medical Plaza',
        city: 'Springfield',
        stateCode: 'IL',
        zipCode: '62701',
        recordsArrived: true,
        billsArrived: false,
        billedAmount: '$3,800',
        notes: 'Awaiting radiology confirmation',
      },
      {
        id: '2',
        state: 'saved' as const,
        orderRecordsDate: '06/10/25',
        orderBillsDate: '07/05/25',
        providerName: 'Radiology Group',
        address: '5678 Imaging Blvd',
        city: 'Springfield',
        stateCode: 'IL',
        zipCode: '62702',
        recordsArrived: true,
        billsArrived: true,
        billedAmount: '$1,250',
        notes: 'All records received',
      },
      {
        id: '3',
        state: 'edit' as const,
        orderRecordsDate: '05/01/25',
        orderBillsDate: '06/01/25',
        providerName: 'OrthoCare Clinic',
        address: '9012 Bone St',
        city: 'Springfield',
        stateCode: 'IL',
        zipCode: '62703',
        recordsArrived: true,
        billsArrived: true,
        billedAmount: '$2,950',
        notes: 'Urgent follow-up needed',
      },
    ];

    return (
      <Wrapper type="pageWrapperContentColumn" style={{ width: '100%' }}>
        <TableHeader
          columns={[
            { label: 'Order Records', width: '160px' },
            { label: 'Order Bills', width: '150px' },
            { label: 'Medical Provider Name, Address, City, State, Zip', width: '380px' },
            { label: 'Records Arrived?', width: '130px' },
            { label: 'Bills Arrived?', width: '100px' },
            { label: 'Billed Amount', width: '100px' },
            { label: 'Notes', width: '290px' },
            { label: '', width: '32px' },
          ]}
          useSpaceBetween={true}
        />
        {rows.map((row) => (
          <RowMedAuth
            key={row.id}
            row={row}
            onChange={(updatedRow) => console.log('Updated:', updatedRow)}
          />
        ))}
      </Wrapper>
    );
  },
};
