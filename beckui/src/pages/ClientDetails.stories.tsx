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
    formData: {
      // Medical Treatment Checkboxes
      ongoingTreatment: false,
      treatmentCompleted: false,
      emergencyRoomVisit: false,
      vehicleAmbulance1: false,
      vehicleAmbulance2: false,
      helicopterAirAmbulance1: false,
      helicopterAirAmbulance2: false,
      
      // Client Information
      assignedTeam: '',
      referredFirm: '',
      firstName: '',
      email: '',
      bestContact: 'Phone',
      address: '',
      state: 'MO',
      city: '',
      zipCode: '',
      dob: '',
      ssn: '',
      crashDate: '',
      otherClientsInCrash: '',
      parentName: '',
      casePlan: '',
      
      // Phone Information
      phone1: '',
      phone1Type: 'Client Phone',
      otherPhone1: '',
      phone2: '',
      phone2Type: 'Client Phone',
      otherPhone2: '',
      phone3: '',
      phone3Type: 'Client Phone',
      otherPhone3: '',
      
      // Medical & Treatment Additional Fields
      policeDepartment: 'Missouri',
      accidentLocation: '',
      noPoliceReportTaken: false,
      waitingOnInformationToOrderPR: false,
      selectTreatmentNeeds: '',
      
      // Financial & Insurance
      estimatedMedicalBills: '',
      insuranceType: {
        none: false,
        medicaid: false,
        medicare: false,
        tricare: false,
        private: false
      },
      otherInsuranceType: '',
      
      // Wage Loss Details
      wageLoss: 'Yes',
      missedDays: '',
      totalMissedDays: '',
      hoursWorkedDays: '',
      totalWageLoss: '',
      paidForMissedTime: 'Yes',
      contactEmployer: 'Ok',
      employerName: '',
      employerCity: '',
      employerState: 'Missouri',
      employerZipCode: '',
      employerEmail: '',
      
      // Crash & Injury Details
      otherInnocentInjuredParties: '',
      crashDetails: '',
      crashInjuriesFromCrash: '',
      priorInjuries: '',
      highValuePolicy: false,
      severeInjury: false,
      
      // TBI Symptoms
      adultTBIHeadache: false,
      adultTBINausea: false,
      adultTBISeizures: false,
      childTBIHeadache: false,
      childTBINausea: false,
      childTBISeizures: false,
      
      // Checkboxes
      doNotSendAutomatedTexts: false
    },
    insuranceSections: [insuranceSectionData],
  },
};

export const WithFilledMedicalData: Story = {
  args: {
    caseNumber: 'Case #2025-0003',
    clientName: 'John Doe',
    pageActionsState: 'save',
    formData: {
      // Medical Treatment Checkboxes
      ongoingTreatment: true,
      treatmentCompleted: false,
      emergencyRoomVisit: true,
      vehicleAmbulance1: true,
      vehicleAmbulance2: false,
      helicopterAirAmbulance1: false,
      helicopterAirAmbulance2: true,
      
      // Client Information
      assignedTeam: 'Team Alpha',
      referredFirm: 'Smith & Associates',
      firstName: 'John Michael Doe',
      email: 'john.doe@email.com',
      bestContact: 'Phone',
      address: '123 Main Street',
      state: 'MO',
      city: 'Springfield',
      zipCode: '65801',
      dob: '01/15/1985',
      ssn: '123-45-6789',
      crashDate: '12/15/2024',
      otherClientsInCrash: 'Jane Doe (spouse)',
      parentName: '',
      casePlan: 'Pursue full compensation for medical expenses, lost wages, and pain and suffering. Focus on establishing liability and documenting all damages.',
      
      // Phone Information
      phone1: '(417) 555-0123',
      phone1Type: 'Client Phone',
      otherPhone1: '',
      phone2: '(417) 555-0124',
      phone2Type: 'Other',
      otherPhone2: 'Work phone',
      phone3: '(417) 555-0125',
      phone3Type: 'Client Phone',
      otherPhone3: '',
      
      // Medical & Treatment Additional Fields
      policeDepartment: 'Missouri',
      accidentLocation: 'Highway 65 and Battlefield Road',
      noPoliceReportTaken: false,
      waitingOnInformationToOrderPR: true,
      selectTreatmentNeeds: 'Physical Therapy, Orthopedic Consultation',
      
      // Financial & Insurance
      estimatedMedicalBills: '$25,000',
      insuranceType: {
        none: false,
        medicaid: false,
        medicare: false,
        tricare: false,
        private: true
      },
      otherInsuranceType: '',
      
      // Wage Loss Details
      wageLoss: 'Yes',
      missedDays: '15',
      totalMissedDays: '30',
      hoursWorkedDays: '40 / 5',
      totalWageLoss: '$4,500',
      paidForMissedTime: 'No',
      contactEmployer: 'Ok',
      employerName: 'ABC Manufacturing',
      employerCity: 'Springfield',
      employerState: 'Missouri',
      employerZipCode: '65801',
      employerEmail: 'hr@abcmanufacturing.com',
      
      // Crash & Injury Details
      otherInnocentInjuredParties: 'None - single vehicle accident',
      crashDetails: 'Client was rear-ended while stopped at red light. Other driver failed to stop in time.',
      crashInjuriesFromCrash: 'Whiplash, lower back pain, headaches, right shoulder injury',
      priorInjuries: 'Minor back strain from 2019 work injury - fully recovered',
      highValuePolicy: true,
      severeInjury: false,
      
      // TBI Symptoms
      adultTBIHeadache: true,
      adultTBINausea: true,
      adultTBISeizures: false,
      childTBIHeadache: false,
      childTBINausea: false,
      childTBISeizures: false,
      
      // Checkboxes
      doNotSendAutomatedTexts: false
    },
    insuranceSections: [insuranceSectionData],
  },
};
