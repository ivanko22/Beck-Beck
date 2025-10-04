import React from 'react';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { ClientInsuranceRelativeSection } from './ClientInsuranceRelativeSection';
import { Typography } from '../components/typography/Typography';
import { Wrapper } from '../components/wrapper/PageWrapper';
import { Card } from '../components/card/Card';
import { Input } from '../components/input/Inputs';
import { BaseDropdown } from '../components/dropdown/Dropdown';
import { Checkbox } from '../components/checkbox/Checkbox';
import { Radio } from '../components/radiobutton/Radiobutton';
import { ClientDetailsTableHeader } from '../components/table/ClientDetailsTableHeader';
import { Spacer } from '../components/spacer/Spacer';

const L = {
  // shell: {
  //   display: 'block',
  //   color: 'var(--primary-color)',
  //   background: '#fff',
  // } as React.CSSProperties,

  // main: {
  //   display: 'flex',
  //   width: 'calc(100vw - 300px)',
  //   flexDirection: 'column',
  //   marginLeft: 300,
  //   boxSizing: 'border-box',
  // } as React.CSSProperties,

  caseOverviewCard: {
    display: 'flex',
    flexDirection: 'row',
    height: '90px',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24,
    marginTop: 0,
    marginBottom: 20,
  } as React.CSSProperties,

  caseOverviewLeftSide: {
    display: 'flex',
    width: 170,
    flexDirection: 'column',
    alignItems: 'flex-start',
  } as React.CSSProperties,

  caseOverviewTitleGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  } as React.CSSProperties,

  casePhaseText: {
    fontSize: 14,
    fontWeight: 400,
    color: 'var(--dark-grey)',
  } as React.CSSProperties,

  caseOverviewProgressRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    width: '100%',
  } as React.CSSProperties,

  caseOverviewProgressTrack: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'var(--light-grey)',
    overflow: 'hidden',
  } as React.CSSProperties,

  caseOverviewProgressFill: {
    height: '100%',
    backgroundColor: 'var(--secondary-color)',
    borderRadius: 4,
    transition: 'width 0.3s ease',
  } as React.CSSProperties,

  caseOverviewProgressValue: {
    fontSize: 16,
    fontWeight: 600,
    color: 'var(--primary-color)',
  } as React.CSSProperties,

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

interface InsuranceSection {
  sectionTitle: string;
  formData: any;
}

interface ClientDetailsPageProps {
  caseNumber?: string;
  clientName?: string;
  style?: React.CSSProperties;
  pageActionsState?: 'save' | 'saved' | 'edit';
  insuranceSections?: InsuranceSection[];
  relativeInsuranceSections?: InsuranceSection[];
}

