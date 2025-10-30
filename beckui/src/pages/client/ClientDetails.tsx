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
import { Spacer } from '../../components/spacer/Spacer';

interface InsuranceSection {
  sectionTitle: string;
  formData: any;
}
interface ClientDetailsPageProps {
  caseNumber?: string;
  clientName?: string;
  pageActionsState?: 'saved' | 'edit' | 'adding';
  liabilityInsuranceSections?: InsuranceSection[];
  formData?: any;
  type?: 'liabilityInsuranceSection';
}

export const ClientDetailsPage: React.FC<ClientDetailsPageProps> = ({
  caseNumber,
  pageActionsState = 'saved',
  formData = {},
  clientName,
  liabilityInsuranceSections = [],
  type,
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
      
      <Wrapper type="column" style={{ width: '100%', alignItems: 'center' }}>
        {type !== 'liabilityInsuranceSection' && (<Wrapper type="contentWrapper" style={{ maxWidth: 1500 }}>
          <CaseOverviewSection formData={formData} progressPercent={progressPercent} state={pageActionsState} />
          <ClientInformationSection formData={formData} state={pageActionsState} />
          <MedicalTreatmentSection formData={formData} state={pageActionsState} />
          <MedicalBillsHealthInsuranceSection formData={formData} state={pageActionsState} />
          <CrashInjuryDetailsSection formData={formData} state={pageActionsState} />
          <TraumaticBrainInjurySection formData={formData} state={pageActionsState} />

          <PageActions
            state={pageActionsState}
            type={'button'}
            onSave={() => {}}
            onEdit={() => {}}
            onRemove={() => {}}
          />
        </Wrapper>)}

        {type === 'liabilityInsuranceSection' && (<Spacer customSize={60} />)}

        {liabilityInsuranceSections.map((section, index) => (
          <ClientInsuranceRelativeSection
            type="liability"
            key={`liability-${index}-${section.sectionTitle}`}
            caseNumber={caseNumber}
            clientName={clientName}
            pageActionsState={'saved'}
            formData={section.formData}
            sectionTitle={section.sectionTitle}
          />
        ))}
      </Wrapper>

      </Wrapper>
    </Wrapper>
  );
};
