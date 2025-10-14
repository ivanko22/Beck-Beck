import React from 'react';
import { Header } from '../../components/header/Header';
import { Navigation } from '../../components/navigation/Navigation';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { Spacer } from '../../components/spacer/Spacer';
import { Button } from '../../components/button/Button';
import {  PlusIcon } from '../../components/icons/index';
import { SettlementNegotiationsCard } from './SettlementNegotiationsCard';

interface ClientInfo {
  name: string;
  primaryPhone: string;
  momsPhone: string;
  email: string;
  note?: string;
}

interface DemandOffer {
  id: string;
  type: 'demand' | 'offer';
  amount: string;
  date: string;
  sent?: boolean;
}

interface InsuranceOffer {
  id: string;
  amount: string;
  date: string;
  received?: boolean;
}

interface NegotiationCase {
  id: string;
  caseNumber: string;
  insuranceCompany: string;
  clientInfo: ClientInfo;
  policyLimitsAvailable?: string;
  demandSentDate: string;
  adjusterEmail: string;
  demandsOffers: DemandOffer[];
  insuranceOffer: InsuranceOffer[];
  negotiationNotes: string[];
  settlementAccepted?: {
    accepted: boolean;
    date: string;
  };
  settlementReleaseReceived?: {
    received: boolean;
    date?: string;
  };
  releaseSentToClient?: {
    date: string;
    sentBySnailMail: boolean;
    sentElectronically: boolean;
  };
  releaseSignedReceived?: {
    adjusterEmail: string;
    date: string;
    signedDate: string;
  };
  checkReceived?: {
    received: boolean;
    date?: string;
  };
  miscNotes: string;
}

interface SettlementNegotiationsProps {
  cases: NegotiationCase[];
}

export const SettlementNegotiations: React.FC<SettlementNegotiationsProps> = ({
  cases = []
}) => {
  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
        activeItem="settlement"
      />

      <Wrapper type="mainWrapper">
        <Header
          section="Settlement Negotiations"
          current=""
          rightButton={true}
          rightButtonLabel="Add New Negotiation"
          onClose={() => {}}
        />

        <Wrapper type="contentWrapper" style={{ marginTop: 60, width: 'fit-content' }}>
          <Spacer customSize={20} />

          {cases.map((caseData) => (
            <Wrapper key={caseData.id} type="column" style={{ marginBottom: 10 }}>
              <SettlementNegotiationsCard 
                negotiationData={{
                  ...caseData,
                  clientName: caseData.clientInfo.name,
                  primaryPhone: caseData.clientInfo.primaryPhone,
                  momsPhone: caseData.clientInfo.momsPhone,
                  email: caseData.clientInfo.email,
                  note: caseData.clientInfo.note || '',
                }} 
              />
            </Wrapper>
          ))}

          <Wrapper type="row" style={{ justifyContent: 'flex-start', marginTop: 20 }}>
            <Button
              label="Add New Negotiations"
              icon={<PlusIcon size={20} />}
              size="medium"
              onClick={() => {}}
            />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
