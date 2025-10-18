import React from 'react';
import { Typography } from '../../../components/typography/Typography';
import { Input } from '../../../components/input/Inputs';
import { BaseDropdown } from '../../../components/dropdown/Dropdown';
import { Checkbox } from '../../../components/checkbox/Checkbox';
import { Radio } from '../../../components/radiobutton/Radiobutton';

const L = {
  InputsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 10,
  } as React.CSSProperties,

  InputsRadioRow: {
    display: 'flex',
    height: '60px',
    width: '660px', 
    justifyContent: 'flex-start', 
    gap: '40px', 
    alignItems: 'center'
  } as React.CSSProperties,
};

interface ClientInformationSectionProps {
  formData?: {
    assignedTeam?: string;
    referredFirm?: string;
    firstName?: string;
    email?: string;
    bestContact?: string;
    address?: string;
    state?: string;
    city?: string;
    zipCode?: string;
    dob?: string;
    ssn?: string;
    crashDate?: string;
    otherClientsInCrash?: string;
    parentName?: string;
    casePlan?: string;
    phone1?: string;
    phone1Type?: string;
    otherPhone1?: string;
    phone2?: string;
    phone2Type?: string;
    otherPhone2?: string;
    phone3?: string;
    phone3Type?: string;
    otherPhone3?: string;
    doNotSendAutomatedTexts?: boolean;
    [key: string]: any;
  };
}

