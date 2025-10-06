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

const emptyFormData = {};

interface liabilityInsuranceSections {
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


const filledFormData = {
  progressPercent: 75,
  incidentDate: '2024-12-15',
  medicalBills: '$25,000',
  totalLiabilityPP: '$100,000',
  totalUMPP: '$50,000',
  totalUMPolicy: '$100,000',
  clientPhone: '(417) 555-0123',
  
  assignedTeam: 'Team Alpha',
  referredFirm: 'Smith & Associates',
  firstName: 'John',
  email: 'john.doe@email.com',
  bestContact: 'Email',
  address: '123 Main Street',
  state: 'MO',
  city: 'Springfield',
  zipCode: '65801',
  dob: '1985-03-15',
  ssn: '123-45-6789',
  crashDate: '2024-12-15',
  otherClientsInCrash: 'Jane Smith',
  parentName: 'Robert Doe',
  casePlan: 'Settlement',
  phone1: '(417) 555-0123',
  phone1Type: 'Mobile',
  phone2: '(417) 555-0124',
  phone2Type: 'Work',
  phone3: '(417) 555-0125',
  phone3Type: 'Home',
  doNotSendAutomatedTexts: false,
  
  // Medical Treatment
  ongoingTreatment: true,
  treatmentCompleted: false,
  emergencyRoomVisit: true,
  vehicleAmbulance1: true,
  vehicleAmbulance2: false,
  helicopterAirAmbulance1: false,
  helicopterAirAmbulance2: false,
  
  // Medical Bills & Health Insurance
  estimatedMedicalBills: '25000',
  insuranceType: {
    none: false,
    medicaid: false,
    medicare: false,
    tricare: false,
    private: true
  },
  otherInsuranceType: 'Blue Cross Blue Shield',
  wageLoss: 'Yes',
  missedDays: '15',
  totalMissedDays: '30',
  hoursWorkedDays: '8/8',
  totalWageLoss: '5000',
  paidForMissedTime: 'No',
  contactEmployer: 'Ok',
  employerName: 'ABC Corporation',
  employerCity: 'Springfield',
  employerState: 'MO',
  employerZipCode: '65801',
  employerEmail: 'hr@abc.com',
  otherInnocentInjuredParties: 'None',
  sendBigPackage: {
    text: true,
    email: true,
    snailMail: false
  },
  
  // Crash & Injury Details
  crashDetails: 'Rear-end collision on Highway 65. Other driver failed to stop at red light.',
  crashInjuries: 'Whiplash, back pain, and minor cuts from broken glass.',
  priorInjuries: 'Previous back injury from 2019 workplace accident.',
  highValuePolicy: true,
  severeInjury: false,
  
  // TBI Symptoms
  adultTBI: true,
  adultHeadache: true,
  adultNausea: false,
  adultSeizures: false,
  childTBI: false,
  childHeadache: false,
  childNausea: false,
  childSeizures: false
};

const liabilityInsuranceSectionsEmpty = [{
  sectionTitle: 'Liability Insurance Co #1',
  formData: {
    insuranceCompany: 'State Farm Insurance',
    noLiabilityUMCase: false,
    wasClientInThisCar: 'No',
    
    insuranceCompanyAddress: '',
    defendantName: '',
    policyHolderName: '',
    claimNumber: '',
    policyNumber: '',
    mainInsPhone: '',
    
    biAdjusterName: '',
    biAdjusterPhone: '',
    biAdjusterFax: '',
    biAdjusterEmail: '',
    
    medPayAdjusterName: '',
    medPayAdjusterPhone: '',
    medPayAdjusterEmail: '',
    medPayAdjusterFax: '',
    
    driverPolicyHolderDifferent: 'No',
    demandLetterSent: false,
    emailTypes: {
      liability: false,
      medpay: false,
      uim: false,
      um: false,
      excessUmbrella: false
    },
    
    medPayLimits: '',
    medPayLimitsOther: '',
    
    liabilityLimitsPerPerson: '',
    liabilityLimitsDisclosed: false,
    uimLimitsPerPerson: '',
    uimLimitsDisclosed: false,
    umLimitsPerPerson: '',
    umLimitsDisclosed: false,
    
    vehiclesOnPolicy: '',
    totalUMStackedLimits: '',
    umbrellaSecondaryPolicy: 'None',
    injuriesNotLargeEnough: false,
    umbrellaLimitsDisclosed: false,
    
    notes: ''
  }
}]

const liabilityInsuranceSections = [
    {
      sectionTitle: 'Liability Insurance Co #1',
      formData: {
        insuranceCompany: 'State Farm Insurance',
        noLiabilityUMCase: false,
        wasClientInThisCar: 'No',
        
        insuranceAddress: '123 Main Street, Springfield, MO 65801',
        defendantName: 'Jane Smith',
        policyHolderName: 'Jane Smith',
        claimNumber: 'SF-2025-001',
        policyNumber: 'POL-123456',
        mainInsPhone: '(417) 555-0123',
        
        biAdjusterName: 'Mike Johnson',
        biAdjusterPhone: '(417) 555-0124',
        biAdjusterFax: '(417) 555-0125',
        biAdjusterEmail: 'mike.johnson@statefarm.com',
        
        medPayAdjusterName: 'Sarah Wilson',
        medPayAdjusterPhone: '(417) 555-0126',
        medPayAdjusterEmail: 'sarah.wilson@statefarm.com',
        medPayAdjusterFax: '(417) 555-0127',
        
        driverPolicyHolderDifferent: 'No',
        demandLetterSent: false,
        emailTypes: {
          liability: false,
          medpay: false,
          uim: false,
          um: false,
          excessUmbrella: false
        },
        
        medPayLimits: '$25K',
        medPayLimitsOther: '',
        
        liabilityLimitsPerPerson: '100000',
        liabilityLimitsDisclosed: false,
        uimLimitsPerPerson: '50000',
        uimLimitsDisclosed: false,
        umLimitsPerPerson: '50000',
        umLimitsDisclosed: false,
        
        vehiclesOnPolicy: '2',
        totalUMStackedLimits: '100000',
        umbrellaSecondaryPolicy: 'None',
        injuriesNotLargeEnough: false,
        umbrellaLimitsDisclosed: false,
        
        notes: 'Primary liability insurance. Good coverage limits. Responsive adjuster.'
      }
    }
  ]
export const Empty: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'John Doe',
    pageActionsState: 'save',
    formData: emptyFormData,
    liabilityInsuranceSections: liabilityInsuranceSectionsEmpty,
  },
};

export const Saved: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'John Doe',
    pageActionsState: 'saved',
    formData: filledFormData,
    liabilityInsuranceSections: liabilityInsuranceSections
  },
};

export const Edit: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'John Doe',
    pageActionsState: 'edit',
    formData: filledFormData,
    liabilityInsuranceSections: liabilityInsuranceSectionsEmpty,
  },
};
