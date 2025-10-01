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
import { Typography } from '../components/typography/Typography';
import { PageActions } from '../components/page-actions/PageActions';

export interface ClientDetailsPageProps {
  caseNumber?: string;
  clientName?: string;
  style?: React.CSSProperties;
  pageActionsState?: 'save' | 'saved' | 'edit';

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
    medPayLimit?: 'none' | '1k' | '5k' | '10k' | '2500' | '25k' | 'other';
    medPayLimitOther?: string;
    liabilityLimitsPerPerson?: string;
    uimLimitsPerPerson?: string;
    umLimitsPerPerson?: string;
    vehiclesOnPolicy?: string;
    totalUmStackedLimits?: string;
    umbrellaSecondaryLiabilityPolicy?: string;
    excessLiabilityCoverage?: string;
    notes?: string;
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
    marginTop: 40,
  } as React.CSSProperties,

  leftColumn: {
    display: 'flex',
    minWidth: '530px',
    flexDirection: 'column' as const,
    alignItems: 'flex-end',
    gap: 32,
  } as React.CSSProperties,

  rightColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    paddingTop: '206px',
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
    gap: 10,
    marginTop: 16,
    border: '1px solid var(--light-grey)',
    borderRadius: '6px',
    padding: '25px 10px 12px 25px',
  } as React.CSSProperties,

  checkboxGroupRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
    marginBottom: 12,
  } as React.CSSProperties,

  checkboxGroupBorder: {
    display: 'flex',
    marginTop: 12,
    flexDirection: 'row' as const,
    gap: 28,
  } as React.CSSProperties,

};

