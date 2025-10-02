import React from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { ClientInsuranceRelativeSection } from './ClientInsuranceRelativeSection';

const L = {
  shell: {
    display: 'block',
    fontFamily: 'var(--font-family-base)',
    color: 'var(--primary-color)',
    background: '#fff',
  } as React.CSSProperties,

  main: {
    display: 'flex',
    width: 'calc(100vw - 300px)',
    flexDirection: 'column',
    marginLeft: 300,
    boxSizing: 'border-box',
  } as React.CSSProperties,

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
}

export const ClientDetailsPage: React.FC<ClientDetailsPageProps> = ({
  caseNumber,
  clientName,
  insuranceSections = [],
  pageActionsState = 'save',
}) => {

  return (
    <div style={{ ...L.shell }}>
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
      />

      <div style={L.main}>
        <Header
          section={`Client Details`}
          current={caseNumber}
          type="clientDetails"
          onClose={() => {}}
        />

        <div style={L.mainContent}>
          {insuranceSections.map((section, index) => (
            <ClientInsuranceRelativeSection
              key={index}
              caseNumber={caseNumber}
              clientName={clientName}
              pageActionsState={pageActionsState}
              formData={section.formData}
              sectionTitle={section.sectionTitle}
            />
          ))}
        </div>

      </div>
      
    </div>
  );
};
