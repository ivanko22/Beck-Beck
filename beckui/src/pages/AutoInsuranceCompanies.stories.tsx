import type { Meta, StoryObj } from '@storybook/react';
import { AutoInsuranceCompanies, InsuranceCompany } from './AutoInsuranceCompanies';

const meta: Meta<typeof AutoInsuranceCompanies> = {
  title: 'Pages/Auto Insurance Companies',
  component: AutoInsuranceCompanies,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AutoInsuranceCompanies>;

const baseCompanies: InsuranceCompany[] = [
  {
    id: 1,
    companyName: 'State Farm Insurance',
    mailAddress: '123 Main St, Columbus, OH 43215',
    fax: '614 555 1234',
    email: 'statefarm@example.com',
    state: 'saved',
  },
  {
    id: 2,
    companyName: 'Allstate Insurance Co.',
    mailAddress: '456 Oak Ave, Cincinnati, OH 45202',
    fax: '513 555 9876',
    email: 'allstate@example.com',
    state: 'saved',
  },
  {
    id: 3,
    companyName: 'Progressive Insurance',
    mailAddress: '789 Pine St, Cleveland, OH 44101',
    fax: '216 555 4567',
    email: 'progressive@example.com',
    state: 'saved',
  },
];

const geicoCompany: InsuranceCompany = {
  id: 3,
  companyName: 'Geico Insurance',
  mailAddress: '123 Main St, Columbus, OH 43215',
  fax: '614 555 1234',
  email: 'geico@example.com',
  state: 'saved',
};

const emptyCompany: InsuranceCompany = {
  id: 1,
  companyName: '',
  mailAddress: '',
  fax: '',
  email: '',
  state: 'edit',
};

const NoCompaniesAdding: InsuranceCompany[] = [
  { ...emptyCompany }
];

const defaultCompanies: InsuranceCompany[] = [
  ...baseCompanies
];

const defaultCompaniesAdding: InsuranceCompany[] = [
  { ...baseCompanies[0] },
  { ...baseCompanies[1] },
  { ...geicoCompany, id: 3 },
  { ...emptyCompany, id: 4 }
];

const defaultCompaniesEdit: InsuranceCompany[] = [
  ...baseCompanies,
  { ...geicoCompany, id: 4, state: 'edit' }
];

export const NoCompanies: Story = {
  args: {
    companies: NoCompaniesAdding,
    state: 'adding',
  },
};

export const Saved: Story = {
  args: {
    companies: defaultCompanies,
    state: 'saved',
  },
};

export const Adding: Story = {
  args: {
    companies: defaultCompaniesAdding,
    state: 'adding',
  },
};

export const Edit: Story = {
  args: {
    companies: defaultCompaniesEdit,
    state: 'adding',
  },
};