import type { Meta, StoryObj } from '@storybook/react';
import { SettlementStatementPage } from './SettlementStatement';

const meta: Meta<typeof SettlementStatementPage> = {
  title: 'Pages/Settlement/Statement',
  component: SettlementStatementPage,
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
    claim: {
      control: 'text',
      description: 'Claim number to display in settlement cards',
    },
    pageActionsState: {
      control: 'select',
      options: ['save', 'saved', 'edit'],
      description: 'Current state of the page actions',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SettlementStatementPage>;

const settlementCardsData = [
  {
    id: 1,
    settlementCard: 'Settlement',
    phone: '555-123-4567',
    dob: '01/22/1993',
    last4SSN: '8976',
    crashDate: '07/31/25',
    settlementAmount: '$16,244',
    attorneyFees: '$5,333',
    medicalBills: '$8,500',
    netToClient: '$7,500',
    // Header Information
    insuranceCompanyName: 'State Farm Insurance',
    claim: '#564583',
    clientName: 'Jeferson Garry',
    // Medical Payments Settlement
    medicalPaymentsSettlement1: '$1,045',
    medicalPaymentsSettlement2: '$2,200',
    medicalPaymentsSettlement3: '$12,999',
    grossSettlement: '$16,244',
    attorneyFeesPercent: '33%',
    caseExpenses: '$2,500',
    medicalRecordsBillsExpenses: '$150',
    // Loan Information
    loanCompanyName: 'US Bank',
    // Loan Repayment
    loanRepayment: [
      {
        billCompany: 'Dentist Clinic',
        amountPaid: '$2000',
        amountDue: '$220',
        dontPay: true
      },
      {
        billCompany: 'Physical Therapy Center',
        amountPaid: '$1500',
        amountDue: '$300',
        dontPay: true
      },
      {
        billCompany: 'Orthopedic Specialists',
        amountPaid: '$2400',
        amountDue: '$100',
        dontPay: false
      },
      {
        billCompany: 'Chiropractic Group',
        amountPaid: '$1300',
        amountDue: '$300',
        dontPay: false
      },
      {
        billCompany: 'Imaging Services',
        amountPaid: '$900',
        amountDue: '$300',
        dontPay: false
      }
    ],
    // Lien Information
    lienInformation: [
      {
        name: 'US Imaging Center',
        amount: '$4000'
      },
      {
        name: 'Advanced Spine Institute',
        amount: '$3220'
      },
      {
        name: 'City Rehab & Therapy',
        amount: '$2150'
      },
      {
        name: 'Precision Orthopedics Group',
        amount: '$1875'
      },
      {
        name: 'Elite Diagnostics Lab',
        amount: '$1275'
      }
    ],
    // Notes
    notes: 'Reviewed all repayment items - client to cover remaining balances for Dentist Clinic and Physical Therapy Center. Imaging and Chiropractic dues pending confirmation. Lien sources added based on finalized invoices. Net to client calculated post-deductions. Awaiting adjuster update before final submission.',
  },
  {
    id: 2,
    settlementCard: 'Settlement',
    phone: '555-987-6543',
    dob: '05/15/1988',
    last4SSN: '4321',
    crashDate: '03/15/25',
    settlementAmount: '$125,000',
    attorneyFees: '$41,666',
    medicalBills: '$15,250',
    netToClient: '$68,084',
    // Header Information
    insuranceCompanyName: 'GEICO',
    claim: '#564584',
    clientName: 'Elijah Turner',
    // Medical Payments Settlement
    medicalPaymentsSettlement1: '$41,250',
    medicalPaymentsSettlement2: '$29,812',
    medicalPaymentsSettlement3: '$20,125',
    grossSettlement: '$125,000',
    attorneyFeesPercent: '33%',
    caseExpenses: '$3,750',
    medicalRecordsBillsExpenses: '$225',
    // Loan Information
    loanCompanyName: 'BridgeMed Loans',
    // Loan Repayment
    loanRepayment: [
      {
        billCompany: 'City Dental Group',
        amountPaid: '$3,200',
        amountDue: '$450',
        dontPay: true
      },
      {
        billCompany: 'Flex Therapy Network',
        amountPaid: '$2,800',
        amountDue: '$380',
        dontPay: true
      },
      {
        billCompany: 'Nova Ortho Partners',
        amountPaid: '$4,500',
        amountDue: '$600',
        dontPay: true
      },
      {
        billCompany: 'Wellness Chiropractic',
        amountPaid: '$1,950',
        amountDue: '$280',
        dontPay: false
      },
      {
        billCompany: 'Global Imaging Solutions',
        amountPaid: '$1,200',
        amountDue: '$150',
        dontPay: false
      }
    ],
    // Lien Information
    lienInformation: [
      {
        name: 'Metro Imaging Services',
        amount: '$6,800'
      },
      {
        name: 'Legacy Spine Institute',
        amount: '$5,420'
      },
      {
        name: 'Lakeview Rehab & Therapy',
        amount: '$3,650'
      },
      {
        name: 'Advanced Ortho Solutions',
        amount: '$2,980'
      },
      {
        name: 'Diagnostic Labs of Ohio',
        amount: '$1,875'
      }
    ],
    // Notes
    notes: 'Applied state lien reduction on all finalized invoices. Reduced balances shown. Client responsible for $1,220 in direct bill dues. Awaiting hospital confirmation on final statute application. Settlement reviewed with legal team.',
  },
  {
    id: 3,
    settlementCard: 'Settlement',
    phone: '555-456-7890',
    dob: '09/12/1990',
    last4SSN: '5678',
    crashDate: '11/08/25',
    settlementAmount: '$85,000',
    attorneyFees: '$28,333',
    medicalBills: '$12,500',
    netToClient: '$44,750',
    // Header Information
    insuranceCompanyName: 'Progressive Auto Insurance',
    claim: '#564585',
    clientName: 'Amanda Reeve',
    // Medical Payments Settlement
    medicalPaymentsSettlement1: '$16,850',
    medicalPaymentsSettlement2: '$10,600',
    medicalPaymentsSettlement3: '$6,670',
    grossSettlement: '$85,000',
    attorneyFeesPercent: '33%',
    caseExpenses: '$2,850',
    medicalRecordsBillsExpenses: '$180',
    // Loan Information
    loanCompanyName: 'Greenlight Loans',
    // Loan Repayment
    loanRepayment: [
      {
        billCompany: 'Sunrise Dental Group',
        amountPaid: '$2,750',
        amountDue: '$320',
        dontPay: true
      },
      {
        billCompany: 'Midwest Physical Therapy',
        amountPaid: '$2,100',
        amountDue: '$290',
        dontPay: false
      },
      {
        billCompany: 'OrthoPlus Clinic',
        amountPaid: '$3,800',
        amountDue: '$520',
        dontPay: false
      },
      {
        billCompany: 'Balance Chiropractic',
        amountPaid: '$1,650',
        amountDue: '$220',
        dontPay: false
      },
      {
        billCompany: 'ScanPoint Imaging',
        amountPaid: '$950',
        amountDue: '$130',
        dontPay: false
      }
    ],
    // Lien Information
    lienInformation: [
      {
        name: 'Allied Imaging Center',
        amount: '$4,850'
      },
      {
        name: 'NovaSpine Institute',
        amount: '$3,920'
      },
      {
        name: 'Elevate Therapy & Rehab',
        amount: '$2,650'
      },
      {
        name: 'Greater Orthopedic Associates',
        amount: '$2,150'
      },
      {
        name: 'Rapid Diagnostics Laboratory',
        amount: '$1,480'
      }
    ],
    // Notes
    notes: 'Client responsible for remaining balances at Sunrise Dental Group and Midwest Physical Therapy. OrthoPlus and Imaging dues awaiting verification. All lien values based on submitted final statements. Adjuster follow-up pending. Net calculated post all deductions and known obligations.',
  }
];

const hospitalCardsData = [
  {
    id: 1,
    settlementCard: 'Hospital Lien Statute Reduction Settlement',
    phone: '555-789-0123',
    dob: '12/03/1985',
    last4SSN: '9012',
    crashDate: '08/22/25',
    settlementAmount: '$14,700',
    attorneyFees: '$5,178',
    medicalBills: '$6,500',
    netToClient: '',
    // Header Information
    insuranceCompanyName: 'Allstate Insurance',
    claim: '#564586',
    clientName: 'Maria Jennings',
    // Medical Payments Settlement
    medicalPaymentsSettlement1: '$1,200',
    medicalPaymentsSettlement2: '$3,000',
    medicalPaymentsSettlement3: '$10,500',
    grossSettlement: '$14,700',
    attorneyFeesPercent: '35.234%',
    caseExpenses: '$2,897',
    medicalRecordsBillsExpenses: '$1,564',
    // Loan Information
    loanCompanyName: 'Capital Funding Inc.',
    // Loan Repayment
    loanRepayment: [
      {
        billCompany: 'Sunshine Dental Group',
        amountPaid: '$2,200',
        amountDue: '$300',
        dontPay: true
      },
      {
        billCompany: 'Core Physical Therapy',
        amountPaid: '$1,750',
        amountDue: '$250',
        dontPay: false
      },
      {
        billCompany: 'Midwest Ortho Group',
        amountPaid: '$2,600',
        amountDue: '$0',
        dontPay: false
      },
      {
        billCompany: 'Harmony Chiro Center',
        amountPaid: '$1,400',
        amountDue: '$400',
        dontPay: false
      },
      {
        billCompany: 'Vision Imaging Lab',
        amountPaid: '$850',
        amountDue: '$350',
        dontPay: false
      }
    ],
    // Lien Information
    lienInformation: [
      {
        name: 'Metro Imaging Services',
        amount: '$4,200'
      },
      {
        name: 'Legacy Spine Institute',
        amount: '$3,050'
      },
      {
        name: 'Lakeview Rehab & Therapy',
        amount: '$2,300'
      },
      {
        name: 'Advanced Ortho Solutions',
        amount: '$1,950'
      },
      {
        name: 'Diagnostic Labs of Ohio',
        amount: '$1,150'
      }
    ],
    // Notes
    notes: 'Reviewed all repayment items - client to cover remaining balances for Dentist Clinic and Physical Therapy Center. Imaging and Chiropractic dues pending confirmation. Lien sources added based on finalized invoices. Net to client calculated post-deductions. Awaiting adjuster update before final submission.',
  }
];

export const MultipleSettlements: Story = {
  args: {
    caseNumber: 'Multiple Settlements',
    clientName: 'Multiple Clients',
    claim: 'Multiple Claims',
    settlementCards: settlementCardsData,
    hospitalCards: hospitalCardsData,
  },
};