export const ClientDetailsPage: React.FC<ClientDetailsPageProps> = ({
  caseNumber,
  clientName,
  insuranceSections = [],
  pageActionsState = 'save',
}) => {

  const progressPercent = 5.6;
  const progressWidth = `${progressPercent}%`;

  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
      />

      <Wrapper type="mainWrapper">
        <Header
          section={`Client Details`}
          current={caseNumber}
          onClose={() => {}}
        />

        <Wrapper type="contentWrapper">

          <Typography variant="leftLabel" style={{ textAlign: 'left' }}>Case Overview</Typography>
          <Card style={L.caseOverviewCard}>
            <div style={L.caseOverviewLeftSide}>
              
              <div style={L.caseOverviewTitleGroup}>
                <span style={L.casePhaseText}>Case Phase <b>1</b> of <b>18</b></span>
              </div>
              
              <div style={{ marginTop: '-26px' }}>
                <BaseDropdown 
                  disabled={false} 
                  type="BaseDropdown" 
                  value="File Setup" 
                  noBorder={true}
                  state='selected'
                  onSelect={(item) => {
                    console.log(item);
                  }}
                  menuItems={[
                    { label: 'File Setup' },
                    { label: 'File Setup 2' },
                    { label: 'File Setup 3' },
                  ]}
                />
              </div>

              <div style={L.caseOverviewProgressRow}>
                <div style={L.caseOverviewProgressTrack}>
                  <div style={{ ...L.caseOverviewProgressFill, width: progressWidth }} />
                </div>
                <span style={L.caseOverviewProgressValue}>{progressPercent}%</span>
              </div>

            </div>

            <div style={{ ...L.InputsRow, width: '100%', padding: '0 20px' }}>
              <Input
                placeholder="Incident Date"
                size="large"
                customSize={{ width: '150px' }}
              />

              <Input
                placeholder="Medical Bills"
                size="large"
                customSize={{ width: '170px' }}
              />

              <Input
                placeholder="Total Liability PP"
                size="large"
                customSize={{ width: '170px' }}
              />
              
              <Input
                placeholder="Total UM PP"
                size="large"
                customSize={{ width: '170px' }}
              />

              <Input
                placeholder="Total UM Policy"
                size="large"
                customSize={{ width: '170px' }}
              />

              <Input
                placeholder="Client Phone"
                size="large"
                customSize={{ width: '170px' }}
              />
            </div>
          </Card>

          <Typography style={{ textAlign: 'left' }} variant="leftLabel">Client Information</Typography>

          <div style={{ ...L.InputsRow, width: 'auto' }}>
            <BaseDropdown
              type="BaseDropdown"
              value="Assigned to Team"
              label="Assigned to Team"
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
              value="Referred Firm"
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
              size="large"
              customSize={{ width: '270px' }}
            />

            <Input
              placeholder="Email"
              size="large"
              customSize={{ width: '300px' }}
            />

            <BaseDropdown
              type="BaseDropdown"
              value="Phone"
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
              size="large"
              customSize={{ width: '400px' }}
            />

            <BaseDropdown
              type="BaseDropdown"
              value="MO"
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
              size="large"
              customSize={{ width: '240px' }}
            />

            <Input
              placeholder="Zip"
              size="large"
              customSize={{ width: '120px' }}
            />
            
            <Input
              placeholder="DOB"
              size="large"
              customSize={{ width: '140px' }}
            />

            <Input
              placeholder="SSN"
              size="large"
              customSize={{ width: '160px' }}
            />

            <Input
              placeholder="DOL (Crash Date)"
              size="large"
              customSize={{ width: '182px' }}
            />     
          </div>

          <div style={{ ...L.InputsRow, width: 'auto' }}>
            <div style={{  }}>
              <Input
                placeholder="Other Clients in Crash"
                size="large"
                customSize={{ width: '430px' }}
              />

              <div style={{ marginTop: '30px', width: '440px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Checkbox
                  label="Do NOT Send Automated Texts re: Medical Providers"
              />

            <div style={{ ...L.InputsRadioRow  }}>
              <Input
                placeholder="Phone 1"
                size="large"
                customSize={{ width: '160px' }}
              />

              <div style={{ display: 'flex', gap: '40px', paddingTop: '30px' }}>
                <Radio
                  label="Client Phone"
                  checked={true}
                  onChange={() => {}}
                />
                <Radio
                  label="Other"
                  checked={false}
                  onChange={() => {}}
                />
              </div>

              <Input
                placeholder="Other Phone 1"
                size="large"
                customSize={{ width: '160px' }}
              />
            </div>

            <div style={{ ...L.InputsRadioRow  }}>
              <Input
                placeholder="Phone 1"
                size="large"
                customSize={{ width: '160px' }}
              />

              <div style={{ display: 'flex', gap: '40px', paddingTop: '30px' }}>
                <Radio
                  label="Client Phone"
                  checked={true}
                  onChange={() => {}}
                />
                <Radio
                  label="Other"
                  checked={false}
                  onChange={() => {}}
                />
              </div>

              <Input
                placeholder="Other Phone 1"
                size="large"
                customSize={{ width: '160px' }}
              />
            </div>

            <div style={{ ...L.InputsRadioRow  }}>
              <Input
                placeholder="Phone 1"
                size="large"
                customSize={{ width: '160px' }}
              />

              <div style={{ display: 'flex', gap: '40px', paddingTop: '30px' }}>
                <Radio
                  label="Client Phone"
                  checked={true}
                  onChange={() => {}}
                />
                <Radio
                  label="Other"
                  checked={false}
                  onChange={() => {}}
                />
              </div>

              <Input
                placeholder="Other Phone 1"
                size="large"
                customSize={{ width: '160px' }}
              />
            </div>
          </div>
        
          </div>
            <Input
              placeholder="Parent Name (if a minor/disabled child)"
              size="large"
              customSize={{ width: '400px' }}
            />

            <Input
              inputType="textarea"
              placeholder="Case Plan"
              size="large"
              customSize={{ width: '600px', height: '120px' }}
            />
          </div>

          <Typography variant="leftLabel" style={{ textAlign: 'left' }}>Medical & Treatment</Typography>
          
          <ClientDetailsTableHeader
            type="medical"
            title="Medical & Treatment"
            buttonLabel={['Order Police Report', 'Email AIC to Contact Client']}
            buttonIcon={['police', 'email']}
          />

          <Card style={L.caseOverviewCard}>

            <div style={{ ...L.InputsRow, width: '100%', padding: '0 20px' }}>
              <Input
                placeholder="Incident Date"
                size="large"
                customSize={{ width: '150px' }}
              />

              <Input
                placeholder="Medical Bills"
                size="large"
                customSize={{ width: '170px' }}
              />

              <Input
                placeholder="Total Liability PP"
                size="large"
                customSize={{ width: '170px' }}
              />
              
              <Input
                placeholder="Total UM PP"
                size="large"
                customSize={{ width: '170px' }}
              />

              <Input
                placeholder="Total UM Policy"
                size="large"
                customSize={{ width: '170px' }}
              />

              <Input
                placeholder="Client Phone"
                size="large"
                customSize={{ width: '170px' }}
              />
            </div>
          </Card>

        </Wrapper>

        {insuranceSections.map((section, index) => (
          <ClientInsuranceRelativeSection
            type="insurance"
            key={index}
            caseNumber={caseNumber}
            clientName={clientName}
            pageActionsState={pageActionsState}
            formData={section.formData}
            sectionTitle={section.sectionTitle}
          />
        ))}

      </Wrapper>
    </Wrapper>
  );
};
