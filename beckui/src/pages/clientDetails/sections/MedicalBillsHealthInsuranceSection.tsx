import React from 'react';
import { ClientDetailsTableHeader } from '../../../components/table/ClientDetailsTableHeader';
import { Typography } from '../../../components/typography/Typography';
import { Input } from '../../../components/input/Inputs';
import { BaseDropdown } from '../../../components/dropdown/Dropdown';
import { Checkbox } from '../../../components/checkbox/Checkbox';
import { Button } from '../../../components/button/Button';
import { LetterIcon, EmailIcon } from '../../../components/icons';
import { Toggle } from '../../../components/toggle/Toggle';
import { Spacer } from '../../../components/spacer/Spacer';
import { Border } from '../../../components/border/Border';
import { Wrapper } from '../../../components/wrapper/PageWrapper';

const L = {
  inputsRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '40px',
    marginBottom: '16px',
  } as React.CSSProperties,

  checkboxGroup: {
    display: 'flex',
    gap: '24px',
    marginBottom: '16px',
  } as React.CSSProperties,

};

interface MedicalBillsHealthInsuranceSectionProps {
  formData?: {
    estimatedMedicalBills?: string;
    insuranceType?: {
      none?: boolean;
      medicaid?: boolean;
      medicare?: boolean;
      tricare?: boolean;
      private?: boolean;
    };
    otherInsuranceType?: string;
    wageLoss?: 'Yes' | 'No';
    missedDays?: string;
    totalMissedDays?: string;
    hoursWorkedDays?: string;
    totalWageLoss?: string;
    paidForMissedTime?: 'Yes' | 'No';
    contactEmployer?: 'Ok' | 'Not Ok';
    employerName?: string;
    employerCity?: string;
    employerState?: string;
    employerZipCode?: string;
    employerEmail?: string;
    otherInnocentInjuredParties?: string;
    sendBigPackage?: {
      text?: boolean;
      email?: boolean;
      snailMail?: boolean;
    };
    [key: string]: any;
  };
}

