import React from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { InsuranceRow } from '../components/row/insurance/InsuranceRow';
import { TableHeader } from '../components/table/TableHeader';
import { Button } from '../components/button/Button';
import { PlusIcon } from '../components/icons/index';
import { PageWrapper } from '../components/wrapper/PageWrapper';

export interface InsuranceCompany {
  id: number;
  companyName: string;
  mailAddress: string;
  fax: string;
  email: string;
  state: 'adding' | 'edit' | 'save' | 'saved';
}

export interface AutoInsuranceCompaniesProps {
  companies?: InsuranceCompany[];
  style?: React.CSSProperties;
  state?: 'adding' | 'edit' | 'save' | 'saved';
}

const L = {
  shell: {
    display: 'block',
    fontFamily: 'var(--font-family-base)',
    color: 'var(--primary-color)',
    height: '100vh',
    background: '#fff',
  } as React.CSSProperties,

  main: {
    display: 'flex',
    width: 'calc(100vw - 300px)',
    height: '100vh',
    flexDirection: 'column',
    marginLeft: 300,
    boxSizing: 'border-box',
    overflow: 'auto',
  } as React.CSSProperties,

  table: {
    borderCollapse: 'collapse' as const,
    marginTop: 8,
    marginBottom: 40,
  },
};

export const AutoInsuranceCompanies: React.FC<AutoInsuranceCompaniesProps> = ({
  companies = [],
  state = 'saved',
}) => {
  return (
    <div style={L.shell}>
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
      />

      <div style={L.main}>
        <Header
          section="Auto Insurance Companies"
          current=""
        />

        <PageWrapper type="contentWrapper">
          <TableHeader
            columns={[{
              label: 'Company Name', 
              style: { marginLeft: '17px'}}, 
              { label: 'Mail Address', style: { marginLeft: '17px' }}, 
              { label: 'Fax', style: { marginLeft: '17px' }}, 
              { label: 'Email', style: { marginLeft: '17px' }}, 
            ]}
            template="2.7fr 2.5fr 1fr 2fr 40px"
            activeColumn={0}
            noBorder={true}
          />

          {companies.map((company) => (
            <InsuranceRow
              key={company.id}
              companyName={company.companyName}
              mailAddress={company.mailAddress}
              fax={company.fax}
              email={company.email}
              state={company.state}
            />
          ))}

          {state === 'saved' &&
            <Button
              label="Add Insurance Company"
              size='small'
              color='var(--middle-grey)'
              icon= {<PlusIcon size={22}/>}
              iconPosition= 'left'
              onClick={() => {}}
            />}
          </PageWrapper>

        </div>
      
    </div>
  );
};
