import React from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { BaseDropdown } from '../components/dropdown/Dropdown';
import { Input } from '../components/input/Inputs';
import { Checkbox } from '../components/checkbox/Checkbox';
import { Radio } from '../components/radiobutton/Radiobutton';
import { Button } from '../components/button/Button';
import { ClientDetailsTableHeader } from '../components/table/ClientDetailsTableHeader';
import { PlusIcon, EmailIcon } from '../components/icons/index';

export interface ClientDetailsPageProps {
  caseNumber?: string;
  clientName?: string;
  style?: React.CSSProperties;
  state?: 'adding' | 'edit' | 'save' | 'saved';
  formData?: {
    insuranceCompany?: string;
    insuranceAddress?: string;
    clientName?: string;
    policyHolderName?: string;
    claimNumber?: string;
    policyNumber?: string;
    mainInsPhone?: string;
    hasOwnPolicy?: boolean;
    demandLetterSent?: boolean;
    biAdjusterName?: string;
    biAdjusterPhone?: string;
    biAdjusterFax?: string;
    biAdjusterEmail?: string;
    medPayAdjusterName?: string;
    medPayAdjusterPhone?: string;
    medPayAdjusterEmail?: string;
    medPayAdjusterFax?: string;
    emailOptions?: {
      liability?: boolean;
      medpay?: boolean;
      uim?: boolean;
      um?: boolean;
      excess?: boolean;
    };
  };
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
    padding: '28px 32px',
    marginLeft: 300,
    flex: 1,
    minWidth: 0,
    boxSizing: 'border-box',
    overflow: 'auto',
  } as React.CSSProperties,

  sectionTitle: {
    color: 'var(--middle-grey)',
    fontSize: 16,
    fontWeight: 500,
    marginTop: 32,
    marginBottom: 16,
  } as React.CSSProperties,

  grid: {
    display: 'grid',
    gridTemplateColumns: '45% 55%',
    gap: 20,
    marginTop: 40,
    marginBottom: 20,
  } as React.CSSProperties,

  leftColumn: {
    display: 'flex',
    minWidth: '530px',
    flexDirection: 'column' as const,
    alignItems: 'flex-end',
    gap: 30,
    marginBottom: 20,
  } as React.CSSProperties,

  rightColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    paddingTop: '178px',
    gap: 20,
    marginBottom: 20,
    paddingLeft: 30,
  } as React.CSSProperties,

  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
    marginBottom: 8,
  } as React.CSSProperties,

  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    marginTop: 12,
    marginBottom: 12,
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,

  controlGroup: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column' as const,
    gap: 12,
    marginTop: 16,
    marginBottom: 16,
  } as React.CSSProperties,

  radioRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row' as const,
    gap: 20,
    marginBottom: 12,
  } as React.CSSProperties,

  radioTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: 'var(--dark-grey)',
  } as React.CSSProperties,

  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    gap: 12,
    marginTop: 16,
    marginBottom: 16,
    border: '1px solid var(--light-grey)',
    borderRadius: '6px',
    padding: '14px 10px 14px 24px',
  } as React.CSSProperties,

  checkboxGroupRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
    marginTop: 16,
    marginBottom: 16,
  } as React.CSSProperties,

  checkboxGroupBorder: {
    display: 'flex',
    flexDirection: 'row' as const,
    gap: 28,
  } as React.CSSProperties,

};

