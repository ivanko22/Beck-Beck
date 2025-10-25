import type { Meta, StoryObj } from '@storybook/react';
import { InsuranceRow } from './InsuranceRow';

const meta: Meta<typeof InsuranceRow> = {
  title: 'Components/Row/Auto Insurance',
  component: InsuranceRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['adding', 'edit', 'saved'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InsuranceRow>;

export const AutoInsuranceCompaniesRowSaved: Story = {
  render: () => (
    <InsuranceRow
      companyName="Triangle Insurance Agency, Inc."
      mailAddress="5525 N Dixie Dr, Dayton, OH 45414"
      fax="201 345 6789"
      email="triangleinsurance@gmail.com"
      state="saved"
    />
  ),
};

export const AutoInsuranceCompaniesRowAdding: Story = {
  render: () => (
    <InsuranceRow
      companyName=""
      mailAddress=""
      fax=""
      email=""
      state="adding"
    />
  ),
};

export const AutoInsuranceCompaniesRowEdit: Story = {
  render: () => (
    <InsuranceRow
      companyName="Triangle Insurance Agency, Inc."
      mailAddress="5525 N Dixie Dr, Dayton, OH 45414"
      fax="201 345 6789"
      email="triangleinsurance@gmail.com"
      state="edit"
    />
  ),
};

export const AutoInsuranceCompaniesRowSave: Story = {
  render: () => (
    <InsuranceRow
      companyName="Triangle Insurance Agency, Inc."
      mailAddress="5525 N Dixie Dr, Dayton, OH 45414"
      fax="201 345 6789"
      email="triangleinsurance@gmail.com"
      state="save"
    />
  ),
};