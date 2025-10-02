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
    pageActionsState: {
      control: 'select',
      options: ['save', 'saved', 'edit'],
      description: 'State of the form',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ClientDetailsPage>;

interface ResidentRelativeInsuranceFormData {
  sectionTitle: string;
  formData: {
    noResidentRelativeInsCo?: boolean;
    injuriesLargeEnoughToUseResRelUIM?: 'Maybe' | 'Yes' | 'No' | '';
    insuranceCompany?: string;
    insuranceAddress?: string;
    clientName?: string;
    policyHolderNameResRel?: string;
    policyHolderName?: string;
    claimNumber?: string;
    policyNumber?: string;
    mainInsPhone?: string;
    hasOwnPolicy?: boolean;
    demandLetterSent?: boolean;
    emailDemandLetter?: boolean;

    biAdjusterName?: string;
    biAdjusterPhone?: string;
    biAdjusterFax?: string;
    biAdjusterEmail?: string;
    emailOptions?: {
      liability?: boolean;
      medpay?: boolean;
      uim?: boolean;
      um?: boolean;
      excessUmbrella?: boolean;
    };
    emailLetterOfRepresentationLienLetter?: boolean;

    medPayAdjusterName?: string;
    medPayAdjusterPhone?: string;
    medPayAdjusterEmail?: string;
    medPayAdjusterFax?: string;
    emailMedPayAdjuster?: boolean;
    emailIsThereMPorUIM?: boolean;
    emailMedPayDemand?: boolean;

    medPayLimits?: 'None' | '$1K' | '$2,500' | '$5k' | '$10K' | '$25K' | 'Other' | '';
    medPayLimitsOtherSpecify?: string;
    uimLimitsPerPerson?: string;
    uimAdjusterWillNotDiscloseLimits?: boolean;
    umLimitsPerPerson?: string;
    umAdjusterWillNotDiscloseLimits?: boolean;
    vehiclesOnPolicyForUMOnly?: number | null;
    totalUMStackedLimits?: string;
    umbrellaSecondaryLiabilityPolicy?: 'Yes' | 'No' | '';
    emailAdjusterIsThereUmbrellaUIM?: boolean;
    injuriesNotLargeEnough?: boolean;
    umbrellaAdjusterWillNotDiscloseLimits?: boolean;
  };
}

const residentRelativeInsuranceCoData: ResidentRelativeInsuranceFormData = {
  sectionTitle: "Resident Relative Ins. Co #1",
  formData: {
  noResidentRelativeInsCo: false,
  injuriesLargeEnoughToUseResRelUIM: 'Yes',
  insuranceCompany: 'State Farm Insurance',
  insuranceAddress: '123 Main St, Springfield, IL 62701',
  clientName: 'Jane Doe',
  policyHolderNameResRel: 'John Doe Sr.',
  policyHolderName: 'SF-2025-00981',
  hasOwnPolicy: true,
  claimNumber: 'SF-2025-00981',
  emailDemandLetter: false,
  demandLetterSent: false,
  policyNumber: 'RS-5589-7745',
  mainInsPhone: '(312) 555-2190',

  biAdjusterName: 'Sarah Johnson',
  biAdjusterPhone: '(312) 555-4812',
  biAdjusterFax: '(312) 555-7722',
  biAdjusterEmail: 'sarah.johnson@statefarm.com',
  emailOptions: {
    liability: false,
    medpay: false,
    uim: false,
    um: false,
    excessUmbrella: false,
  },
  emailLetterOfRepresentationLienLetter: false,

  medPayAdjusterName: 'Michael Smith',
  medPayAdjusterPhone: '(312) 555-7721',
  medPayAdjusterEmail: 'michael.smith@statefarm.com',
  medPayAdjusterFax: '(312) 555-7722',
  emailMedPayAdjuster: false,
  emailIsThereMPorUIM: false,
  emailMedPayDemand: false,

  medPayLimits: '$5k',
  medPayLimitsOtherSpecify: '',
  uimLimitsPerPerson: '100000',
  uimAdjusterWillNotDiscloseLimits: false,
  umLimitsPerPerson: '100000',
  umAdjusterWillNotDiscloseLimits: false,
  vehiclesOnPolicyForUMOnly: 2,
  totalUMStackedLimits: '200000',
  umbrellaSecondaryLiabilityPolicy: 'Yes',
  emailAdjusterIsThereUmbrellaUIM: false,
  injuriesNotLargeEnough: false,
  umbrellaAdjusterWillNotDiscloseLimits: false,
  }
};

const emptyResidentRelativeInsuranceCoData = {
  sectionTitle: "Resident Relative Ins. Co #1",
  formData: {
    noResidentRelativeInsCo: false,
    injuriesLargeEnoughToUseResRelUIM: '',
    insuranceCompany: '',
    insuranceAddress: '',
    clientName: '',
    policyHolderNameResRel: '',
    policyHolderName: '',
    hasOwnPolicy: false,
    claimNumber: '',
    emailDemandLetter: false,
    demandLetterSent: false,
    policyNumber: '',
    mainInsPhone: '',

    biAdjusterName: '',
    biAdjusterPhone: '',
    biAdjusterFax: '',
    biAdjusterEmail: '',
    emailOptions: {
      liability: false,
      medpay: false,
      uim: false,
      um: false,
      excessUmbrella: false,
    },
    emailLetterOfRepresentationLienLetter: false,

    medPayAdjusterName: '',
    medPayAdjusterPhone: '',
    medPayAdjusterEmail: '',
    medPayAdjusterFax: '',
    emailMedPayAdjuster: false,
    emailIsThereMPorUIM: false,
    emailMedPayDemand: false,

    medPayLimits: '',
    medPayLimitsOtherSpecify: '',
    uimLimitsPerPerson: '',
    uimAdjusterWillNotDiscloseLimits: false,
    umLimitsPerPerson: '',
    umAdjusterWillNotDiscloseLimits: false,
    vehiclesOnPolicyForUMOnly: null,
    totalUMStackedLimits: '',
    umbrellaSecondaryLiabilityPolicy: '',
    emailAdjusterIsThereUmbrellaUIM: false,
    injuriesNotLargeEnough: false,
    umbrellaAdjusterWillNotDiscloseLimits: false,
  }
};

const singleInsuranceSectionEmptyData = {
  sectionTitle: "Client Insurance Company #1",
  formData: {
    insuranceCompany: '',
    insuranceAddress: '',
  },
  clientName: '',
  policyHolderName: '',
  claimNumber: '',
  policyNumber: '',
  mainInsPhone: '',
  hasOwnPolicy: false,
  demandLetterSent: false,
  biAdjusterName: '',
  biAdjusterPhone: '',
  biAdjusterFax: '',
  biAdjusterEmail: '',
  medPayAdjusterName: '',
  medPayAdjusterPhone: '',
  medPayAdjusterEmail: '',
  medPayAdjusterFax: '',
  liabilityLimitsPerPerson: '',
  uimLimitsPerPerson: '',
  umLimitsPerPerson: '',
  vehiclesOnPolicy: '',
  totalUmStackedLimits: '',
  umbrellaSecondaryLiabilityPolicy: '',
  notes: '',
  emailOptions: {
    liability: false,
    medpay: false,
    uim: false,
    um: false,
    excess: false
  },
  medPayLimit: '',
  medPayLimitOther: '',
  excessLiabilityCoverage: ''
};

const insuranceSectionData = [
  {
    sectionTitle: "Client Insurance Company #1",
    formData: {
      insuranceCompany: 'State Farm',
      insuranceAddress: '123 Main St',
      clientName: 'John Doe',
      policyHolderName: 'John Doe',
      claimNumber: 'SF-2025-001',
      policyNumber: 'POL-001',
      mainInsPhone: '555-0123',
      hasOwnPolicy: true,
      demandLetterSent: false,
      biAdjusterName: 'Jane Smith',
      biAdjusterPhone: '555-0124',
      biAdjusterFax: '555-0125',
      biAdjusterEmail: 'jane.smith@statefarm.com',
      medPayAdjusterName: 'Bob Johnson',
      medPayAdjusterPhone: '555-0126',
      medPayAdjusterEmail: 'bob.johnson@statefarm.com',
      medPayAdjusterFax: '555-0127',
      liabilityLimitsPerPerson: '100000',
      uimLimitsPerPerson: '50000',
      umLimitsPerPerson: '50000',
      vehiclesOnPolicy: '2',
      totalUmStackedLimits: '100000',
      umbrellaSecondaryLiabilityPolicy: 'No',
      notes: 'Primary insurance company',
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
  },
  {
    sectionTitle: "Client Insurance Company #2",
    formData: {
      insuranceCompany: 'Allstate',
      insuranceAddress: '456 Oak Ave',
      clientName: 'John Doe',
      policyHolderName: 'John Doe',
      claimNumber: 'ALL-2025-002',
      policyNumber: 'POL-002',
      mainInsPhone: '555-0223',
      hasOwnPolicy: false,
      demandLetterSent: true,
      biAdjusterName: 'Mike Wilson',
      biAdjusterPhone: '555-0224',
      biAdjusterFax: '555-0225',
      biAdjusterEmail: 'mike.wilson@allstate.com',
      medPayAdjusterName: 'Sarah Davis',
      medPayAdjusterPhone: '555-0226',
      medPayAdjusterEmail: 'sarah.davis@allstate.com',
      medPayAdjusterFax: '555-0227',
      liabilityLimitsPerPerson: '250000',
      uimLimitsPerPerson: '100000',
      umLimitsPerPerson: '100000',
      vehiclesOnPolicy: '1',
      totalUmStackedLimits: '200000',
      umbrellaSecondaryLiabilityPolicy: 'Yes',
      notes: 'Secondary insurance company',
      emailOptions: {
        liability: true,
        medpay: false,
        uim: true,
        um: true,
        excess: true
      },
      medPayLimit: '10k',
      medPayLimitOther: '',
      excessLiabilityCoverage: 'Yes'
    }
  },
  {
    sectionTitle: "Client Insurance Company #3",
    formData: {
      insuranceCompany: 'Progressive',
      insuranceAddress: '789 Pine St',
      clientName: 'John Doe',
      policyHolderName: 'John Doe',
      claimNumber: 'PROG-2025-003',
      policyNumber: 'POL-003',
      mainInsPhone: '555-0323',
      hasOwnPolicy: false,
      demandLetterSent: false,
      biAdjusterName: 'Lisa Brown',
      biAdjusterPhone: '555-0324',
      biAdjusterFax: '555-0325',
      biAdjusterEmail: 'lisa.brown@progressive.com',
      medPayAdjusterName: 'Tom Green',
      medPayAdjusterPhone: '555-0326',
      medPayAdjusterEmail: 'tom.green@progressive.com',
      medPayAdjusterFax: '555-0327',
      liabilityLimitsPerPerson: '500000',
      uimLimitsPerPerson: '250000',
      umLimitsPerPerson: '250000',
      vehiclesOnPolicy: '3',
      totalUmStackedLimits: '500000',
      umbrellaSecondaryLiabilityPolicy: 'Yes',
      notes: 'Tertiary insurance company',
      emailOptions: {
        liability: false,
        medpay: true,
        uim: true,
        um: true,
        excess: true
      },
      medPayLimit: '25k',
      medPayLimitOther: '',
      excessLiabilityCoverage: 'Yes'
    }
  }
];

export const Empty: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: '',
    pageActionsState: 'save',
    insuranceSections: [singleInsuranceSectionEmptyData],
    relativeInsuranceSections: [emptyResidentRelativeInsuranceCoData],
  },
};

export const Adding: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'John Doe',
    pageActionsState: 'edit',
    insuranceSections: [insuranceSectionData[0]],
    relativeInsuranceSections: [residentRelativeInsuranceCoData],
  },
};

export const TwoForms: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'John Doe',
    pageActionsState: 'edit',
    insuranceSections: insuranceSectionData.slice(0, 2),
    relativeInsuranceSections: [residentRelativeInsuranceCoData],
  },
};

export const Saved: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'John Doe',
    pageActionsState: 'saved',
    insuranceSections: insuranceSectionData,
  },
};

export const Edit: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'John Doe',
    pageActionsState: 'edit',
    insuranceSections: insuranceSectionData,
  },
};
