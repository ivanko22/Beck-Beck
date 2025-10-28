import React, { useState, useEffect } from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { TableHeader } from '../../components/table/TableHeader';
import { ClientDashboardCard, ClientDashboardCase } from './ClientDashboardCard';
import { Header } from '../../components/header/Header';
import { Chips } from '../../components/chips/Chips';
import { Spacer } from '../../components/spacer/Spacer';

export const ClientDashboard: React.FC<{ 
  cases: ClientDashboardCase[],
  showFiltersModal?: boolean,
  appliedFilters?: any,
}> = ({
  cases = [],
  showFiltersModal = false,
  appliedFilters,
}) => {
  const [openRowId, setOpenRowId] = useState<string | null>(null);
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(showFiltersModal);
  
  useEffect(() => {
    setIsFiltersModalOpen(showFiltersModal);
  }, [showFiltersModal]);

  const [activeFilters, setActiveFilters] = useState<Array<{label: string, phase: string}>>(() => {
    if (!appliedFilters) return [];
    const filters: Array<{label: string, phase: string}> = [];
    
    Object.entries(appliedFilters).forEach(([phase, phaseData]) => {
      if (Array.isArray(phaseData)) {
        phaseData.forEach((label) => {
          filters.push({ label, phase });
        });
      }
    });
    
    return filters;
  });

  const getFilterColor = (phase: string): 'purple' | 'secondary' | 'orange' | 'green' | 'yellow' | 'blue' | 'red' | 'gray' => {
    const phaseMap: Record<string, 'purple' | 'secondary' | 'orange' | 'green' | 'yellow' | 'blue' | 'red' | 'gray'> = {
      phase1: 'blue',
      phase2: 'yellow',
      phase3: 'secondary',
      phase4: 'purple',
      phase5: 'orange',
      phase6: 'green',
    };    

    return phaseMap[phase] || 'gray';
  };

  const handleToggleRow = (caseId: string) => {
    setOpenRowId(openRowId === caseId ? null : caseId);
  };

  const handleRemoveFilter = (label: string, phase: string) => {
    setActiveFilters(activeFilters.filter(f => !(f.label === label && f.phase === phase)));
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
          teams={['Team 1', 'Team 2', 'Team 3', 'Team 4']}
          showFiltersModal={isFiltersModalOpen}
          onShowFiltersModalChange={setIsFiltersModalOpen}
        />

        <Wrapper type="contentWrapper" style={{ width: 'fit-content', gap: 0, marginTop: 50 }}>

          {activeFilters.length > 0 && (
            <>
            <Spacer customSize={30} />

            <Wrapper type="row" style={{ gap: 12,  flexWrap: 'wrap' }}>
              {activeFilters.map((filter) => (
                <Chips
                  key={`${filter.phase}-${filter.label}`}
                  label={filter.label}
                  color={getFilterColor(filter.phase)}
                  onClose={() => handleRemoveFilter(filter.label, filter.phase)}
                />
              ))}
            </Wrapper>
            </>
          )}

          <TableHeader
            columns={[
              { label: 'Status / Case Number', width: '228px' },
              { label: 'Client Name', width: '190px' },
              { label: 'Case Plan', width: '156px' },
              { label: 'Big Policy?', width: '48px' },
              { label: 'Big Injury?', width: '65px', style: { paddingRight: 12 } },
              { label: 'Injury Description', width: '156px' },
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
              { label: <>Demand Sent /<br/>Status</>, width: '148px' },
              { label: <>Settlement<br/>Accepted/Release<br/>Requested?</> , width: '127px' },
              { label: <>Check<br/>Received</>, width: '120px' },
              { label: '', width: '32px' },
            ]}
            useSpecificWidths={true}
            style={{ paddingLeft: 30, gap: 20, marginBottom: 26 }}
            noBorder
            onFiltersClick={() => setIsFiltersModalOpen(true)}
          />

          {cases.map((caseData, index) => (
            <Wrapper key={`case-${caseData.id}-${index}`} type="column" style={{ marginBottom: 10, gap: 0 }}>
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