export const MedicalBillsHealthInsuranceSection: React.FC<MedicalBillsHealthInsuranceSectionProps> = ({ formData = {} }) => {
  return (
    <>
      <ClientDetailsTableHeader
          type="medical"
          title="Medical Bills & Health Insurance"
          smallSectionTitle="Financial & Insurance"
          buttonLabel={['Generate Subrogation Letter']}
          buttonIcon={[<LetterIcon size={22} />]}
      />
      
      <div style={{ marginTop: '0px', gap: '36px', paddingBottom: '36px', paddingTop: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '97px', marginBottom: '-21px', paddingLeft: '12px' }}>
              <Typography variant="titleSmall">
                  Estimated <br/> Medical Bills
              </Typography>
              
              <Typography variant="titleSmall" style={{}}>
                  Insurance Type
              </Typography>
          </div>

          <div style={{...L.checkboxGroup, gap: '40px'}}>
              <Input
                  label=""
                  placeholder=""
                  value={formData?.estimatedMedicalBills || ''}
                  size="large"
                  customSize={{ width: '110px' }}
              />

              <div style={{ display: 'flex', gap: '36px', paddingTop: '26px' }}>
                  <Checkbox
                      label="None"
                      checked={formData?.insuranceType?.medicaid || false}
                      onChange={() => {}}
                  />
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
                      label="Private"
                      checked={formData?.insuranceType?.private || false}
                      onChange={() => {}}
                  />
              </div>
                
                <Input
                  placeholder="Private Insurance Name"
                  value={formData?.otherInsuranceType || ''}
                  size="large"
                  customSize={{ width: '300px' }}
                />
            </div>
          </div>
                    
          <ClientDetailsTableHeader
            type="medical"
            borderBottom={true}
            title="Wage Loss Details"
            buttonLabel={['Sent the Big Package', 'Send Wage Loss Email']}
            buttonIcon={[<LetterIcon size={22} />, <EmailIcon size={20} />]}
          />

          <div style={{...L.checkboxGroup, gap: '40px', marginTop: '40px'}}>
            <Toggle
              label="Wage Loss"
              checked={formData?.wageLoss === 'Yes'}
              onChange={() => {}}
            />

            <Input
              label="Missed Days"
              showLabel={true}
              placeholder=""
              value={formData?.estimatedMedicalBills || ''}
              size="large"
              customSize={{ width: '118px' }}
            />

            <Input
              label="Total Missed Days"
              showLabel={true}
              placeholder=""
              value={formData?.estimatedMedicalBills || ''}
              size="large"
              customSize={{ width: '144px' }}
            />

            <Input
              label="Hours Worked / Days"
              showLabel={true}
              placeholder=""
              value={formData?.estimatedMedicalBills || ''}
              size="large"
              customSize={{ width: '165px' }}
            />

            <Input
              label="Total Wage Loss"
              showLabel={true}
              placeholder=""
              value={formData?.estimatedMedicalBills || ''}
              size="large"
              customSize={{ width: '144px' }}
            />

            <Toggle
              label="Paid for Missed Time?"
              checked={formData?.wageLoss === 'Yes'}
              onChange={() => {}}
            />

            <Toggle
              label="Contact Employer"
              checked={formData?.wageLoss === 'Yes'}
              onChange={() => {}}
            />
          </div>

          <Spacer customSize={40} />

          <div style={{ ...L.inputsRow }}>
            <Input
              placeholder="Employer Name"
              label="Employer Name"
              value={formData?.employerName || ''}
              size="large"
              customSize={{ width: '250px' }}
            />
            
            <Input
              placeholder="Employer City"
              label="Employer City"
              value={formData?.employerCity || ''}
              size="large"
              customSize={{ width: '160px' }}
            />
            
            <BaseDropdown
              type="BaseDropdown"
              value={formData?.employerState || "Missouri"}
              label="State"
              state='selected'
              width="120px"
              menuItems={[
                { label: 'Missouri' },
                { label: 'Illinois' },
                { label: 'California' },
              ]}
              onSelect={(item) => {
                console.log(item);
              }}
            />
            <Input
              placeholder="Zip Code"
              label="Zip Code"
              value={formData?.employerZipCode || ''}
              size="large"
              customSize={{ width: '108px' }}
            />
            <Input
              placeholder="Employer Email"
              label="Employer Email"
              value={formData?.employerEmail || ''}
              size="large"
              customSize={{ width: '360px' }}
            />
          </div>

          <Spacer customSize={30} />
          <Border />

          <Wrapper type="pageWrapperContentRow" style={{ gap: '40px', marginTop: '40px'}}>
            <Input
              label="Other Innocent Injured Parties"
              inputType="textarea"
              placeholder="Other Innocent Injured Parties"
              value={formData?.otherInnocentInjuredParties || ''}
              size="large"
              customSize={{ width: '500px', height: '100px' }}
            />

            <Wrapper type="pageWrapperContentColumn">
              <Typography variant="titleSmall" style={{ marginBottom: '12px' }}>Send Big Package</Typography>
              
              <div style={{...L.checkboxGroup, gap: '40px'}}>
                <Checkbox
                    label="Text"
                    checked={formData?.sendBigPackage?.text || false}
                    onChange={() => {}}
                  />

                  <Checkbox
                    label="Email"
                    checked={formData?.sendBigPackage?.email || false}
                    onChange={() => {}}
                  />

                  <Checkbox
                    label="Snail Mail"
                    checked={formData?.sendBigPackage?.snailMail || false}
                    onChange={() => {}}
                  />
              </div>

              <Button
                label="Sent the Big Package"
                icon={<LetterIcon size={22} />}
                iconPosition="left"
                onClick={() => {}}
                size="medium"
              />
            </Wrapper>
          </Wrapper>
      </div>
    </>
  );
};

