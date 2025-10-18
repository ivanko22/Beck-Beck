import React from 'react';
import { Typography } from '../typography/Typography';
import { Wrapper } from '../wrapper/PageWrapper';
import { BaseDropdown } from '../dropdown/Dropdown';

export interface StatusItemProps {
  statusText: string;
  identifier: string;
  onClick?: () => void;
}

const statusColors: Record<string, string> = {
  // Green/Teal statuses
  'Final Offer Received, waiting on lien sheet': 'var(--success)',
  'Final Offer Received, lien sheet complete': 'var(--success)',
  'Awaiting Settlement Hearing': 'var(--success)',
  'Finished Case (Archive It)': 'var(--success)',
  'BP Sent Via Mail': 'var(--success)',
  'RTS/All Medical Received': 'var(--success)',
  'Ordered/Waiting on Old Medical': 'var(--success)',
  
  // Blue statuses
  'BP Received': 'var(--primary-color)',
  
  // Orange/Yellow statuses
  'Awaiting Mediation': 'var(--orange)',
  'Referred Case': 'var(--orange)',
  'Treating & No medical ordered yet': 'var(--orange)',
  'Finished Treating/RTS & Awaiting': 'var(--orange)',
  'Finished Treating/RTS & All Medical': 'var(--orange)',
  
  // Purple statuses
  'Sent to Demand Writer': 'var(--purple)',
  'Liability Demand Sent': 'var(--purple)',
  'UM Demand Sent': 'var(--purple)',
  'UIM Demand Sent': 'var(--purple)',
  '30 Day Extension Given to Adjuster': 'var(--purple)',
  
  // Legacy statuses
  'Offer Accepted': 'var(--success)',
  'Signed Release': 'var(--purple)',
  'Blank Release': 'var(--secondary-color)',
  'Check Pending': 'var(--primary-color)',
  'Respond': 'var(--orange)',
  'No Offer 30+': 'var(--warning)',
};

const getStatusColor = (statusText: string): string => {
  return statusColors[statusText] || 'var(--middle-grey)';
};

export const StatusItem: React.FC<StatusItemProps> = ({
  statusText,
  identifier,
}) => {
  const statusColor = getStatusColor(statusText);
  return (
    <Wrapper 
      type="row" 
      style={{ 
        gap: 12, 
        alignItems: 'flex-start',
        width: 180,
      }}
    >

      <Wrapper type="column" style={{ gap: 0, flex: 1 }}>
        <Wrapper type="row" style={{ gap: 0, alignItems: 'center'}}>
          <Wrapper type="row">
            <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: statusColor,
            }} 
            />
          </Wrapper>

          <Wrapper type="column" style={{ marginTop: -40 }}>
            <BaseDropdown 
              type="BaseDropdown"
              value={statusText}
              noBorder={true}
              state="selected"
              style={{ fontSize: 15, width: 170, height: 40, lineHeight: '20px', justifyContent: 'left' }}
              menuItems={Object.keys(statusColors).map(status => ({ label: status }))}
              onSelect={(value: string) => {
                console.log(value);
              }}
            />
          </Wrapper>
            
        </Wrapper>

        <Typography variant="title15" color="var(--middle-grey)" style={{ fontWeight: 400, paddingLeft: 28 }}>
          {identifier}
        </Typography>
      </Wrapper>

    </Wrapper>
  );
};
