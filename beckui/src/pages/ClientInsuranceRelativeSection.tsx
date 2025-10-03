import React from 'react';
import { BaseDropdown } from '../components/dropdown/Dropdown';
import { Input } from '../components/input/Inputs';
import { Checkbox } from '../components/checkbox/Checkbox';
import { Radio } from '../components/radiobutton/Radiobutton';
import { Button } from '../components/button/Button';
import { ClientDetailsTableHeader } from '../components/table/ClientDetailsTableHeader';
import { PlusIcon, EmailIcon } from '../components/icons/index';
import { Typography } from '../components/typography/Typography';
import { PageActions } from '../components/page-actions/PageActions';

export interface ClientInsuranceRelativeSectionProps {
  type: 'insurance' | 'relative';
  caseNumber?: string;
  clientName?: string;
  style?: React.CSSProperties;
  pageActionsState?: 'save' | 'saved' | 'edit';

  sectionTitle: string;

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
  main: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
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
    paddingLeft: 30,
  } as React.CSSProperties,

  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
    marginBottom: 8,
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

const generateFieldConfig = (formData: any) => {
  const fieldMappings = {
    insuranceAddress: "Insurance Company Address", 
    clientName: "Our Client's Name",
    policyHolderName: "Policy Holder Name",
    claimNumber: "Claim #",
    policyNumber: "Policy Number",
    mainInsPhone: "Main Ins. Phone",
    biAdjusterName: "BI Adjuster Name",
    biAdjusterPhone: "BI Adjuster Phone",
    biAdjusterFax: "BI Adjuster Fax",
    biAdjusterEmail: "BI Adjuster Email",
    medPayAdjusterName: "MedPay Adjuster Name",
    medPayAdjusterPhone: "MedPay Adjuster Phone",
    medPayAdjusterEmail: "MedPay Adjuster Email",
    medPayAdjusterFax: "MedPay Adjuster Fax",

    liabilityLimitsPerPerson: "LIABILITY POLICY LIMITS PER PERSON",
    uimLimitsPerPerson: "UIM LIMITS PER PERSON",
    umLimitsPerPerson: "UM LIMITS PER PERSON",
    vehiclesOnPolicy: "Vehicles on Policy (For UM Only)",
    totalUmStackedLimits: "Total UM Stacked Limits",
    umbrellaSecondaryLiabilityPolicy: "UMBRELLA/SECONDARY LIABILITY POLICY?",
  };

  return Object.keys(fieldMappings).map(valueKey => ({
    label: fieldMappings[valueKey as keyof typeof fieldMappings],
    valueKey
  }));
};

