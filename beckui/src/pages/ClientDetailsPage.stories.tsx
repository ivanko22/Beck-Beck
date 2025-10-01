import type { Meta, StoryObj } from '@storybook/react';
import { ClientDetailsPage } from './ClientDetailsPage';

const meta: Meta<typeof ClientDetailsPage> = {
  title: 'Pages/ClientDetailsPage',
  component: ClientDetailsPage,
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
    state: {
      control: 'select',
      options: ['adding', 'edit', 'save', 'saved'],
      description: 'State of the form',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ClientDetailsPage>;

export const Empty: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: '',
    state: 'edit',
    formData: {
      insuranceCompany: '',
      insuranceAddress: '',
      clientName: '',
      policyHolderName: '',
      claimNumber: '',
      policyNumber: '',
      mainInsPhone: '',
      hasOwnPolicy: true,
      demandLetterSent: false,
      biAdjusterName: '',
      biAdjusterPhone: '',
      biAdjusterFax: '',
      biAdjusterEmail: '',
      medPayAdjusterName: '',
      medPayAdjusterPhone: '',
      medPayAdjusterEmail: '',
      medPayAdjusterFax: '',
      emailOptions: {
        liability: false,
        medpay: false,
        uim: false,
        um: false,
        excess: false,
      },
      medPayLimit: 'none',
      medPayLimitOther: '',
    },
  },
};

export const Adding: Story = {
  args: {
    caseNumber: 'Case #2025-0004',
    clientName: 'Jane Doe',
    state: 'edit',
    formData: {
      insuranceCompany: 'Progressive',
      insuranceAddress: '456 Oak Ave, Chicago, IL 60601',
      clientName: 'Jane Doe',
      policyHolderName: 'Jane Doe',
      claimNumber: 'PROG-2025-567890',
      policyNumber: 'RS-5589-7745',
      mainInsPhone: '(312) 555-0987',
      hasOwnPolicy: false,
      demandLetterSent: false,
      biAdjusterName: 'Lisa Brown',
      biAdjusterPhone: '(312) 555-0543',
      biAdjusterFax: '(312) 555-7722',
      biAdjusterEmail: 'lisa.brown@progressive.com',
      medPayAdjusterName: 'Michael Smith',
      medPayAdjusterPhone: '(312) 555-7721',
      medPayAdjusterEmail: 'sarah.johnson@medpay.com',
      medPayAdjusterFax: '(312) 555-7721',
      emailOptions: {
        liability: true,
        medpay: true,
        uim: false,
        um: false,
        excess: false,
      },
      medPayLimit: '10k',
      medPayLimitOther: '',
    },
  },
};