export const ClientDetailsPage: React.FC<ClientDetailsPageProps> = ({
  caseNumber,
  clientName,
  style,
  formData,
  pageActionsState = 'save',
}) => {
  const insuranceCompanies = [
    { label: 'State Farm' },
    { label: 'Allstate' },
    { label: 'Progressive' },
    { label: 'Geico' },
    { label: 'Farmers' },
  ];

  const isFilled = pageActionsState === 'saved' && clientName;

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
          type="clientDetails"
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
              leftLabel={true}
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
              placeholder=""
              value={formData?.insuranceAddress || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

          <Input
              leftLabel={true}
            label="Our Client's Name"
              placeholder=""
              value={formData?.clientName || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

          <Input
              leftLabel={true}
            label="Policy Holder Name"
              placeholder=""
              value={formData?.policyHolderName || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

          <Input
              leftLabel={true}
            label="Claim #"
              placeholder=""
              value={formData?.claimNumber || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

          <Input
              leftLabel={true}
            label="Policy Number"
              placeholder=""
              value={formData?.policyNumber || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

          <Input
              leftLabel={true}
            label="Main Ins. Phone"
              placeholder=""
              value={formData?.mainInsPhone || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

            <Input
              leftLabel={true}
              label="BI Adjuster Name"
              placeholder=""
              value={formData?.biAdjusterName || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="BI Adjuster Phone"
              placeholder=""
              value={formData?.biAdjusterPhone || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="BI Adjuster Fax"
              placeholder=""
              value={formData?.biAdjusterFax || ''}
            onChange={() => {}}
              noBorder={isFilled ? true : undefined}
          />

          <Input
              leftLabel={true}
              label="BI Adjuster Email"
              placeholder=""
              value={formData?.biAdjusterEmail || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

          <Input
              leftLabel={true}
              label="MedPay Adjuster Name"
              placeholder=""
              value={formData?.medPayAdjusterName || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

          <Input
              leftLabel={true}
              label="MedPay Adjuster Phone"
              placeholder=""
              value={formData?.medPayAdjusterPhone || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

            <Input
              leftLabel={true}
              label="MedPay Adjuster Email"
              placeholder=""
              value={formData?.medPayAdjusterEmail || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="MedPay Adjuster Fax"
              placeholder=""
              value={formData?.medPayAdjusterFax || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            {/* medpay limits section */}
            <div style={{...{display: 'flex', position: 'relative', left: '580px', minWidth: '980px', flexDirection: 'column', alignItems: 'center', width: '100%'}}}>
              <div style={L.radioRow}>
                <Typography variant="leftLabel">MedPay Limits</Typography>
                
                <div style={L.checkboxGroupBorder}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <Radio
                      label="None"
                      checked={formData?.medPayLimit === 'none' || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                    <Radio
                      label="$5k"
                      checked={formData?.medPayLimit === '5k' || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                  </div>
                  
                  <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <Radio
                      label="$1K"
                      checked={formData?.medPayLimit === '1k' || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                    <Radio
                      label="$10K"
                      checked={formData?.medPayLimit === '10k' || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                  </div>
                  
                  <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <Radio
                      label="$2,500"
                      checked={formData?.medPayLimit === '2500' || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                    <Radio
                      label="$25K"
                      checked={formData?.medPayLimit === '25k' || false}
                      onChange={() => {}}
                      disabled={isFilled ? true : undefined}
                    />
                  </div>

                  <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                      <Radio
                        label="Other"
                        checked={formData?.medPayLimit === 'other' || false}
                        onChange={() => {}}
                        disabled={isFilled ? true : undefined}
                      />
                      <Input
                        placeholder="If other, please specify"
                        value={formData?.medPayLimitOther || ''}
                        onChange={() => {}}
                        size="large"
                        customSize={{ width: '440px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
        </div>

          <Input
              leftLabel={true}
              label="LIABILITY POLICY LIMITS PER PERSON"
              placeholder=""
              value={formData?.liabilityLimitsPerPerson || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

          <Input
              leftLabel={true}
              label="UIM LIMITS PER PERSON"
              placeholder=""
              value={formData?.uimLimitsPerPerson || ''}
            onChange={() => {}}
            noBorder={isFilled ? true : undefined}
          />

            <Input
              leftLabel={true}
              label="UM LIMITS PER PERSON"
              placeholder=""
              value={formData?.umLimitsPerPerson || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="Vehicles on Policy (For UM Only)"
              placeholder=""
              value={formData?.vehiclesOnPolicy || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="Total UM Stacked Limits"
              placeholder=""
              value={formData?.totalUmStackedLimits || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <Input
              leftLabel={true}
              label="UMBRELLA/SECONDARY LIABILITY POLICY?"
              placeholder=""
              value={formData?.umbrellaSecondaryLiabilityPolicy || ''}
              onChange={() => {}}
              noBorder={isFilled ? true : undefined}
            />

            <div style={{...L.controlGroup, ...{marginTop: -20}}}>
              <div style={L.radioRow}>
                <Button
                  icon={<EmailIcon size={22}/>}
                  iconPosition="left"
                  size="medium"
                  label="Email Adjuster: Is There Umbrella / Excess Liability Coverage? "
                  onClick={() => {console.log('email adjuster: is there umbrella / excess liability coverage?')}}
                />
              </div>
            </div>

            <div style={{...L.controlGroup, ...{position: 'relative', left: 590, marginTop: -20}}}>
              <Input
                label="Notes"
                inputType="textarea"
                customSize={{ width: '1100px', height: '100px' }}
                placeholder="Notes"
                value={formData?.notes || ''}
                onChange={() => {}}
              />

              <div style={{...L.radioRow, ...{justifyContent: 'flex-start', width: '580px', marginLeft: -13}}}>
                <Button
                  icon={<PlusIcon size={16}/>}
                  iconPosition="left"
                  size="medium"
                  label="Add Another Client Insurance Co Section"
                  onClick={() => {console.log('add another client insurance co section')}}
                />
              </div>

              <div style={{ ...{marginTop: -25}}}>
                <PageActions
                  type={pageActionsState}
                  onSave={() => {console.log('save')}}
                  onCancel={() => {console.log('cancel')}}
                />  
              </div>

            </div>
            
          </div>

          <div style={L.rightColumn}>
            <div style={L.controlGroup}>
              <span style={L.radioTitle}>Does Client Have Own Policy?</span>
              
              <div style={L.radioRow}>
                <Radio
                  label="Yes"
                  checked={formData?.hasOwnPolicy}
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

            <div style={{...L.controlGroup, ...{paddingTop: 114, marginLeft: '-21px'}}}>
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

            <div style={{...L.controlGroup, ...{paddingTop: 286, marginLeft: '-21px'}}}>
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

            <div style={{...L.controlGroup, ...{marginTop: 61, marginLeft: '-21px'}}}>
              <div style={L.radioRow}>
                <Button
                  icon={<EmailIcon size={22}/>}
                  iconPosition="left"
                  size="medium"
                  label="Email MedPay Adjuster"
                  onClick={() => {console.log('email medpay adjuster')}}
                />

                <Button
                  icon={<EmailIcon size={22}/>}
                  iconPosition="left"
                  size="medium"
                  label="Email: is There MP or UIM?"
                  onClick={() => {console.log('email is there mp or uim')}}
                />

              </div>
            </div>

            <div style={{...L.controlGroup, ...{marginTop: 21, marginLeft: '-21px'}}}>
              <div style={L.radioRow}>
                <Button
                  icon={<EmailIcon size={22}/>}
                  iconPosition="left"
                  size="medium"
                  label="MedPay Adjuster Fax"
                  onClick={() => {console.log('medpay adjuster fax')}}
                />
              </div>
            </div>

            <div style={{...L.controlGroup, ...{paddingTop: 217}}}>
              <div style={L.radioRow}>
                <Checkbox
                    label="Adjuster will not disclose limits"
                    checked={formData?.demandLetterSent || false}
                    onChange={() => {}}
                    disabled={isFilled ? true : undefined}
                />
              </div>
            </div>

            <div style={{...L.controlGroup, ...{paddingTop: 38}}}>
              <div style={L.radioRow}>
                <Checkbox
                    label="Adjuster will not disclose limits"
                    checked={formData?.demandLetterSent || false}
                    onChange={() => {}}
                    disabled={isFilled ? true : undefined}
                />
              </div>
            </div>

            <div style={{...L.controlGroup, ...{paddingTop: 38}}}>
              <div style={L.radioRow}>
                <Checkbox
                    label="Adjuster will not disclose limits"
                    checked={formData?.demandLetterSent || false}
                    onChange={() => {}}
                    disabled={isFilled ? true : undefined}
                />
              </div>
            </div>

            <div style={{...L.controlGroup, ...{paddingTop: 114}}}>
              <div style={L.radioRow}>
                <Checkbox
                    label="Injuries not large enough"
                    checked={formData?.demandLetterSent || false}
                    onChange={() => {}}
                    disabled={isFilled ? true : undefined}
                />
       
                <Checkbox
                    label="Adjuster will not disclose limits"
                    checked={formData?.demandLetterSent || false}
                    onChange={() => {}}
                    disabled={isFilled ? true : undefined}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
