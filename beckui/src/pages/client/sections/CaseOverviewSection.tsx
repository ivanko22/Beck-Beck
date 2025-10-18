import React from 'react';
import { Typography } from '../../../components/typography/Typography';
import { Card } from '../../../components/card/Card';
import { Input } from '../../../components/input/Inputs';
import { BaseDropdown } from '../../../components/dropdown/Dropdown';

const L = {
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
};

interface CaseOverviewSectionProps {
  formData?: {
    incidentDate?: string;
    medicalBills?: string;
    totalLiabilityPP?: string;
    totalUMPP?: string;
    totalUMPolicy?: string;
    clientPhone?: string;
    [key: string]: any;
  };
  progressPercent?: number;
}

export const CaseOverviewSection: React.FC<CaseOverviewSectionProps> = ({ 
  formData = {}, 
  progressPercent = 5.6 
}) => {
  const progressWidth = `${progressPercent}%`;

  return (
    <>
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
            label="Incident Date"
            value={formData?.incidentDate || ''}
            size="large"
            customSize={{ width: '150px' }}
          />

          <Input
            placeholder="Medical Bills"
            label="Medical Bills"
            value={formData?.medicalBills || ''}
            size="large"
            customSize={{ width: '170px' }}
          />

          <Input
            placeholder="Total Liability PP"
            label="Total Liability PP"
            value={formData?.totalLiabilityPP || ''}
            size="large"
            customSize={{ width: '170px' }}
          />
          
          <Input
            placeholder="Total UM PP"
            label="Total UM PP"
            value={formData?.totalUMPP || ''}
            size="large"
            customSize={{ width: '170px' }}
          />

          <Input
            placeholder="Total UM Policy"
            label="Total UM Policy"
            value={formData?.totalUMPolicy || ''}
            size="large"
            customSize={{ width: '170px' }}
          />

          <Input
            placeholder="Client Phone"
            label="Client Phone"
            value={formData?.clientPhone || ''}
            size="large"
            customSize={{ width: '170px' }}
          />
        </div>
      </Card>
    </>
  );
};
