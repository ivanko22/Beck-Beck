import React from 'react';
import { Typography } from '../../../components/typography/Typography';
import { Input } from '../../../components/input/Inputs';
import { BaseDropdown } from '../../../components/dropdown/Dropdown';
import { Checkbox } from '../../../components/checkbox/Checkbox';
import { Radio } from '../../../components/radiobutton/Radiobutton';
import { Wrapper } from '../../../components/wrapper/PageWrapper';

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
  state?: 'saved' | 'edit' | 'adding';
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

export const ClientInformationSection: React.FC<ClientInformationSectionProps> = ({ formData = {}, state }) => {
  return (
    <>
      <Typography style={{ textAlign: 'left', paddingBottom: '10px' }} variant="leftLabel">
        Client Information
      </Typography>

      <Wrapper type="row" style={{ justifyContent: 'space-between', paddingBottom: 30 }}>
        <BaseDropdown
          type="BaseDropdown"
          value={formData?.assignedTeam || "Team 1"}
          label="Assigned to Team"
          state='selected'
          disabled={state !== 'edit'}
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
          state='selected'
          disabled={state !== 'edit'}
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
          disabled={state !== 'edit'}
        />

        <Input
          placeholder="Email"
          label="Email"
          value={formData?.email || ''}
          size="large"
          customSize={{ width: '300px' }}
          disabled={state !== 'edit'}
        />

        <BaseDropdown
          type="BaseDropdown"
          value={formData?.bestContact || "Phone"}
          state='selected'
          label="Best Contact"
          width="120px"
          menuItems={[
            { label: 'Phone' },
            { label: 'Email' },
            { label: 'Text' },
          ]}
          onSelect={(item) => {
            console.log(item);
          }}
          disabled={state !== 'edit'}
        />
      </Wrapper>

      <Wrapper type="row" style={{ justifyContent: 'space-between', paddingBottom: 30 }}>
        <Input
          placeholder="Address"
          label="Address"
          value={formData?.address || ''}
          size="large"
          customSize={{ width: '400px' }}
          disabled={state !== 'edit'}
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
          disabled={state !== 'edit'}
        />

        <Input
          placeholder="City"
          label="City"
          value={formData?.city || ''}
          size="large"
          customSize={{ width: '200px' }}
          disabled={state !== 'edit'}
        />

        <Input
          placeholder="Zip"
          label="Zip"
          value={formData?.zipCode || ''}
          size="large"
          customSize={{ width: '100px' }}
          disabled={state !== 'edit'}
        />
        
        <Input
          placeholder="DOB"
          label="DOB"
          value={formData?.dob || ''}
          size="large"
          customSize={{ width: '130px' }}
          disabled={state !== 'edit'}
        />

        <Input
          placeholder="SSN"
          label="SSN"
          value={formData?.ssn || ''}
          size="large"
          customSize={{ width: '140px' }}
          disabled={state !== 'edit'}
        />

        <Input
          placeholder="DOL (Crash Date)"
          label="DOL (Crash Date)"
          value={formData?.crashDate || ''}
          size="large"
          customSize={{ width: '130px' }}
          disabled={state !== 'edit'}
          />     
      </Wrapper>

      <Wrapper type="column" style={{ paddingBottom: 30 }}>
        <Wrapper type="row" style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Wrapper type="column" style={{ gap: 30 }}>
            <Input
              placeholder="Other Clients in Crash"
              label="Other Clients in Crash"
              value={formData?.otherClientsInCrash || ''}
              size="large"
              customSize={{ width: '450px' }}
              disabled={state !== 'edit'}
            />
            <Checkbox
              label="Do NOT Send Automated Texts re: Medical Providers"
              checked={formData?.doNotSendAutomatedTexts || false}
              onChange={() => {}}
              disabled={state !== 'edit'}
            />
          </Wrapper>

          <Input
            placeholder="Parent Name (if a minor/disabled child)"
            label="Parent Name (if a minor/disabled child)"
            value={formData?.parentName || ''}
            size="large"
            customSize={{ width: '270px' }}
            disabled={state !== 'edit'}
          />

          <Input
            inputType="textarea"
            placeholder="Case Plan"
            label="Case Plan"
            value={formData?.casePlan || ''}
            size="large"
            customSize={{ width: '560px', height: '120px' }}
            disabled={state !== 'edit'}
          />
        </Wrapper>

        <Wrapper type="column" style={{ gap: 30 }}>
          {/* Phone 1 */}
          <Wrapper type="row" style={{ width: '660px', gap: '40px', height: '60px' }}>
            <Wrapper type="row" style={{ gap: '20px', alignItems: 'center' }}> 
              <Input
                placeholder="Client Phone 1"
                value={formData?.phone1 || ''}
                size="large"
                customSize={{ width: '160px' }}
                disabled={state !== 'edit'}
              />
              <Wrapper type="row" style={{ paddingTop: '30px', gap: '20px', alignItems: 'center' }}>
                <Radio
                  label="Client Phone 1"
                  checked={formData?.phone1Type === 'Client Phone' || formData?.phone1Type === 'Client Phone 1'}
                  onChange={() => {}}
                  disabled={state !== 'edit'}
                />
             </Wrapper>
            </Wrapper>

            <Wrapper type="row" style={{ gap: '20px', alignItems: 'center' }}> 
              <Wrapper type="row" style={{ paddingTop: '30px', gap: '20px', alignItems: 'center' }}>
                <Radio
                  label="Other"
                  checked={formData?.phone1Type === 'Other'}
                  onChange={() => {}}
                  disabled={state !== 'edit'}
                />
             </Wrapper>
             <Input
                placeholder="Other Phone 1"
                value={formData?.otherPhone1 || ''}
                size="large"
                customSize={{ width: '160px' }}
                disabled={state !== 'edit'}
              />
            </Wrapper>
          </Wrapper>

          {/* Phone 2 */}
          <Wrapper type="row" style={{ width: '660px', gap: '40px', height: '60px' }}>
            <Wrapper type="row" style={{ gap: '20px', alignItems: 'center' }}> 
              <Input
                placeholder="Client Phone 2"
                value={formData?.phone2 || ''}
                size="large"
                customSize={{ width: '160px' }}
                disabled={state !== 'edit'}
              />
              <Wrapper type="row" style={{ paddingTop: '30px', gap: '20px', alignItems: 'center' }}>
                <Radio
                  label="Client Phone 2"
                  checked={formData?.phone2Type === 'Client Phone'}
                  onChange={() => {}}
                  disabled={state !== 'edit'}
                />
             </Wrapper>
            </Wrapper>

            <Wrapper type="row" style={{ gap: '20px', alignItems: 'center' }}> 
              <Wrapper type="row" style={{ paddingTop: '30px', gap: '20px', alignItems: 'center' }}>
                <Radio
                  label="Other"
                  checked={formData?.otherPhone2Type === 'Client Phone'}
                  onChange={() => {}}
                  disabled={state !== 'edit'}
                />
             </Wrapper>
             <Input
                placeholder="Other Phone 2"
                value={formData?.otherPhone2 || ''}
                size="large"
                customSize={{ width: '160px' }}
                disabled={state !== 'edit'}
              />
            </Wrapper>
          </Wrapper>

          {/* Phone 3 */}
          <Wrapper type="row" style={{ width: '660px', gap: '40px', height: '60px' }}>
            <Wrapper type="row" style={{ gap: '20px', alignItems: 'center' }}> 
              <Input
                placeholder="Client Phone 3"
                value={formData?.phone3 || ''}
                size="large"
                customSize={{ width: '160px' }}
                disabled={state !== 'edit'}
              />
              <Wrapper type="row" style={{ paddingTop: '30px', gap: '20px', alignItems: 'center' }}>
                <Radio
                  label="Client Phone 3"
                  checked={formData?.phone3Type === 'Client Phone'}
                  onChange={() => {}}
                  disabled={state !== 'edit'}
                />
             </Wrapper>
            </Wrapper>

            <Wrapper type="row" style={{ gap: '20px', alignItems: 'center' }}> 
              <Wrapper type="row" style={{ paddingTop: '30px', gap: '20px', alignItems: 'center' }}>
                <Radio
                  label="Other"
                  checked={formData?.phone3Type === 'Other'}
                  onChange={() => {}}
                  disabled={state !== 'edit'}
                />
             </Wrapper>
             <Input
                placeholder="Other Phone 3"
                value={formData?.otherPhone3 || ''}
                size="large"
                customSize={{ width: '160px' }}
                disabled={state !== 'edit'}
              />
            </Wrapper>
          </Wrapper>

        </Wrapper>
      
      </Wrapper>

    </>
  );
};
