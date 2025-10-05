import React from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
// import { ClientInsuranceRelativeSection } from './ClientInsuranceRelativeSection';
import { MedicalTreatmentSection } from './clientDetails/sections/MedicalTreatmentSection';
import { ClientInformationSection } from './clientDetails/sections/ClientInformationSection';
import { CaseOverviewSection } from './clientDetails/sections/CaseOverviewSection';
import { MedicalBillsHealthInsuranceSection } from './clientDetails/sections/MedicalBillsHealthInsuranceSection';
import { Wrapper } from '../components/wrapper/PageWrapper';
import { CrashInjuryDetailsSection } from './clientDetails/sections/CrashInjuryDetailsSection';
import { TraumaticBrainInjurySection } from './clientDetails/sections/TraumaticBrainInjurySection';
import { PageActions } from '../components/page-actions/PageActions';
interface InsuranceSection {
  sectionTitle: string;
  formData: any;
}
interface ClientDetailsPageProps {
  caseNumber?: string;
  clientName?: string;
  pageActionsState?: 'save' | 'saved' | 'edit';
  relativeInsuranceSections?: InsuranceSection[];
  formData?: any;
}

export const ClientDetailsPage: React.FC<ClientDetailsPageProps> = ({
  caseNumber,
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
          <CrashInjuryDetailsSection formData={formData} />
          <TraumaticBrainInjurySection formData={formData} />

          <PageActions
            type={pageActionsState}
            onSave={() => {}}
            onEdit={() => {}}
            onRemove={() => {}}
          />
        </Wrapper>

        {/* <PageActions
          type={pageActionsState}
          onSave={() => {}}
          onEdit={() => {}}
          onRemove={() => {}}
        /> */}

        {/* in progress */
        /* {LiabilityInsuranceSections.map((section, index) => (
            <ClientInsuranceRelativeSection
              type="relative"
              key={index}
              caseNumber={caseNumber}
              clientName={clientName}
              pageActionsState={pageActionsState}
              formData={section.formData}
              sectionTitle={section.sectionTitle}
            />
          ))} */}

      </Wrapper>
      
    </Wrapper>
  );
};
