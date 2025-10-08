import React from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { Wrapper } from '../components/wrapper/PageWrapper';
import { Typography } from '../components/typography/Typography';
import { Input } from '../components/input/Inputs';
import { Checkbox } from '../components/checkbox/Checkbox';
import { Button } from '../components/button/Button';
import { CheckmarkIcon } from '../components/icons';
import { LienTableRow } from '../components/table/LienTableRow';
import { PlusIcon } from '../components/icons';
import { Spacer } from '../components/spacer/Spacer';

interface LienTableRowData {
  medicalProvider: string;
  lienAmount: string;
  finalBalance: string;
  insurancePaid: string;
  notes: string;
  accountNumber: string;
  lienholderPhone: string;
  lienholderEmail: string;
  howToSend: 'email' | 'fax';
  productionRequestPercent: string;
  dateSent: string;
  reducedToAmount: string;
  insuranceType?: string;
  isGenerated?: boolean;
}

interface LienSheetPageProps {
  caseNumber?: string;
  clientName?: string;
  pageActionsState?: 'save' | 'saved' | 'edit';
  pageActionsType?: 'button' | 'iconButton';
  formData?: {
    phone?: string;
    dob?: string;
    last4SSN?: string;
    crashDate?: string;
    isCompleted?: boolean;
    insuranceType?: {
      medicaid?: boolean;
      medicare?: boolean;
      tricare?: boolean;
      privateHealthInsurance?: boolean;
    };
  };
  tableRows?: LienTableRowData[];
}

export const LienSheetPage: React.FC<LienSheetPageProps> = ({
  caseNumber,
  pageActionsState = 'save',
  clientName,
  formData = {},
  tableRows = [],
  pageActionsType = 'button',
}) => {


  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
      />

      <Wrapper type="mainWrapper">
        <Header
          section={`Lien Sheet`}
          current={caseNumber}
          onClose={() => {}}
        />

        <Wrapper type="contentWrapper" style={{position: 'fixed'}}>
          <Wrapper type="pageWrapperContentRow">
            <Typography variant="secondaryTitle" color="var(--primary-color)" style={{paddingRight: '30px'}}>
              {clientName}
            </Typography>

            <Wrapper type="pageWrapperContentRow" style={{alignItems: 'center'}}>
              <Input
                  label="Phone"
                  value={formData?.phone}
                  noBorder={true}
                  showLabel={true}
                  size="large"
                  disabled={pageActionsState === 'saved'}
                  style={{ gap: 0 }}
                  customSize={{ width: '170px' }}
                />
                <Input
                  label="DOB"
                  value={formData?.dob || '01/22/1993'}
                  noBorder={true}
                  showLabel={true}
                  disabled={pageActionsState === 'saved'}
                  style={{ gap: 0 }}
                  customSize={{ width: '150px' }}
                />
                
                <Input
                  label="Last 4 SSN"
                  value={formData?.last4SSN || '8976'}
                  noBorder={true}
                  showLabel={true}
                  disabled={pageActionsState === 'saved'}
                  style={{ gap: 0 }}
                  customSize={{ width: '120px' }}

                />
                
                <Input
                  label="Crash Date"
                  value={formData?.crashDate || '07/31/25'}
                  noBorder={true}
                  showLabel={true}
                  disabled={pageActionsState === 'saved'}
                  style={{ gap: 0 }}
                  customSize={{ width: '120px' }}
                />

                <Button
                  label="Mark Lien Sheet as Completed"
                  color="var(--warning)"
                  onClick={() => {}}
                  size="medium"
                  icon={<CheckmarkIcon size={20} color="var(--warning)" />}
                />
            </Wrapper>
          </Wrapper>

          <Wrapper type="pageWrapperContentRow" style={{gap: '40px', padding: '30px 0px 20px 0px'}}>
            <Checkbox
              label="Medicaid"
              checked={formData?.insuranceType?.medicaid || false}
              onChange={() => {}}
            />
            <Checkbox
              label="Medicare"
              checked={formData?.insuranceType?.medicare || false}
              onChange={() => {}}
            />
            <Checkbox
              label="Tricare"
              checked={formData?.insuranceType?.tricare || false}
              onChange={() => {}}
            />
            <Checkbox
              label="Private Health Insurance"
              checked={formData?.insuranceType?.privateHealthInsurance || false}
              onChange={() => {}}
            />
          </Wrapper>

  
        </Wrapper>

        <Wrapper type="contentWrapper" style={{ marginTop: 260}}>
          <Wrapper type="pageWrapperContentColumn" style={{gap: '0px'}}>
              {tableRows.map((rowData, index) => (
                <LienTableRow
                  key={index}
                  index={index}
                  state={pageActionsState === 'saved' ? 'saved' : 'edit'}
                  type={pageActionsType}
                  formData={rowData}
                  onDelete={() => {}}
                  onSave={() => {}}
                  disabled={pageActionsState === 'saved'}
                />
              ))}

              {tableRows.length === 0 && (
                <LienTableRow
                  index={0}
                  state={pageActionsState === 'saved' ? 'saved' : 'edit'}
                  type={pageActionsType}
                  onDelete={() => {}}
                  onSave={() => {}}
                  disabled={pageActionsState === 'saved'}
                  />
                )}

              {pageActionsState === 'saved' && (
                <>
                  <Spacer customSize={16} />
                  
                  <Button
                    label="Medical Provider"
                    size="medium"
                    icon={<PlusIcon size={20} />}
                    onClick={() => {}}
                  />
                </>
              )}

            </Wrapper>

        </Wrapper>

 
      </Wrapper>
    </Wrapper>
  );
};
