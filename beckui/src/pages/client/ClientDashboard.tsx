import React, { useState } from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { Typography } from '../../components/typography/Typography';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { Spacer } from '../../components/spacer/Spacer';
import { TableHeader } from '../../components/table/TableHeader';
import { ClientDashboardCard, ClientDashboardCase } from './ClientDashboardCard';
import { Header } from '../../components/header/Header';

export const ClientDashboard: React.FC<{ cases: ClientDashboardCase[] }> = ({
  cases = [],
}) => {
  const [openRowId, setOpenRowId] = useState<string | null>(null);

  const handleToggleRow = (caseId: string) => {
    setOpenRowId(openRowId === caseId ? null : caseId);
  };

  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
        activeItem="client-dashboard"
      />

      <Wrapper type="mainWrapper">
        <Header
          section={'Client Dashboard'}
          type="clientDashboard"
          rightButtonLabel="Add New Case"
          rightButton={true}
          teams={['Team 1', 'Team 2', 'Team 3', 'Team 4']}
        />
        
        <Wrapper type="contentWrapper" style={{ width: 'fit-content', gap: 0, marginTop: 50 }}>
          <TableHeader
            columns={[
              { label: 'Status / Case Number', width: '228px' },
              { label: 'Client Name', width: '190px' },
              { label: 'Case Plan', width: '167px' },
              { label: 'Big Policy?', width: '48px' },
              { label: 'Big Injury?', width: '65px' },
              { label: 'Injury Description', width: '158px' },
              { label: 'Client Status Details', width: '213px' },
              { label: 'LORs Sent', width: '153px' },
              { label: 'Med Recs Ordered', width: '185px' },
              { label: 'Liability Limits', width: '220px' },
              { label: <>Client's UIM<br/>Limits</>, width: '150px' },
              { label: <>Resident<br/>UM/UIM Limits</>, width: '122px' },
              { label: <>Is there any<br/>Medpay?</>, width: '93px' },
              { label: <>At Fault Driver<br/>has Other Policies?</>, width: '100px' },
              { label: <>Subro<br/>Setup?</>, width: '82px' },
              { label: 'Wage-Loss', width: '96px' },
              { label: <>Demand Sent /<br/>Status</>, width: '167px' },
              { label: <>Settlement<br/>Accepted/Release<br/>Requested?</> , width: '127px' },
              { label: <>Check<br/>Received</>, width: '120px' },
              { label: '', width: '32px' },
            ]}
            useSpecificWidths={true}
            style={{ paddingLeft: 70, gap: 20, marginBottom: 26 }}
            noBorder
          />

          {cases.map((caseData) => (
            <Wrapper key={caseData.id} type="column" style={{ marginBottom: 10, gap: 0 }}>
              <ClientDashboardCard
                caseData={caseData}
                isOpen={openRowId === caseData.id}
                onToggle={() => handleToggleRow(caseData.id)}
                />
            </Wrapper>
          ))}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
