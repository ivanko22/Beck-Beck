import React from 'react';
import { ClientDetailsTableHeader } from '../../../components/table/ClientDetailsTableHeader';
import { Card } from '../../../components/card/Card';
import { Typography } from '../../../components/typography/Typography';
import { Input } from '../../../components/input/Inputs';
import { BaseDropdown } from '../../../components/dropdown/Dropdown';
import { Checkbox } from '../../../components/checkbox/Checkbox';
import { Radio } from '../../../components/radiobutton/Radiobutton';
import { Button } from '../../../components/button/Button';
import { LetterIcon, EmailIcon } from '../../../components/icons';

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

  toggleGroup: {
    display: 'flex',
    gap: '24px',
    marginBottom: '16px',
  } as React.CSSProperties,

  communicationGroup: {
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
                    label="Estimated Medical Bills"
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

        {/* Wage Loss Details */}

        <ClientDetailsTableHeader
          type="medical"
          borderBottom={true}
          title="Wage Loss Details"
          buttonLabel={['Sent the Big Package', 'Send Wage Loss Email']}
          buttonIcon={[<LetterIcon size={22} />, <EmailIcon size={20} />]}
        />


      <div>

        <div style={L.toggleGroup}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Wage Loss</span>
            <Radio
              label="Yes"
              checked={formData?.wageLoss === 'Yes'}
              onChange={() => {}}
            />
            <Radio
              label="No"
              checked={formData?.wageLoss === 'No'}
              onChange={() => {}}
            />
          </div>
        </div>

        <div style={{ ...L.inputsRow }}>
          <Input
            placeholder="DD"
            value={formData?.missedDays || ''}
            size="large"
            customSize={{ width: '100px' }}
          />
          <Input
            placeholder="DD"
            value={formData?.totalMissedDays || ''}
            size="large"
            customSize={{ width: '100px' }}
          />
          <Input
            placeholder="DD / DD"
            value={formData?.hoursWorkedDays || ''}
            size="large"
            customSize={{ width: '120px' }}
          />
          <Input
            placeholder="$"
            value={formData?.totalWageLoss || ''}
            size="large"
            customSize={{ width: '150px' }}
          />
        </div>

        <div style={L.toggleGroup}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Paid for Missed Time?</span>
            <Radio
              label="Yes"
              checked={formData?.paidForMissedTime === 'Yes'}
              onChange={() => {}}
            />
            <Radio
              label="No"
              checked={formData?.paidForMissedTime === 'No'}
              onChange={() => {}}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Contact Employer</span>
            <Radio
              label="Ok"
              checked={formData?.contactEmployer === 'Ok'}
              onChange={() => {}}
            />
            <Radio
              label="Not Ok"
              checked={formData?.contactEmployer === 'Not Ok'}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>

      {/* Employer Information */}
      <div>
        <Typography variant="leftLabel" style={{ marginBottom: '12px' }}>
          Employer Information
        </Typography>
        <div style={{ ...L.inputsRow }}>
          <Input
            placeholder="Employer Name"
            value={formData?.employerName || ''}
            size="large"
            customSize={{ width: '200px' }}
          />
          <Input
            placeholder="Employer City"
            value={formData?.employerCity || ''}
            size="large"
            customSize={{ width: '150px' }}
          />
          <BaseDropdown
            type="BaseDropdown"
            value={formData?.employerState || "Missouri"}
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
            value={formData?.employerZipCode || ''}
            size="large"
            customSize={{ width: '100px' }}
          />
          <Input
            placeholder="Employer Email"
            value={formData?.employerEmail || ''}
            size="large"
            customSize={{ width: '200px' }}
          />
        </div>
      </div>

      {/* Other Innocent Injured Parties */}
      <Input
        label="Other Innocent Injured Parties"
        inputType="textarea"
        placeholder=""
        value={formData?.otherInnocentInjuredParties || ''}
        size="large"
        customSize={{ width: '100%', height: '80px' }}
      />

      {/* Send Big Package */}
      <div>
        <Typography variant="leftLabel" style={{ marginBottom: '12px' }}>
          Send Big Package
        </Typography>
        <div style={L.communicationGroup}>
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
          icon={<EmailIcon size={16} />}
          iconPosition="left"
          onClick={() => {}}
          size="medium"
        />
      </div>
      </div>
    </>
  );
};

