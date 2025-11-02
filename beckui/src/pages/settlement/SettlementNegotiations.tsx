import React from 'react';
import { Header } from '../../components/header/Header';
import { Navigation } from '../../components/navigation/Navigation';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { Spacer } from '../../components/spacer/Spacer';
import { Button } from '../../components/button/Button';
import {  PlusIcon } from '../../components/icons/index';
import { SettlementNegotiationsCard } from './SettlementNegotiationsCard';
import { TableHeader } from '../../components/table/TableHeader';

interface NegotiationCase {
  id: string;
  caseNumber: string;
  insuranceCompany: string;
  clientInfo: {
    name: string;
    primaryPhone: string;
    momsPhone: string;
    email: string;
    note?: string;
  };
  status?: {
    text: string;
  };
  policyLimitsAvailable?: string;
  demandSentDate: string;
  adjusterEmail: string;
  demandsOffers: Array<{
    id: string;
    amount: string;
    date: string;
    sent?: boolean;
  }>;
  insuranceOffer: Array<{
    id: string;
    amount: string;
    date: string;
    received?: boolean;
  }>;
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
  showFiltersModal?: boolean;
  type?: 'negotiations' | 'statement';
}

export const SettlementNegotiations: React.FC<SettlementNegotiationsProps> = ({
  cases = [],
  type,
  showFiltersModal = false,
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
          type="settlementNegotiations"
          rightButtonLabel="Add New Negotiation"
          onClose={() => {}}
        />

        <Wrapper type="contentWrapper" style={{ marginTop: 60, width: 'fit-content', gap: 0 }}>
          <Spacer customSize={20} />

          {(type === 'statement' && (
            <TableHeader
              columns={[
                { label: 'Status / Case Number', width: '228px' },
                { label: 'Client Info', width: '218px' },
                { label: 'Policy Limit(s) Available', width: '224px' },
                { label: 'Insurance Company Demand Sent To', width: '253px' },
                { label: 'Demand Sent Date', width: '138px' },
                { label: 'Adjuster Email Address', width: '244px' },
                { label: 'Demand and Counter Demand Amount', width: '174px' },
                { label: 'Insurance Offer(s)', width: '160px' },
                { label: 'Negotiation Notes', width: '366px' },
                { label: 'Accepted Settlement', width: '230px' },
                { label: 'Settlement Release Received', width: '214px' },
                { label: 'Release Sent to Client?', width: '196px' },
                { label: 'Release Signed, Received & Sent to Adjuster', width: '200px' },
                { label: 'Check Received?', width: '214px' },
                { label: 'Misc. Notes', width: '440px' },
              ]}
              noBorder
              useSpecificWidths={true}
              style={{ paddingLeft: 32, gap: 30, marginBottom: 20 }}
              filterType='settlementNegotiations'
              showFiltersModal={showFiltersModal}
            /> 
          ))}

          {cases.map((caseData) => (
            <Wrapper key={caseData.id} type="column" style={{ marginBottom: 10, gap: 0 }}>
              <SettlementNegotiationsCard 
                type={type}
                negotiationData={{
                  ...caseData,
                  clientName: caseData.clientInfo.name,
                  primaryPhone: caseData.clientInfo.primaryPhone,
                  momsPhone: caseData.clientInfo.momsPhone,
                  email: caseData.clientInfo.email,
                  note: caseData.clientInfo.note || '',
                  status: caseData.status,
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