export const ClientDetailsPage: React.FC<ClientDetailsPageProps> = ({
  caseNumber = 'Case #2025-0001',
  clientName = '',
  state = 'saved',
  style,
  formData,
}) => {
  const insuranceCompanies = [
    { label: 'State Farm' },
    { label: 'Allstate' },
    { label: 'Progressive' },
    { label: 'Geico' },
    { label: 'Farmers' },
  ];

  const isFilled = state === 'saved' && clientName;

  return (
    <div style={{ ...L.shell, ...style }}>
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
      />

      <div style={L.main}>
        <Header
          section={`Client Details`}
          current={caseNumber}
          subtitle=""
          onClose={() => {}}
        />

        <ClientDetailsTableHeader
          title="Client Insurance Company #1"
          buttonLabel="Add Another Client Insurance Co Section"
          buttonIcon={<PlusIcon size={16}/>}
          onButtonClick={() => {}}
        />

        <div style={L.grid}>
          <div style={L.leftColumn}>
            <BaseDropdown
              label="Insurance Company"
              noBorder={isFilled ? true : undefined}
              disabled={isFilled ? true : undefined}
              type="BaseDropdown"
              state={formData?.insuranceCompany ? 'selected' : 'default'}
              value={formData?.insuranceCompany || 'Select Insurance Company'}
              menuItems={insuranceCompanies}
              onSelect={() => {}}
              style={{ width: '238px' }}
            />

            <Input
              leftLabel={true}
              label="Insurance Company Address"
              placeholder="Insurance Company Address"
              value={formData?.insuranceAddress || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="Our Client's Name"
              placeholder="Our Client's Name"
              value={formData?.clientName || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="Policy Holder Name"
              placeholder="Policy Holder Name"
              value={formData?.policyHolderName || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="Claim #"
              placeholder="Claim #"
              value={formData?.claimNumber || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="Policy Number"
              placeholder="Policy Number"
              value={formData?.policyNumber || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="Main Ins. Phone"
              placeholder="Main Ins. Phone"
              value={formData?.mainInsPhone || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="BI Adjuster Name"
              placeholder="BI Adjuster Name"
              value={formData?.biAdjusterName || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="BI Adjuster Phone"
              placeholder="BI Adjuster Phone"
              value={formData?.biAdjusterPhone || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="BI Adjuster Fax"
              placeholder="BI Adjuster Fax"
              value={formData?.biAdjusterFax || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="BI Adjuster Email"
              placeholder="BI Adjuster Email"
              value={formData?.biAdjusterEmail || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="MedPay Adjuster Name"
              placeholder="MedPay Adjuster Name"
              value={formData?.medPayAdjusterName || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="MedPay Adjuster Phone"
              placeholder="MedPay Adjuster Phone"
              value={formData?.medPayAdjusterPhone || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="MedPay Adjuster Email"
              placeholder="MedPay Adjuster Email"
              value={formData?.medPayAdjusterEmail || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="MedPay Adjuster Fax"
              placeholder="MedPay Adjuster Fax"
              value={formData?.medPayAdjusterFax || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />
            
          </div>

          <div style={L.rightColumn}>
            <div style={L.controlGroup}>
              <span style={L.radioTitle}>Does Client Have Own Policy?</span>
              
              <div style={L.radioRow}>
                <Radio
                  label="Yes"
                  checked={!formData?.hasOwnPolicy || false}
                  onChange={() => {}}
                  disabled={isFilled ? true : undefined}
                />
                <Radio
                  label="No"
                  checked={!formData?.hasOwnPolicy}
                  onChange={() => {}}
                  disabled={isFilled ? true : undefined}
                />

                <div style={{ marginLeft: '-11px' }}>
                  <Button
                    icon={<PlusIcon size={16}/>}
                    iconPosition="left"
                    size="medium"
                    label="Add Second Client Insurance Co Section"
                    onClick={() => {console.log('add second client insurance co section')}}
                  />
                </div>
              </div>
     
            </div>

            <div style={{...L.controlGroup, ...{paddingTop: 38, marginLeft: '-21px'}}}>
              <div style={L.radioRow}>
                <Button
                  icon={<EmailIcon size={22}/>}
                  iconPosition="left"
                  size="medium"
                  label="Email Demand Letter"
                  onClick={() => {console.log('email demand letter')}}
                />

                <Checkbox
                  label="Demand Letter has been Sent"
                  checked={formData?.demandLetterSent || false}
                  onChange={() => {}}
                  disabled={isFilled ? true : undefined}
                />
              </div>
            </div>

            <div style={{...L.controlGroup, ...{paddingTop: 230, marginLeft: '-21px'}}}>
              <div style={{...L.checkboxGroupBorder}}>
                <div style={{display: 'flex', alignItems: 'flex-start', paddingTop: 32}}>
                  <Button
                    icon={<EmailIcon size={22}/>}
                    iconPosition="left"
                    size="medium"
                    label="Email Adjuster"
                    onClick={() => {console.log('email demand letter')}}
                  />
                </div>

                <div style={L.checkboxGroup}>
                  <div style={L.checkboxGroupRow}>
                    <Checkbox
                      label="Liability"
                      checked={formData?.emailOptions?.liability || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                    <Checkbox
                      label="Medpay"
                      checked={formData?.emailOptions?.medpay || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                    <Checkbox
                      label="UIM"
                      checked={formData?.emailOptions?.uim || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                  </div>

                  <div style={L.checkboxGroupRow}>
                    <Checkbox
                      label="UM"
                      checked={formData?.emailOptions?.um || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                    <Checkbox
                      label="Excess / Umbrella"
                      checked={formData?.emailOptions?.excess || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                  </div>

                  <div style={{ marginLeft: '-17px' }}>
                    <Button
                      icon={<EmailIcon size={22}/>}
                      iconPosition="left"
                      size="medium"
                      label="Email Letter of Representation / Lien Letter"
                      onClick={() => {console.log('email demand letter')}}
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
 
      </div>
    </div>
  );
};

