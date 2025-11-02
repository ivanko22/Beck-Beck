import React from 'react';
import { Header } from '../../components/header/Header';
import { Navigation } from '../../components/navigation/Navigation';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { Spacer } from '../../components/spacer/Spacer';
import { ActionCardsSection } from './ActionCardsSection';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { SettlementCard } from './SettlementCard';
import { Typography } from '../../components/typography/Typography';
import { InfoIcon } from '../../components/icons/InfoIcon';

interface SettlementStatementPageProps {
  clientName?: string;
  primaryPhone?: string;
  claim?: string;
  pageActionsState?: 'save' | 'saved' | 'edit';
  settlementCards?: any[];
  hospitalCards?: any[];
}

export const SettlementStatementPage: React.FC<SettlementStatementPageProps> = ({
  settlementCards,
  hospitalCards,
  clientName,
  primaryPhone,
  claim,
}) => {
  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
        activeItem="settlement-statement"
      />

      <Wrapper type="mainWrapper" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header
          section="Settlement Statement"
          current={`Case #${claim}`}
          type="settlementStatement"
          clientNamePhone={[clientName, primaryPhone]}
          onClose={() => {}}
        />

        <Wrapper type="contentWrapper" style={{ marginTop: 60}}>
          <Spacer customSize={12} />

          <Wrapper type="row" style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', justifyContent: 'space-between' }}>
            <Checkbox
              label="I have read and agree to the agreements"
              onChange={() => {}}
            />
            <Wrapper type="row" style={{ gap: 10 }}>
              <InfoIcon size={20} color="var(--orange)" />
              <Typography variant="title15" color="var(--primary-color)">All MedPay is not collected</Typography>
            </Wrapper>
          </Wrapper>

          <ActionCardsSection />

          <Wrapper type="row" style={{ gap: 24 }}>
            {(settlementCards || []).map((item, index) => (        
              <SettlementCard 
                key={`settlement-${index}-${item.id || index}`}
                style={{ flex: 1 }} 
                formData={item}
              />
            ))}
          </Wrapper>

          <Wrapper type="row" style={{ gap: 24, marginTop: 24 }}>
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
