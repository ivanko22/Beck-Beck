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

// export const Default: Story = {
//   args: {
//     caseNumber: 'Case #2025-0001',
//     clientName: '',
//     state: 'saved',
//   },
// };

// export const FilledState: Story = {
//   args: {
//     caseNumber: 'Case #2025-0002',
//     clientName: 'John Smith',
//     state: 'saved',
//     formData: {
//       insuranceCompany: 'State Farm',
//       insuranceAddress: '123 Main St, Kansas City, MO 64101',
//       clientName: 'John Smith',
//       policyHolderName: 'John Smith',
//       claimNumber: 'SF-2025-001234',
//       policyNumber: 'POL-789456123',
//       mainInsPhone: '(816) 555-0123',
//       hasOwnPolicy: true,
//       demandLetterSent: true,
//       biAdjusterName: 'Mike Johnson',
//       biAdjusterPhone: '(816) 555-0456',
//       biAdjusterFax: '(816) 555-0457',
//       biAdjusterEmail: 'mike.johnson@statefarm.com',
//       medPayAdjusterName: 'Sarah Wilson',
//       medPayAdjusterPhone: '(816) 555-0789',
//       medPayAdjusterEmail: 'sarah.wilson@statefarm.com',
//       medPayAdjusterFax: '(816) 555-0790',
//       emailOptions: {
//         liability: true,
//         medpay: false,
//         uim: false,
//         um: false,
//         excess: false,
//       },
//     },
//   },
// };

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

export const PartialData: Story = {
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
      policyNumber: '',
      mainInsPhone: '(312) 555-0987',
      hasOwnPolicy: false,
      demandLetterSent: false,
      biAdjusterName: 'Lisa Brown',
      biAdjusterPhone: '(312) 555-0543',
      biAdjusterFax: '',
      biAdjusterEmail: 'lisa.brown@progressive.com',
      medPayAdjusterName: '',
      medPayAdjusterPhone: '',
      medPayAdjusterEmail: '',
      medPayAdjusterFax: '',
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

export const WithMedPayOther: Story = {
  args: {
    caseNumber: 'Case #2025-0005',
    clientName: 'Bob Johnson',
    state: 'edit',
    formData: {
      insuranceCompany: 'Geico',
      insuranceAddress: '789 Pine St, Denver, CO 80202',
      clientName: 'Bob Johnson',
      policyHolderName: 'Bob Johnson',
      claimNumber: 'GEICO-2025-111222',
      policyNumber: 'POL-333444555',
      mainInsPhone: '(303) 555-0123',
      hasOwnPolicy: true,
      demandLetterSent: true,
      biAdjusterName: 'Tom Davis',
      biAdjusterPhone: '(303) 555-0456',
      biAdjusterFax: '(303) 555-0457',
      biAdjusterEmail: 'tom.davis@geico.com',
      medPayAdjusterName: 'Amy Lee',
      medPayAdjusterPhone: '(303) 555-0789',
      medPayAdjusterEmail: 'amy.lee@geico.com',
      medPayAdjusterFax: '(303) 555-0790',
      emailOptions: {
        liability: true,
        medpay: true,
        uim: true,
        um: false,
        excess: true,
      },
      medPayLimit: 'other',
      medPayLimitOther: '$15,000',
    },
  },
};

