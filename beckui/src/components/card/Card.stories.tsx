import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Typography } from '../typography/Typography';
import { SettlementCard } from '../../pages/settlement/SettlementCard';
import { SettlementNegotiationsCard } from '../../pages/settlement/SettlementNegotiationsCard';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
    style: {
      control: 'object',
      description: 'Inline style overrides merged with the default card styles.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Typography variant="leftLabel" style={{ marginBottom: '12px' }}>
        Card Title
      </Typography>
      <span style={{ color: 'var(--middle-grey)', lineHeight: 1.4 }}>
        Use the Card component to group related form controls, actions, or
        informational content with consistent spacing and borders.
      </span>
    </Card>
  ),
};

export const WithCustomSpacing: Story = {
  args: {
    style: {
      gap: 16,
      padding: '32px 24px',
    },
  },
  render: (args) => (
    <Card {...args}>
      <Typography variant="leftLabel" style={{ marginBottom: '8px' }}>
        Custom Layout
      </Typography>
      <span style={{ color: 'var(--middle-grey)', lineHeight: 1.4 }}>
        Override the default spacing to adapt the card for different content
        densities while keeping the base look and feel.
      </span>
    </Card>
  ),
};

export const SettlementCardExample: Story = {
  render: () => {
    const sampleFormData = {
      id: '#2025-001',
      settlementCard: 'Settlement Card',
      insuranceCompanyName: 'State Farm',
      claim: 'Auto Accident',
      clientName: 'Jane Cooper',
      attorneyFees: '33%',
      caseExpenses: '$1,200',
      medicalRecordsBillsExpenses: '$500',
      medicalPaymentsSettlement1: '$15,000',
      medicalPaymentsSettlement2: '$8,000',
      medicalPaymentsSettlement3: '$2,500',
      loanCompanyName: 'Medical Finance Corp',
      loanRepayment: [
        {
          billCompany: 'Springfield Hospital',
          amountPaid: '$5,000',
          amountDue: '$8,000',
          clientSaysDontPay: false,
        },
        {
          billCompany: 'Radiology Group',
          amountPaid: '$1,500',
          amountDue: '$2,000',
          clientSaysDontPay: false,
        },
      ],
      lienInformation: [
        {
          lienSource: 'Workers Comp',
          amount: '$3,500',
        },
        {
          lienSource: 'Medicare',
          amount: '$1,200',
        },
      ],
      netToClient: '$18,450',
      notes: 'Client approved all settlements. Final review completed by legal team.',
    };

    return <SettlementCard formData={sampleFormData} />;
  },
};

export const SettlementNegotiationsCardExample: Story = {
  render: () => {
    const sampleNegotiationData = {
      id: 'Case #2025-001',
      caseNumber: 'Case #2025-001',
      insuranceCompany: 'State Farm Liability',
      clientName: 'Cooper, Jane',
      primaryPhone: '(618) 216 2917',
      momsPhone: '(618) 226 3478',
      email: 'jane.cooper@gmail.com',
      note: 'Nick - Discuss the details of what goes here with Paul',
      policyLimitsAvailable: '',
      demandSentDate: 'July 24, 2025',
      adjusterEmail: 'joshmorgan@statefarm.com',
      demandsOffers: [
        {
          id: '1',
          type: 'demand' as const,
          amount: '$11,000',
          date: 'June 09, 2025',
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
          type: 'offer' as const,
          amount: '$12,000',
          date: 'June 10, 2025',
        },
        {
          id: '2',
          type: 'offer' as const,
          amount: '$18,000',
          date: 'June 27',
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
    };

    return <SettlementNegotiationsCard negotiationData={sampleNegotiationData} />;
  },
};
