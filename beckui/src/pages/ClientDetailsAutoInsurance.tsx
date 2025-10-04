import React from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { ClientInsuranceRelativeSection } from './ClientInsuranceRelativeSection';
import { Wrapper } from '../components/wrapper/PageWrapper';
import { Spacer } from '../components/spacer/Spacer';

const L = {
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '80px',
    padding: '28px 32px',
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
}

export const ClientDetailsPage: React.FC<ClientDetailsPageProps> = ({
  caseNumber,
  clientName,
  insuranceSections = [],
  relativeInsuranceSections = [],
  pageActionsState = 'save',
}) => {

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
          type="clientDetails"
          onClose={() => {}}
        />

        <Spacer customSize={50} />

        <div style={{...L.mainContent, ...{marginTop: '0px'}}}>
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
        </div>

        <div style={{...L.mainContent, ...{marginTop: '0px'}}}>
          {relativeInsuranceSections.map((section, index) => (
            <ClientInsuranceRelativeSection
              type="relative"
              key={index}
              caseNumber={caseNumber}
              clientName={clientName}
              pageActionsState={pageActionsState}
              formData={section.formData}
              sectionTitle={section.sectionTitle}
            />
          ))}
        </div>

      </Wrapper>
      
    </Wrapper>
  );
};
