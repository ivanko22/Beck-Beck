import React, { useState } from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { Wrapper } from '../components/wrapper/PageWrapper';
import { Typography } from '../components/typography/Typography';
import { Input } from '../components/input/Inputs';
import { Checkbox } from '../components/checkbox/Checkbox';
import { Button } from '../components/button/Button';
import { RightArrowIcon, CheckmarkIcon, LetterIcon, EditIcon } from '../components/icons';
import { LienTableRow } from '../components/table/LienTableRow';
import { PlusIcon } from '../components/icons';
import { Spacer } from '../components/spacer/Spacer';
import { ClientDetailsTableHeader } from '../components/header/ClientDetailsTableHeader';
import { BaseDropdown } from '../components/dropdown/Dropdown';
import { RadioButtonGroup } from '../components/radiobutton/RadioButtonGroup';

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
  civilActionBill?: string;
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

  const civilActionBill = tableRows.reduce((total: number, row: LienTableRowData) => {
    const civilActionBill = parseFloat(row.civilActionBill?.replace(/[$,]/g, '') || '0');
    return total + civilActionBill;
  }, 0).toLocaleString();

  const totalLiens = tableRows.reduce((total: number, row: LienTableRowData) => {
    const lienAmount = parseFloat(row.lienAmount?.replace(/[$,]/g, '') || '0');
    return total + lienAmount;
  }, 0).toLocaleString();

  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
        activeItem="lien"
      />

      <Wrapper type="mainWrapper">
        <Header
          section={`Lien Sheet`}
          current={caseNumber}
          onClose={() => {}}
        />

        <Wrapper type="contentWrapper" style={{position: 'fixed', backgroundColor: 'var(--white)', zIndex: 100, width: '100%'}}>
          <Wrapper type="row">
            <Typography variant="secondaryTitle" color="var(--primary-color)" style={{paddingRight: '30px'}}>
              {clientName}
            </Typography>

            <Wrapper type="row" style={{alignItems: 'center'}}>
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

          <Wrapper type="row" style={{gap: '40px', padding: '30px 0px 20px 0px'}}>
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
          <Wrapper type="column" style={{gap: '0px'}}>
            <Spacer customSize={20} />

            {tableRows.map((rowData, index) => (
              <LienTableRow
                key={`lien-row-${index}-${rowData.medicalProvider || index}`}
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
                
                <Wrapper type="row">  
                  <Button
                    label="Medical Provider"
                    size="medium"
                    iconPosition="left"
                    icon={<PlusIcon size={20} />}
                    onClick={() => {}}
                  />
                </Wrapper>
                
                <Spacer customSize={16} />

                <Wrapper type="row" style={{gap: '16px'}}>
                  <Spacer horizontal customSize={95} />

                  <Wrapper type="column" style={{ gap: '24px', alignItems: 'flex-end' }}>
                    <Typography variant="titleSmall" color="var(--middle-grey)">
                      Total Liens: 
                    </Typography>

                    <Typography variant="sectionTitleSmall" color="var(--middle-grey)">
                      Civil Action Bill: 
                    </Typography>
                  </Wrapper>

                  <Wrapper type="column" style={{ gap: '12px', alignItems: 'flex-end' }}>
                      <Typography variant="sectionTitleSmall" style={{ fontWeight: 'bold', color: 'var(--primary-color)'}}>
                        ${totalLiens}
                      </Typography>
                    <Typography variant="sectionTitle" color="var(--primary-color)">${civilActionBill}</Typography>
                  </Wrapper>

                  <Spacer horizontal customSize={40} />

                  <Wrapper type="row" style={{ gap: 30, alignItems: 'flex-end' }}>
                    <Button
                      iconPosition="left"
                      label="Request Civil Action Payoff"
                      size="medium"
                      icon={<RightArrowIcon size={20} />}
                      onClick={() => {}}
                    />

                    <Wrapper type="column" style={{ gap: '16px', alignItems: 'flex-end' }}>
                      <Input
                        label="Requested Date"
                        value="8/01/25"
                        noBorder={true}
                        showLabel={true}
                        disabled={pageActionsState === 'saved'}
                        customSize={{ width: '80px' }}
                        style={{ gap: 0 }}
                      />
                    </Wrapper>
                  </Wrapper> 

                </Wrapper>
              </>
            )}
          </Wrapper>

            <Wrapper type="column">
              <Spacer horizontal customSize={1000} />

              <ClientDetailsTableHeader
                title="Loans"
              />

              <Wrapper type="row" style={{ gap: '40px', paddingTop: '20px' }}>
                <BaseDropdown
                  type="BaseDropdown"
                  label="Loan Company"
                  state="selected"
                  value="US Bank"
                  width="200px"
                  menuItems={[
                    { label: 'US Bank' },
                    { label: 'Wells Fargo' },
                    { label: 'Chase Bank' },
                    { label: 'Bank of America' },
                    { label: 'PNC Bank' }
                  ]}
                  onSelect={() => {}}
                />

                <Wrapper type="row" style={{ gap: '16px', alignItems: 'flex-end' }}>
                  <Input
                    value="$2,212"
                    label="Loan Amount"
                    disabled={pageActionsState === 'saved'}
                    customSize={{ width: '120px' }}
                  />
                  <Button
                    label="Request Loan Payoff"
                    size="medium"
                    icon={<RightArrowIcon size={20} />}
                    iconPosition="left"
                    onClick={() => {}}
                    customSize={"280px"}
                  />

                  <Wrapper type="column" style={{ gap: '16px', alignItems: 'flex-end' }}>
                    <Input
                      label="Requested Date"
                      value="8/01/25"
                      noBorder={true}
                      showLabel={true}
                      disabled={pageActionsState === 'saved'}
                      customSize={{ width: '80px' }}
                      style={{ gap: 0 }}
                    />
                    
                  </Wrapper>
                </Wrapper>
              </Wrapper>
              
            </Wrapper>


            <Wrapper type="column">
              <Spacer horizontal customSize={1000} />

              <ClientDetailsTableHeader
                title="Reduction Letter"
                subtitle="Generate and send reduction letters for all providers, grouped by insurance type. Choose delivery method below."
              />

              <Wrapper type="row" style={{ gap: '40px', paddingTop: '20px' }}>
                <RadioButtonGroup
                  title="How to Send"
                  name="how-to-send"
                  options={[
                    { label: "Email", value: "email" },
                    { label: "Fax", value: "fax" },
                  ]}
                  value="email"
                  onChange={() => {}}
                />

                <Wrapper type="column" style={{ gap: '7px', alignItems: 'flex-start' }}>
                  <Typography variant="titleSmall" style={{ paddingLeft: '17px' }}>
                    Generate & Sent Letter
                  </Typography>
                  
                  <Button
                    label="Generate Medicaid Letter"
                    size="medium"
                    icon={<LetterIcon size={22} />}
                    iconPosition="left"
                    onClick={() => {}}
                    customSize={"260px"}
                  />

                  <Input
                    label="Generated Date"
                    value="8/01/25"
                    noBorder={true}
                    showLabel={true}
                    disabled={pageActionsState === 'saved'}
                    customSize={{ width: '80px' }}
                    style={{ gap: 0, paddingLeft: '34px' }}
                    icon={<EditIcon size={18} color="var(--middle-grey)" />}
                  />

                </Wrapper>

                <Wrapper type="column" style={{ gap: '7px', alignItems: 'flex-start' }}>
                  <Spacer customSize={21} />
                  
                  <Button
                    label="Generate Medicare Letter"
                    size="medium"
                    icon={<LetterIcon size={22} />}
                    iconPosition="left"
                    onClick={() => {}}
                    customSize={"260px"}
                  />

                  <Input
                    label="Generated Date"
                    value="8/01/25"
                    noBorder={true}
                    showLabel={true}
                    disabled={pageActionsState === 'saved'}
                    customSize={{ width: '80px' }}
                    style={{ gap: 0, paddingLeft: '34px' }}
                    icon={<EditIcon size={18} color="var(--middle-grey)" />}
                  />

                </Wrapper>

                <Wrapper type="column" style={{ gap: '7px', alignItems: 'flex-start' }}>
                  <Spacer customSize={21} />
                  
                  <Button
                    label="Generate Private Insurance Letter"
                    size="medium"
                    icon={<LetterIcon size={22} />}
                    iconPosition="left"
                    onClick={() => {}}
                    customSize={"260px"}
                  />

                </Wrapper>
              </Wrapper>
              
            </Wrapper>
        </Wrapper>

        
      </Wrapper>
    </Wrapper>
  );
};
