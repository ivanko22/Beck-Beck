import React from 'react';
import { Header } from '../../components/header/Header';
import { Navigation } from '../../components/navigation/Navigation';
import { ClientInsuranceRelativeSection } from './ClientInsuranceRelativeSection';
import { MedicalTreatmentSection } from './sections/MedicalTreatmentSection';
import { ClientInformationSection } from './sections/ClientInformationSection';
import { CaseOverviewSection } from './sections/CaseOverviewSection';
import { MedicalBillsHealthInsuranceSection } from './sections/MedicalBillsHealthInsuranceSection';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { CrashInjuryDetailsSection } from './sections/CrashInjuryDetailsSection';
import { TraumaticBrainInjurySection } from './sections/TraumaticBrainInjurySection';
import { PageActions } from '../../components/page-actions/PageActions';

interface InsuranceSection {
  sectionTitle: string;
  formData: any;
}
interface ClientDetailsPageProps {
  caseNumber?: string;
  clientName?: string;
  pageActionsState?: 'save' | 'saved' | 'edit';
  liabilityInsuranceSections?: InsuranceSection[];
  formData?: any;
}

export const ClientDetailsPage: React.FC<ClientDetailsPageProps> = ({
  caseNumber,
  pageActionsState = 'save',
  formData = {},
  clientName,
  liabilityInsuranceSections = [],
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
            state={pageActionsState}
            type={'button'}
            onSave={() => {}}
            onEdit={() => {}}
            onRemove={() => {}}
          />

        </Wrapper>

        {liabilityInsuranceSections.map((section, index) => (
            <ClientInsuranceRelativeSection
              type="liability"
              key={`liability-${index}-${section.sectionTitle}`}
              caseNumber={caseNumber}
              clientName={clientName}
              pageActionsState={'save'}
              formData={section.formData}
              sectionTitle={section.sectionTitle}
            />
          ))}

      </Wrapper>
    </Wrapper>
  );
};
