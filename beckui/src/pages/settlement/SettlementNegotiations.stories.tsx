import type { Meta, StoryObj } from '@storybook/react';
import { SettlementNegotiations } from './SettlementNegotiations';

const meta: Meta<typeof SettlementNegotiations> = {
  title: 'Pages/Settlement Negotiations',
  component: SettlementNegotiations,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SettlementNegotiations>;

const NegotiationCase = [
  {
    id: '1',
    caseNumber: 'Case #2025-001',
    insuranceCompany: 'State Farm Liability',
    clientInfo: {
      name: 'Cooper, Jane',
      primaryPhone: '(618) 216 2917',
      momsPhone: '(618) 226 3478',
      email: 'jane.cooper@gmail.com',
      note: 'Nick - Discuss the details of what goes here with Paul',
    },
    policyLimitsAvailable: '',
    demandSentDate: 'July 24, 2025',
    adjusterEmail: 'joshmorgan@statefarm.com',
    demandsOffers: [
      {
        id: '1',
        type: 'demand' as const,
        amount: '$12,000',
        date: 'June 10, 2025',
        sent: true,
      },
      {
        id: '2',
        type: 'offer' as const,
        amount: '$9,000',
        date: 'June 11',
      },
      {
        id: '3',
        type: 'demand' as const,
        amount: '$11,800',
        date: 'July 1, 2025',
        sent: true,
      },
      {
        id: '4',
        type: 'offer' as const,
        amount: '$10,000',
        date: 'July 5',
      },
    ],
    insuranceOffer: [
      {
        id: '1',
        amount: '$12,000',
        date: 'June 10, 2025',
        received: true,
      },
      {
        id: '2',
        amount: '$18,000',
        date: 'June 27, 2025',
        received: true,
      },
    ],
    negotiationNotes: [
      'Reviewed latest counter from insurer - client agreed to partial responsibility for Lab Center and OrthoWorks. Requesting updated offer based on revised medical summary. Pending feedback from adjuster on timeline for revised payment.',
      '',
    ],
    settlementAccepted: {
      accepted: true,
      date: 'July 24, 2025',
    },
    settlementReleaseReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    releaseSentToClient: {
      date: 'July 24, 2026',
      sentBySnailMail: true,
      sentElectronically: true,
    },
    releaseSignedReceived: {
      adjusterEmail: 'joe@statefarm.com',
      date: 'July 12, 2025',
      signedDate: '08/11/25',
    },
    checkReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    miscNotes: 'Reviewed all outstanding documentation. Client approved remaining balances for OrthoCare Group and Sunrise Radiology. Pending confirmation from lien holder regarding final charges. Post-deduction totals prepared for release. Awaiting adjuster verification and updated payment timeline.',
  },
  {
    id: '2',
    caseNumber: 'Case #2025-002',
    insuranceCompany: 'Geico UIM Liability',
    clientInfo: {
      name: 'Taylor, Mia',
      primaryPhone: '(213) 555 8392',
      momsPhone: '(213) 555 9276',
      email: 'mia.taylor@outlook.com',
      note: 'Nick - Confirm policy limits with Paul before proceeding.',
    },
    policyLimitsAvailable: '',
    demandSentDate: 'June 18, 2025',
    adjusterEmail: 'joshmorgan@statefarm.com',
    demandsOffers: [
      {
        id: '1',
        type: 'demand' as const,
        amount: '$25,000',
        date: 'June 17, 2025',
        sent: true,
      },
      {
        id: '2',
        type: 'offer' as const,
        amount: '$18,000',
        date: 'June 27',
      },
      {
        id: '3',
        type: 'demand' as const,
        amount: '$11,800',
        date: 'Sent Demand 2',
        sent: true,
      },
      {
        id: '4',
        type: 'offer' as const,
        amount: '$21,000',
        date: 'July 12',
      },
    ],
    insuranceOffer: [
      {
        id: '1',
        amount: '$22,000',
        date: 'July 15, 2025',
        received: true,
      },
      {
        id: '2',
        amount: '$19,500',
        date: 'July 20, 2025',
        received: true,
      },
    ],
    negotiationNotes: [
      'Client agrees to settle if offer reaches $22,000. Pending lien balance verification from Orthopedic Clinic.',
      'Client is willing to accept $18,500 for settlement, contingent on receiving updated medical records from St. Mary\'s Hospital. Awaiting confirmation from provider.',
    ],
    settlementAccepted: {
      accepted: true,
      date: 'July 17, 2025',
    },
    settlementReleaseReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    releaseSentToClient: {
      date: 'July 24, 2026',
      sentBySnailMail: true,
      sentElectronically: true,
    },
    releaseSignedReceived: {
      adjusterEmail: 'adjuster1@geico.com',
      date: 'July 18, 2025',
      signedDate: '08/11/25',
    },
    checkReceived: {
      received: true,
      date: 'July 22, 2025',
    },
    miscNotes: 'Remaining lien balance for Orthopedic Clinic pending. Final deductions calculated and client notified. Check confirmed cleared by finance on July 23. Awaiting final closure in CRM.',
  },
];

export const Default: Story = {
  args: {
    cases: NegotiationCase,
  },
};

// export const Empty: Story = {
//   args: {
//     cases: [],
//   },
// };

// export const SingleCase: Story = {
//   args: {
//     cases: [sampleCases[0]],
//   },
// };