export const ClientInsuranceRelativeSection: React.FC<ClientInsuranceRelativeSectionProps> = ({
  formData,
  pageActionsState = 'save',
  sectionTitle,
  type,
}) => {
  const insuranceCompanies = [
    { label: 'State Farm' },
    { label: 'Allstate' },
    { label: 'Progressive' },
    { label: 'Geico' },
    { label: 'Farmers' },
  ];

  const isFilled = pageActionsState === 'saved';
  const fieldConfig = generateFieldConfig(formData);

  return (

      <div style={L.main}>
        <ClientDetailsTableHeader
          type={type}
          title={sectionTitle}
          buttonLabel={type === 'insurance' ? 'Add Another Client Insurance Co Section' : 'Add Another Client Relative Insurance Co Section'}
          buttonIcon={<PlusIcon size={16}/>}
          onButtonClick={() => {}}
        />

        <div style={L.grid}>
          <div style={L.leftColumn}>

            {type === 'relative' && (
              <>
                <div style={{...{display: 'flex', position: 'relative', left: '124px', flexDirection: 'column', alignItems: 'center', width: '100%', paddingTop: '30px'}}}>
                  <div style={{display: 'flex', gap: 40}}>
                    <Typography variant="leftLabel">
                      Are Injuries Large Enough to<br/> Use Res Rel UIM?
                    </Typography>
                    
                    <div style={{display: 'flex'}}>
                      <div style={{display: 'flex', gap: 20}}>
                        <Radio
                          label="Maybe"
                          checked={formData?.medPayLimit === 'none' || false}
                          onChange={() => {}}
                          disabled={isFilled ? true : undefined}
                        />
                        <Radio
                          label="Yes"
                          checked={formData?.medPayLimit === '5k' || false}
                          onChange={() => {}}
                          disabled={isFilled ? true : undefined}
                        />
                        <Radio
                          label="No"
                          checked={formData?.medPayLimit === '10k' || false}
                          onChange={() => {}}
                          disabled={isFilled ? true : undefined}
                        />
                      </div>

                    </div>
                  </div>
                </div>
              </>
            )}

            <div style={{display: 'flex', marginTop: -30}}>
              <BaseDropdown
                label="Insurance Company"
                leftLabel={true}
                // noBorder={isFilled ? true : undefined}
                disabled={pageActionsState === 'saved'}
                type="BaseDropdown"
                state={formData?.insuranceCompany ? 'selected' : 'default'}
                value={formData?.insuranceCompany || 'Select Insurance Company'}
                menuItems={insuranceCompanies}
                onSelect={() => {}}
                style={{ width: '238px' }}
              />
            </div>

            {fieldConfig
              .slice(0, -6)
              .map(({ label, valueKey }) => (
                <Input
                  key={valueKey}
                  leftLabel={true}
                  label={label}
                  placeholder=""
                  value={(formData as any)?.[valueKey] || ''}
                  onChange={() => {}}
                  // noBorder={isFilled ? true : undefined}
                  disabled={pageActionsState === 'saved'}
                />
            ))}

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
                        disabled={pageActionsState === 'saved'}
                      />
                    </div>
                  </div>
                </div>
            </div>
        </div>


          {type === 'insurance' && (
              <Input
                label="LIABILITY POLICY LIMITS PER PERSON"
                leftLabel={true}
                placeholder=""
                value={formData?.liabilityLimitsPerPerson || ''}
                onChange={() => {}}
                // noBorder={isFilled ? true : undefined}
                disabled={pageActionsState === 'saved'}
              />
          )}

           {fieldConfig.slice(15).map(({ label, valueKey }) => {
             const coloredLabel = valueKey === 'uimLimitsPerPerson' ? {
               parts: [
                 { text: 'UIM', color: 'var(--warning)' },
                 { text: ' LIMITS', color: 'var(--dark-grey)' },
                 { text: ' PER PERSON', color: 'var(--warning)' }
               ]
             } : valueKey === 'umLimitsPerPerson' ? {
               parts: [
                 { text: 'UM', color: 'var(--success)' },
                 { text: ' LIMITS ', color: 'var(--dark-grey)' },
                 { text: ' PER PERSON', color: 'var(--warning)' }
               ]
             } : undefined;

             return (
               <Input
                 key={valueKey}
                 leftLabel={true}
                 label={label}
                 coloredLabel={coloredLabel}
                 placeholder=""
                 value={(formData as any)?.[valueKey] || ''}
                 onChange={() => {}}
                //  noBorder={isFilled ? true : undefined}
                disabled={pageActionsState === 'saved'}
               />
             );
           })}

            <div style={{...L.controlGroup, ...{marginTop: -20}}}>
              <div style={L.radioRow}>
                <Button
                  icon={<EmailIcon size={22}/>}
                  iconPosition="left"
                  size="medium"
                  label={type === 'insurance' ? 'Email Adjuster: Is There Umbrella / Excess Liability Coverage? ' : 'Email Adjuster: Is There MP or UIM? '}
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
                  label={type === 'insurance' ? 'Add Another Client Insurance Co Section' : 'Add Another Client Relative Insurance Co Section'}
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

          <div style={{...L.rightColumn, paddingTop: type === 'insurance' ? 190 : 286}}>
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

            <div style={{...L.controlGroup, ...{paddingTop: type === 'insurance' ? 100 : 76, marginLeft: '-21px'}}}>
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

            <div style={{...L.controlGroup, ...{paddingTop: type === 'insurance' ? 286 : 325, marginLeft: '-21px'}}}>
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

            <div style={{...L.controlGroup, ...{paddingTop: type === 'insurance' ? 217 : 136}}}>
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
        
            {type === 'insurance' && (
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
              )}

            <div style={{...L.controlGroup, ...{paddingTop: type === 'insurance' ? 114 : 194}}}>
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
   
  );
};
