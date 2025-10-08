import type { Meta, StoryObj } from '@storybook/react';
import { LienSheetPage } from './LienSheet';

const meta: Meta<typeof LienSheetPage> = {
  title: 'Pages/Lien Sheet',
  component: LienSheetPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    caseNumber: {
      control: 'text',
      description: 'Case number to display in header',
    },
    clientName: {
      control: 'text',
      description: 'Client name to display in header',
    },
    pageActionsState: {
      control: 'select',
      options: ['save', 'saved', 'edit'],
      description: 'State of the form',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LienSheetPage>;

const emptyFormData = {
  phone: '(618) 229-2613',
  dob: '01/22/1993',
  last4SSN: '8976',
  crashDate: '',
  isCompleted: false,
  insuranceType: {
    medicaid: false,
    medicare: false,
    tricare: false,
    privateHealthInsurance: false,
  },
  state: 'rowEdit',
};

const filledFormData = {
  phone: '(618) 229-2613',
  dob: '01/22/1993',
  last4SSN: '8976',
  crashDate: '07/31/25',
  isCompleted: true,
  insuranceType: {
    medicaid: false,
    medicare: false,
    tricare: false,
    privateHealthInsurance: false,
  },
};

export const Empty: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'Cooper, Jane',
  
    pageActionsState: 'save',
    pageActionsType: 'iconButton',
    formData: emptyFormData,
  },
};

const tableRowsData = [
  {
    medicalProvider: 'Advanced Ortho Center',
    lienAmount: '$4,200',
    finalBalance: '$3,500',
    insurancePaid: '$700',
    notes: 'Requested reduction via fax',
    accountNumber: 'AET-902187',
    lienholderPhone: '(877) 555-1245',
    lienholderEmail: 'claims@advancedortho.com',
    howToSend: 'email' as const,
    productionRequestPercent: '25%',
    dateSent: '08/01/25',
    reducedToAmount: '$3,150',
    insuranceType: 'Medicare',
    isGenerated: false,
    state: 'saved'
  },
  {
    medicalProvider: 'StriveWell Insurance',
    lienAmount: '$5,200',
    finalBalance: '$4,800',
    insurancePaid: '$1,000',
    notes: 'Requested reduction via email',
    accountNumber: 'SWI-448921',
    lienholderPhone: '(800) 332-0098',
    lienholderEmail: 'billing@strivewellins.com',
    howToSend: 'email' as const,
    productionRequestPercent: '30%',
    dateSent: '',
    reducedToAmount: '',
    insuranceType: 'Private Health Insurance',
    isGenerated: false,
    state: 'saved'
  },
  {
    medicalProvider: 'Premier Imaging Group',
    lienAmount: '$2,900',
    finalBalance: '$2,700',
    insurancePaid: '$500',
    notes: 'Reduction approved verbally',
    accountNumber: 'PIMG-335728',
    lienholderPhone: '(866) 410-2223',
    lienholderEmail: 'pimg@claims-mail.com',
    howToSend: 'email' as const,
    productionRequestPercent: '20%',
    dateSent: '08/01/25',
    reducedToAmount: '$2,400',
    insuranceType: 'Medicare',
    isGenerated: false,
    state: 'saved'
  },
  {
    medicalProvider: 'City Rehab Clinic',
    lienAmount: '$3,100',
    finalBalance: '$2,800',
    insurancePaid: '$750',
    notes: 'Awaiting lien confirmation',
    accountNumber: 'CRC-193844',
    lienholderPhone: '(888) 767-5567',
    lienholderEmail: 'rehab@cityhealth.org',
    howToSend: 'email' as const,
    productionRequestPercent: '15%',
    dateSent: '',
    reducedToAmount: '',
    insuranceType: 'Tricare',
    isGenerated: false,
    state: 'saved'
  },
  {
    medicalProvider: 'NextStep Diagnostics',
    lienAmount: '$4,600',
    finalBalance: '$4,100',
    insurancePaid: '$950',
    notes: 'No response from provider',
    accountNumber: 'NSD-882271',
    lienholderPhone: '(855) 909-8220',
    lienholderEmail: 'nsd@nextstepdx.com',
    howToSend: 'email' as const,
    productionRequestPercent: '18%',
    dateSent: '08/01/25',
    reducedToAmount: '$3,400',
    insuranceType: '',
    isGenerated: true,
    state: 'saved'
  },
];

export const Filled: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'Cooper, Jane',
    pageActionsState: 'saved',
    formData: filledFormData,
    tableRows: tableRowsData,
  },
};

export const Edit: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'Cooper, Jane',
    pageActionsState: 'edit',
    formData: filledFormData,
  },
};