export const ClientInformationSection: React.FC<ClientInformationSectionProps> = ({ formData = {} }) => {
  return (
    <>
      <Typography style={{ textAlign: 'left', paddingBottom: '10px' }} variant="leftLabel">
        Client Information
      </Typography>

      <div style={{ ...L.InputsRow, width: 'auto' }}>
        <BaseDropdown
          type="BaseDropdown"
          value={formData?.assignedTeam || "Team 1"}
          label="Assigned to Team"
          state='selected'
          menuItems={[
            { label: 'Team 1' },
            { label: 'Team 2' },
            { label: 'Team 3' },
          ]}
          onSelect={(item) => {
            console.log(item);
          }}
        />

        <BaseDropdown
          type="BaseDropdown"
          value={formData?.referredFirm || "Referred Firm"}
          label="Referred Firm"
          menuItems={[
            { label: 'Firm 1' },
            { label: 'Firm 2' },
            { label: 'Firm 3' },
          ]}
          onSelect={(item) => {
            console.log(item);
          }}
        />

        <Input
          placeholder="First Last Name"
          label="First Last Name"
          value={formData?.firstName || ''}
          size="large"
          customSize={{ width: '270px' }}
        />

        <Input
          placeholder="Email"
          label="Email"
          value={formData?.email || ''}
          size="large"
          customSize={{ width: '300px' }}
        />

        <BaseDropdown
          type="BaseDropdown"
          value={formData?.bestContact || "Phone"}
          state='selected'
          label="Best Contact"
          menuItems={[
            { label: 'Phone' },
            { label: 'Email' },
            { label: 'Text' },
          ]}
          onSelect={(item) => {
            console.log(item);
          }}
        />
      </div>

      <div style={{ ...L.InputsRow, width: 'auto' }}>
        <Input
          placeholder="Address"
          label="Address"
          value={formData?.address || ''}
          size="large"
          customSize={{ width: '400px' }}
        />

        <BaseDropdown
          type="BaseDropdown"
          value={formData?.state || "MO"}
          state='selected'
          label="State"
          width='74px'
          menuItems={[
            { label: 'MO' },
            { label: 'IL' },
            { label: 'CA' },
          ]}
          onSelect={(item) => {
            console.log(item);
          }}
        />

        <Input
          placeholder="City"
          label="City"
          value={formData?.city || ''}
          size="large"
          customSize={{ width: '240px' }}
        />

        <Input
          placeholder="Zip"
          label="Zip"
          value={formData?.zipCode || ''}
          size="large"
          customSize={{ width: '120px' }}
        />
        
        <Input
          placeholder="DOB"
          label="DOB"
          value={formData?.dob || ''}
          size="large"
          customSize={{ width: '140px' }}
        />

        <Input
          placeholder="SSN"
          label="SSN"
          value={formData?.ssn || ''}
          size="large"
          customSize={{ width: '160px' }}
        />

        <Input
          placeholder="DOL (Crash Date)"
          label="DOL (Crash Date)"
          value={formData?.crashDate || ''}
          size="large"
          customSize={{ width: '182px' }}
        />     
      </div>

      <div style={{ ...L.InputsRow, width: 'auto' }}>
        <div style={{  }}>
          <Input
            placeholder="Other Clients in Crash"
            label="Other Clients in Crash"
            value={formData?.otherClientsInCrash || ''}
            size="large"
            customSize={{ width: '440px' }}
          />

          <div style={{ marginTop: '30px', width: '440px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Checkbox
              label="Do NOT Send Automated Texts re: Medical Providers"
              checked={formData?.doNotSendAutomatedTexts || false}
              onChange={() => {}}
            />

            <div style={{ ...L.InputsRadioRow  }}>
              <Input
                placeholder="Phone 1"
                value={formData?.phone1 || ''}
                size="large"
                customSize={{ width: '160px' }}
              />

              <div style={{ display: 'flex', gap: '40px', paddingTop: '30px' }}>
                <Radio
                  label="Client Phone"
                  checked={formData?.phone1Type === 'Client Phone'}
                  onChange={() => {}}
                />
                <Radio
                  label="Other"
                  checked={formData?.phone1Type === 'Other'}
                  onChange={() => {}}
                />
              </div>

              <Input
                placeholder="Other Phone 1"
                value={formData?.otherPhone1 || ''}
                size="large"
                customSize={{ width: '160px' }}
              />
            </div>

            <div style={{ ...L.InputsRadioRow  }}>
              <Input
                placeholder="Phone 2"
                value={formData?.phone2 || ''}
                size="large"
                customSize={{ width: '160px' }}
              />

              <div style={{ display: 'flex', gap: '40px', paddingTop: '30px' }}>
                <Radio
                  label="Client Phone"
                  checked={formData?.phone2Type === 'Client Phone'}
                  onChange={() => {}}
                />
                <Radio
                  label="Other"
                  checked={formData?.phone2Type === 'Other'}
                  onChange={() => {}}
                />
              </div>

              <Input
                placeholder="Other Phone 2"
                value={formData?.otherPhone2 || ''}
                size="large"
                customSize={{ width: '160px' }}
              />
            </div>

            <div style={{ ...L.InputsRadioRow  }}>
              <Input
                placeholder="Phone 3"
                value={formData?.phone3 || ''}
                size="large"
                customSize={{ width: '160px' }}
              />

              <div style={{ display: 'flex', gap: '40px', paddingTop: '30px' }}>
                <Radio
                  label="Client Phone"
                  checked={formData?.phone3Type === 'Client Phone'}
                  onChange={() => {}}
                />
                <Radio
                  label="Other"
                  checked={formData?.phone3Type === 'Other'}
                  onChange={() => {}}
                />
              </div>

              <Input
                placeholder="Other Phone 3"
                label="Other Phone 3"
                value={formData?.otherPhone3 || ''}
                size="large"
                customSize={{ width: '160px' }}
              />
            </div>
          </div>
        </div>
      
        <Input
          placeholder="Parent Name (if a minor/disabled child)"
          label="Parent Name (if a minor/disabled child)"
          value={formData?.parentName || ''}
          size="large"
          customSize={{ width: '400px' }}
        />

        <Input
          inputType="textarea"
          placeholder="Case Plan"
          label="Case Plan"
          value={formData?.casePlan || ''}
          size="large"
          customSize={{ width: '560px', height: '120px' }}
          style={{ marginTop: '32px' }}
        />
      </div>
    </>
  );
};
