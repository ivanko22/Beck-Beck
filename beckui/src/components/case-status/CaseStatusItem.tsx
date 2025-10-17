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
    'Offer Accepted': 'var(--success)',
    'Signed Release': 'var(--purple)',
    'Blank Release': 'var(--secondary-color)',
    'Check Pending': 'var(--primary-color)',
    'Respond': 'var(--orange)',
    'No Offer 30+': 'var(--warning)',
  };
  
  return statusColors[statusText] || 'var(--middle-grey)';
};

export const StatusItem: React.FC<StatusItemProps> = ({
  statusText,
  identifier,
  onClick,
}) => {
  const statusColor = getStatusColor(statusText);
  return (
    <Wrapper 
      type="row" 
      style={{ 
        gap: 12, 
        alignItems: 'flex-start',
        cursor: onClick ? 'pointer' : 'default'
      }}
    >

      <Wrapper type="column" style={{ gap: 4, flex: 1 }}>
        <Wrapper type="row" style={{ gap: 8, alignItems: 'center'}}>
            <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: statusColor,
                
            }} 
            />
            <Typography variant="title16" color="var(--primary-color)" style={{ fontWeight: 500 }}>
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
