import type { Meta, StoryObj } from '@storybook/react';
import { SettlementNegotiations } from './SettlementNegotiations';

const meta: Meta<typeof SettlementNegotiations> = {
  title: 'Pages/Settlement/Negotiations All Cases',
  component: SettlementNegotiations,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SettlementNegotiations>;

const AllNegotiationCases = [
  {
    id: '1',
    caseNumber: '#2025-001',
    insuranceCompany: 'Progressive',
    status: {
      text: 'Offer Accepted',
    },
    clientInfo: {
      name: 'Cooper, Jane',
      primaryPhone: '(618) 216 2917',
      momsPhone: '(618) 226 3478',
      email: 'jane.cooper@gmail.com',
      note: 'Nick - Discuss the details of what goes here with Paul',
    },
    policyLimitsAvailable: 'Progressive',
    demandSentDate: 'July 24, 2025',
    adjusterEmail: 'joshmorgan@statefarm.com',
    demandsOffers: [
      {
        id: '1',
        amount: '$15,000',
        date: 'July 24, 2025',
        sent: true,
        status: 'Sent',
      },
      {
        id: '2',
        amount: '$18,000',
        date: 'July 25, 2025',
        sent: false,
        status: 'Created',
      },
    ],
    insuranceOffer: [
      {
        id: '1',
        amount: '$13,000',
        date: 'July 25, 2025',
        received: true,
        status: 'Received',
      },
      {
        id: '2',
        amount: '$12,000',
        date: 'July 24, 2025',
        received: true,
        status: 'Received',
      },
    ],
    negotiationNotes: [
      'Reviewed latest counter from insurer - client agreed to partial responsibility for Lab.',
    ],
    settlementAccepted: {
      accepted: true,
      date: 'July 22, 2025',
    },
    settlementReleaseReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    releaseSentToClient: {
      date: 'July 24, 2025',
      sentBySnailMail: true,
      sentElectronically: true,
    },
    releaseSignedReceived: {
      adjusterEmail: 'joshmorgan@statef....',
      date: 'July 12, 2025',
      signedDate: 'July 12, 2025',
    },
    checkReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    miscNotes: 'Reviewed all outstanding documentation. Client approved remaining balances for OrthoCare Group and Sunrise...',
  },
  {
    id: '2',
    caseNumber: '#2025-002',
    insuranceCompany: 'Allstate',
    status: {
      text: 'Offer Accepted',
    },
    clientInfo: {
      name: 'Singh, Raj',
      primaryPhone: '(213) 555 8392',
      momsPhone: '(213) 555 9276',
      email: 'raj.singh@gmail.com',
      note: 'Nick - Await Paul\'s final OK',
    },
    policyLimitsAvailable: '',
    demandSentDate: 'July 5, 2025',
    adjusterEmail: 'maria.adjuster@allstate.com',
    demandsOffers: [
      {
        id: '1',
        amount: '$9,500',
        date: 'July 5, 2025',
        sent: true,
        status: 'Sent',
      },
    ],
    insuranceOffer: [
      {
        id: '1',
        amount: '$8,000',
        date: 'July 5, 2025',
        received: true,
        status: 'Received',
      },
    ],
    negotiationNotes: [
      'Reviewed counter; client accepted with reduced liability',
    ],
    settlementAccepted: {
      accepted: true,
      date: 'July 21, 2025',
    },
    settlementReleaseReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    releaseSentToClient: {
      date: 'July 18, 2025',
      sentBySnailMail: true,
      sentElectronically: true,
    },
    releaseSignedReceived: {
      adjusterEmail: 'maria.adjuster@allsta...',
      date: 'July 18, 2025',
      signedDate: 'July 18, 2025',
    },
    checkReceived: {
      received: true,
      date: 'July 22, 2025',
    },
    miscNotes: 'Final med review completed. Lien check scheduled.',
  },
  {
    id: '3',
    caseNumber: '#2025-003',
    insuranceCompany: 'Liberty Mutual',
    status: {
      text: 'Offer Accepted',
    },
    clientInfo: {
      name: 'Garcia, Elena',
      primaryPhone: '(213) 987-6543',
      momsPhone: '(213) 987-6544',
      email: 'elena.garcia@gmail.com',
      note: 'Nick - Discuss med report',
    },
    policyLimitsAvailable: '',
    demandSentDate: 'June 30, 2025',
    adjusterEmail: 'r.singh@libmutual.com',
    demandsOffers: [
      {
        id: '1',
        amount: '$13,000',
        date: 'June 30, 2025',
        sent: true,
        status: 'Sent',
      },
    ],
    insuranceOffer: [
      {
        id: '1',
        amount: '$10,000',
        date: 'June 30, 2025',
        received: true,
        status: 'Received',
      },
    ],
    negotiationNotes: [
      'Client signed after revised terms; emailed signed release',
    ],
    settlementAccepted: {
      accepted: true,
      date: 'July 3, 2025',
    },
    settlementReleaseReceived: {
      received: true,
      date: 'July 4, 2025',
    },
    releaseSentToClient: {
      date: 'July 15, 2025',
      sentBySnailMail: true,
      sentElectronically: true,
    },
    releaseSignedReceived: {
      adjusterEmail: 'r.singh@libmutual.com',
      date: 'July 18, 2025',
      signedDate: 'July 18, 2025',
    },
    checkReceived: {
      received: true,
      date: 'July 21, 2025',
    },
    miscNotes: 'Pending new treatment records',
  },
  {
    id: '4',
    caseNumber: '#2025-004',
    insuranceCompany: 'State Farm',
    status: {
      text: 'Signed Release',
    },
    clientInfo: {
      name: 'Jordan, Kyle',
      primaryPhone: '(310) 222-3322',
      momsPhone: '(310) 222-3323',
      email: 'kyle.jordan@gmail.com',
      note: 'Nick - Confirm settlement',
    },
    policyLimitsAvailable: '',
    demandSentDate: 'July 8, 2025',
    adjusterEmail: 'egarcia@statefarm.com',
    demandsOffers: [
      {
        id: '1',
        amount: '$12,800',
        date: 'July 8, 2025',
        sent: true,
        status: 'Sent',
      },
    ],
    insuranceOffer: [
      {
        id: '1',
        amount: '$12,200',
        date: 'July 8, 2025',
        received: true,
        status: 'Received',
      },
    ],
    negotiationNotes: [
      'Reviewing counter; client may reject pending updated report',
    ],
    settlementAccepted: {
      accepted: true,
      date: 'July 22, 2025',
    },
    settlementReleaseReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    releaseSentToClient: {
      date: 'July 13, 2025',
      sentBySnailMail: true,
      sentElectronically: true,
    },
    releaseSignedReceived: {
      adjusterEmail: 'egarcia@statefarm.com',
      date: 'July 18, 2025',
      signedDate: 'July 18, 2025',
    },
    checkReceived: {
      received: true,
      date: 'July 19, 2025',
    },
    miscNotes: 'Awaiting physical check confirmation',
  },
  {
    id: '5',
    caseNumber: '#2025-005',
    insuranceCompany: 'GEICO',
    status: {
      text: 'Blank Release',
    },
    clientInfo: {
      name: 'Chang, Lily',
      primaryPhone: '(415) 333-7788',
      momsPhone: '(415) 333-7789',
      email: 'lily.chang@gmail.com',
      note: 'Nick - Need response from Ins',
    },
    policyLimitsAvailable: '',
    demandSentDate: 'June 12, 2025',
    adjusterEmail: 'adjuster@geico.com',
    demandsOffers: [
      {
        id: '1',
        amount: '$11,800',
        date: 'June 12, 2025',
        sent: true,
        status: 'Sent',
      },
    ],
    insuranceOffer: [
      {
        id: '1',
        amount: '$10,000',
        date: 'June 12, 2025',
        received: true,
        status: 'Received',
      },
    ],
    negotiationNotes: [
      'Client accepted; check mailed but not yet received',
    ],
    settlementAccepted: {
      accepted: true,
      date: 'July 22, 2025',
    },
    settlementReleaseReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    releaseSentToClient: {
      date: 'June 22, 2025',
      sentBySnailMail: true,
      sentElectronically: true,
    },
    releaseSignedReceived: {
      adjusterEmail: 'adjuster1@geico.com',
      date: 'July 18, 2025',
      signedDate: 'July 18, 2025',
    },
    checkReceived: {
      received: true,
      date: 'July 17, 2025',
    },
    miscNotes: 'Escalated for supervisor review',
  },
  {
    id: '6',
    caseNumber: '#2025-006',
    insuranceCompany: 'Travelers',
    status: {
      text: 'Check Pending',
    },
    clientInfo: {
      name: 'Taylor, Mia',
      primaryPhone: '(408) 555-1199',
      momsPhone: '(408) 555-1200',
      email: 'mia.taylor@gmail.com',
      note: 'Nick - Confirm policy limits with Paul before proceeding.',
    },
    policyLimitsAvailable: '',
    demandSentDate: 'June 11, 2025',
    adjusterEmail: 'michael@travelers.com',
    demandsOffers: [
      {
        id: '1',
        amount: '$10,400',
        date: 'June 11, 2025',
        sent: true,
        status: 'Sent',
      },
    ],
    insuranceOffer: [
      {
        id: '1',
        amount: '$8,890',
        date: 'June 11, 2025',
        received: true,
        status: 'Received',
      },
    ],
    negotiationNotes: [
      'No response from insurer after multiple follow-ups',
    ],
    settlementAccepted: {
      accepted: true,
      date: 'July 21, 2025',
    },
    settlementReleaseReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    releaseSentToClient: {
      date: 'June 19, 2025',
      sentBySnailMail: true,
      sentElectronically: true,
    },
    releaseSignedReceived: {
      adjusterEmail: 'michael@travelers.com',
      date: 'July 18, 2025',
      signedDate: 'July 18, 2025',
    },
    checkReceived: {
      received: true,
      date: 'July 15, 2025',
    },
    miscNotes: 'Reviewed all outstanding documentation. Client approved remaining balances for OrthoCare Group and Sunrise...',
  },
  {
    id: '7',
    caseNumber: '#2025-007',
    insuranceCompany: 'Insurance - UIM',
    status: {
      text: 'Respond',
    },
    clientInfo: {
      name: 'Taylor, Mia',
      primaryPhone: '(917) 999-0007',
      momsPhone: '(917) 999-0008',
      email: 'mia.taylor2@gmail.com',
      note: 'Nick - Confirm settlement',
    },
    policyLimitsAvailable: '',
    demandSentDate: 'June 10, 2025',
    adjusterEmail: 'philip@uim.com',
    demandsOffers: [
      {
        id: '1',
        amount: '$9,900',
        date: 'June 10, 2025',
        sent: true,
        status: 'Sent',
      },
    ],
    insuranceOffer: [
      {
        id: '1',
        amount: '$8,500',
        date: 'June 10, 2025',
        received: true,
        status: 'Received',
      },
    ],
    negotiationNotes: [
      'Client signed after revised terms; emailed signed release',
    ],
    settlementAccepted: {
      accepted: true,
      date: 'July 22, 2025',
    },
    settlementReleaseReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    releaseSentToClient: {
      date: 'June 18, 2025',
      sentBySnailMail: true,
      sentElectronically: true,
    },
    releaseSignedReceived: {
      adjusterEmail: 'philip@uim.com',
      date: 'July 18, 2025',
      signedDate: 'July 18, 2025',
    },
    checkReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    miscNotes: 'Reviewed all outstanding documentation. Client approved remaining balances for OrthoCare Group and Sunrise...',
  },
  {
    id: '8',
    caseNumber: '#2025-008',
    insuranceCompany: 'State Farm',
    status: {
      text: 'No Offer 30+',
    },
    clientInfo: {
      name: 'Taylor, Mia',
      primaryPhone: '(213) 555 8392',
      momsPhone: '(213) 555 9276',
      email: 'mia.taylor3@gmail.com',
      note: 'Nick - Await Paul\'s final OK',
    },
    policyLimitsAvailable: '',
    demandSentDate: 'June 9, 2025',
    adjusterEmail: 'egarcia@statefarm.com',
    demandsOffers: [
      {
        id: '1',
        amount: '$9,700',
        date: 'June 9, 2025',
        sent: true,
        status: 'Sent',
      },
      {
        id: '2',
        amount: '$11,200',
        date: 'June 15, 2025',
        sent: false,
        status: 'Created',
      },
    ],
    insuranceOffer: [
      {
        id: '1',
        amount: '$8,654',
        date: 'June 9, 2025',
        received: true,
        status: 'Received',
      },
    ],
    negotiationNotes: [
      'Reviewing counter, client may reject pending updated report',
    ],
    settlementAccepted: {
      accepted: true,
      date: 'July 23, 2025',
    },
    settlementReleaseReceived: {
      received: true,
      date: 'July 24, 2025',
    },
    releaseSentToClient: {
      date: 'June 17, 2025',
      sentBySnailMail: true,
      sentElectronically: true,
    },
    releaseSignedReceived: {
      adjusterEmail: 'egarcia@statefarm.com',
      date: 'July 18, 2025',
      signedDate: 'July 18, 2025',
    },
    checkReceived: {
      received: true,
      date: 'July 12, 2025',
    },
    miscNotes: 'Reviewed all outstanding documentation. Client approved remaining balances for OrthoCare Group and Sunrise...',
  },
];

export const AllCases: Story = {
  args: {
    cases: AllNegotiationCases,
    type: 'statement',
  },
};
