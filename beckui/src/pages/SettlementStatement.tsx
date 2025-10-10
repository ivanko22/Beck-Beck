import React, { useState } from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { Wrapper } from '../components/wrapper/PageWrapper';
import { Spacer } from '../components/spacer/Spacer';
import { ActionCardsSection } from './settlement/ActionCardsSection';
import { Checkbox } from '../components/checkbox/Checkbox';
import { SettlementCard } from './settlement/SettlementCard';

interface SettlementStatementPageProps {
  caseNumber?: string;
  clientName?: string;
  claim?: string;
  pageActionsState?: 'save' | 'saved' | 'edit';
  settlementCards?: any[];
  hospitalCards?: any[];
}

export const SettlementStatementPage: React.FC<SettlementStatementPageProps> = ({
  caseNumber,
  settlementCards,
  hospitalCards,
}) => {
  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
        activeItem="settlement-statement"
      />

      <Wrapper type="mainWrapper" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header
          section="Settlement Statement"
          current={caseNumber}
          onClose={() => {}}
        />

        <Wrapper type="contentWrapper" style={{ marginTop: 60}}>
          <Spacer customSize={12} />

          <Wrapper type="pageWrapperContentRow" style={{ paddingLeft: 20 }}>
            <Checkbox
              label="I have read and agree to the agreements"
              onChange={() => {}}
            />
          </Wrapper>

          <ActionCardsSection />

          <Wrapper type="pageWrapperContentRow" style={{ gap: 24 }}>
            {(settlementCards || []).map((item, index) => (        
              <SettlementCard 
                key={index}
                style={{ flex: 1 }} 
                formData={item}
              />
            ))}
          </Wrapper>

          <Wrapper type="pageWrapperContentRow" style={{ gap: 24, marginTop: 24 }}>
            {(hospitalCards || []).map((item, index) => (        
              <SettlementCard 
                key={`hospital-${index}`}
                style={{ flex: 1 }} 
                formData={item}
              />
            ))}
          </Wrapper>

        </Wrapper>

        </Wrapper>
      </Wrapper>
  );
};
