import React from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { ClientInsuranceRelativeSection } from './ClientInsuranceRelativeSection';
import { MedicalTreatmentSection } from './clientDetails/sections/MedicalTreatmentSection';
import { ClientInformationSection } from './clientDetails/sections/ClientInformationSection';
import { CaseOverviewSection } from './clientDetails/sections/CaseOverviewSection';
import { MedicalBillsHealthInsuranceSection } from './clientDetails/sections/MedicalBillsHealthInsuranceSection';
import { Wrapper } from '../components/wrapper/PageWrapper';

const L = {
  InputsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 10,
  } as React.CSSProperties,

  InputsMedicalRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '40px',
  } as React.CSSProperties,

  InputsRadioRow: {
    display: 'flex',
    height: '60px',
    width: '660px', 
    justifyContent: 'flex-start', 
    gap: '40px', 
    alignItems: 'center'
  } as React.CSSProperties,

};

interface InsuranceSection {
  sectionTitle: string;
  formData: any;
}

interface ClientDetailsPageProps {
  caseNumber?: string;
  clientName?: string;
  style?: React.CSSProperties;
  pageActionsState?: 'save' | 'saved' | 'edit';
  insuranceSections?: InsuranceSection[];
  relativeInsuranceSections?: InsuranceSection[];
  formData?: {
    ongoingTreatment?: boolean;
    treatmentCompleted?: boolean;
    emergencyRoomVisit?: boolean;
    vehicleAmbulance1?: boolean;
    vehicleAmbulance2?: boolean;
    helicopterAirAmbulance1?: boolean;
    helicopterAirAmbulance2?: boolean;
    // Medical Bills & Health Insurance
    estimatedMedicalBills?: string;
    insuranceType?: {
      none?: boolean;
      medicaid?: boolean;
      medicare?: boolean;
      tricare?: boolean;
      private?: boolean;
    };
    otherInsuranceType?: string;
    wageLoss?: 'Yes' | 'No';
    missedDays?: string;
    totalMissedDays?: string;
    hoursWorkedDays?: string;
    totalWageLoss?: string;
    paidForMissedTime?: 'Yes' | 'No';
    contactEmployer?: 'Ok' | 'Not Ok';
    employerName?: string;
    employerCity?: string;
    employerState?: string;
    employerZipCode?: string;
    employerEmail?: string;
    otherInnocentInjuredParties?: string;
    sendBigPackage?: {
      text?: boolean;
      email?: boolean;
      snailMail?: boolean;
    };
    [key: string]: any;
  };
}

export const ClientDetailsPage: React.FC<ClientDetailsPageProps> = ({
  caseNumber,
  clientName,
  insuranceSections = [],
  pageActionsState = 'save',
  formData = {},
}) => {

  const progressPercent = 5.6;

  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
      />

      <Wrapper type="mainWrapper">
        <Header
          section={`Client Details`}
          current={caseNumber}
          onClose={() => {}}
        />

        <Wrapper type="contentWrapper">

          <CaseOverviewSection formData={formData} progressPercent={progressPercent} />
          <ClientInformationSection formData={formData} />
          <MedicalTreatmentSection formData={formData} />
          
          <MedicalBillsHealthInsuranceSection formData={formData} />

        </Wrapper>

        {insuranceSections.map((section, index) => (
          <ClientInsuranceRelativeSection
            type="insurance"
            key={index}
            caseNumber={caseNumber}
            clientName={clientName}
            pageActionsState={pageActionsState}
            formData={section.formData}
            sectionTitle={section.sectionTitle}
          />
        ))}

      </Wrapper>
    </Wrapper>
  );
};
