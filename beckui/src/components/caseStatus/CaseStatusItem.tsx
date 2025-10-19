import React from 'react';
import { Typography } from '../typography/Typography';
import { Wrapper } from '../wrapper/PageWrapper';

export interface StatusItemProps {
  statusText: string;
  identifier: string;
  onClick?: () => void;
}

const getStatusColor = (statusText: string): string => {
  const statusColors: Record<string, string> = {
    // Green/Teal statuses
    'Offer Accepted': 'var(--success)',
    'Final Offer Received, waiting on lien sheet': 'var(--success)',
    'Final Offer Received, lien sheet complete': 'var(--success)',
    'Awaiting Settlement Hearing': 'var(--success)',
    'Finished Case (Archive It)': 'var(--success)',
    
    // Blue statuses
    'BP Received': 'var(--blue)',
    'BP Sent Via Mail': 'var(--blue)',
    'Blank Release': 'var(--blue)',

    // Dark Blue statuses
    'Ordered/Waiting on Old Medical': 'var(--secondary-color)',

    // Red statuses
    'No Offer 30+': 'var(--warning)',
    
    // Orange statuses
    'Awaiting Mediation': 'var(--orange)',
    'Referred Case': 'var(--orange)',
    'Respond': 'var(--orange)',

    // Yellow statuses
    'Treating & No medical ordered yet': 'var(--yellow)',
    'Finished Treating/ RTS & Awaiting': 'var(--yellow)',
    'Finished Treating/ RTS & All Medical': 'var(--yellow)',
    'RTS/All Medical Received': 'var(--yellow)',
    
    // Purple statuses
    'Sent to Demand Writer': 'var(--purple)',
    'Liability Demand Sent': 'var(--purple)',
    'UM Demand Sent': 'var(--purple)',
    'UIM Demand Sent': 'var(--purple)',
    '30 Day Extension Given to Adjuster': 'var(--purple)',
    'Signed Release': 'var(--purple)',

    // Black statuses90
    'Check Pending': 'var(--primary-color)',
  };
  
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
      }}
    >

      <Wrapper type="column" style={{ gap: 0, flex: 1 }}>
        <Wrapper type="row" style={{ gap: 12, alignItems: 'center'}}>
          <Wrapper type="row">
            <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: statusColor,
            }} 
            />
          </Wrapper>
            
          <Typography variant="title16" color="var(--primary-color)" style={{ fontWeight: 500, lineHeight: '20px' }}>
              {statusText}
          </Typography>
        </Wrapper>

        <Typography variant="title15" color="var(--middle-grey)" style={{ fontWeight: 400, paddingLeft: 21 }}>
          {identifier}
        </Typography>
      </Wrapper>

    </Wrapper>
  );
};
