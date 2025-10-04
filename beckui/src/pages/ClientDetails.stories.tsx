import type { Meta, StoryObj } from '@storybook/react';
import { ClientDetailsPage } from './ClientDetails';

const meta: Meta<typeof ClientDetailsPage> = {
  title: 'Pages/Client/Client Details',
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
    pageActionsState: {
      control: 'select',
      options: ['save', 'saved', 'edit'],
      description: 'State of the form',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ClientDetailsPage>;

// Mock data for insurance sections
const insuranceSectionData = {
  sectionTitle: "Client Insurance Company #1",
  formData: {
    insuranceCompany: 'State Farm',
    insuranceAddress: '123 Main St, Springfield, MO 65801',
    clientName: 'John Doe',
    policyHolderName: 'John Doe',
    claimNumber: 'SF-2025-001',
    policyNumber: 'POL-001',
    mainInsPhone: '(417) 555-0123',
    hasOwnPolicy: true,
    demandLetterSent: false,
    biAdjusterName: 'Jane Smith',
    biAdjusterPhone: '(417) 555-0124',
    biAdjusterFax: '(417) 555-0125',
    biAdjusterEmail: 'jane.smith@statefarm.com',
    medPayAdjusterName: 'Bob Johnson',
    medPayAdjusterPhone: '(417) 555-0126',
    medPayAdjusterEmail: 'bob.johnson@statefarm.com',
    medPayAdjusterFax: '(417) 555-0127',
    liabilityLimitsPerPerson: '100000',
    uimLimitsPerPerson: '50000',
    umLimitsPerPerson: '50000',
    vehiclesOnPolicy: '2',
    totalUmStackedLimits: '100000',
    umbrellaSecondaryLiabilityPolicy: 'No',
    notes: 'Primary insurance company - good coverage',
    emailOptions: {
      liability: true,
      medpay: true,
      uim: false,
      um: false,
      excess: false
    },
    medPayLimit: '5k',
    medPayLimitOther: '',
    excessLiabilityCoverage: 'No'
  }
};

export const Empty: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'John Doe',
    pageActionsState: 'save',

    insuranceSections: [insuranceSectionData],
    
  },
};

// export const WithClientInsurance: Story = {
//   args: {
//     caseNumber: 'Case #2025-0003',
//     clientName: 'John Doe',
//     pageActionsState: 'edit',
//     insuranceSections: [insuranceSectionData],
//     relativeInsuranceSections: [],
//   },
// };

// export const WithRelativeInsurance: Story = {
//   args: {
//     caseNumber: 'Case #2025-0003',
//     clientName: 'John Doe',
//     pageActionsState: 'edit',
//     insuranceSections: [],
//     relativeInsuranceSections: [relativeInsuranceSectionData],
//   },
// };

// export const CompleteForm: Story = {
//   args: {
//     caseNumber: 'Case #2025-0003',
//     clientName: 'John Doe',
//     pageActionsState: 'edit',
//     insuranceSections: [insuranceSectionData],
//     relativeInsuranceSections: [relativeInsuranceSectionData],
//   },
// };

// export const SavedState: Story = {
//   args: {
//     caseNumber: 'Case #2025-0003',
//     clientName: 'John Doe',
//     pageActionsState: 'saved',
//     insuranceSections: [insuranceSectionData],
//     relativeInsuranceSections: [relativeInsuranceSectionData],
//   },
// };

// export const MultipleInsuranceCompanies: Story = {
//   args: {
//     caseNumber: 'Case #2025-0003',
//     clientName: 'John Doe',
//     pageActionsState: 'edit',
//     insuranceSections: [
//       insuranceSectionData,
//       {
//         ...insuranceSectionData,
//         sectionTitle: "Client Insurance Company #2",
//         formData: {
//           ...insuranceSectionData.formData,
//           insuranceCompany: 'Progressive',
//           insuranceAddress: '789 Pine St, St. Louis, MO 63101',
//           claimNumber: 'PROG-2025-002',
//           policyNumber: 'POL-002',
//           mainInsPhone: '(314) 555-0323',
//           biAdjusterName: 'Lisa Brown',
//           biAdjusterPhone: '(314) 555-0324',
//           biAdjusterEmail: 'lisa.brown@progressive.com',
//           liabilityLimitsPerPerson: '250000',
//           uimLimitsPerPerson: '100000',
//           umLimitsPerPerson: '100000',
//           notes: 'Secondary insurance company - umbrella coverage available'
//         }
//       }
//     ],
//     relativeInsuranceSections: [relativeInsuranceSectionData],
//   },
// };
