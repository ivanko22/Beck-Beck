import React from 'react';
import { AvaIcon, AccordionIcon, CheckmarkIcon, ScaleIcon, AlertIcon } from '../icons';
import { Typography } from '../typography/Typography';
import { Wrapper } from '../wrapper/PageWrapper';

export interface ManualTextingClient {
  id: string;
  name: string;
  mostRecentText: string;
  cellphone: string;
  spouseCellphone: string;
  dateAdded: string;
  conversationStatus: 'Responsed' | 'Pending' | 'Removed' | 'Unanswered';
}

export interface RowManualTextingProps {
  client: ManualTextingClient;
  onViewConversation?: () => void;
  onRefreshClient?: () => void;
  onToggleMessaging?: () => void;
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Responsed':
      return <CheckmarkIcon size={20} color="var(--secondary-color)" />;
    case 'Pending':
      return <ScaleIcon size={20} color="var(--secondary-color)" />;
    case 'Unanswered':
      return <AlertIcon size={20} color="var(--warning)" />;
    default:
      return null;
  }
};

export const RowManualTexting: React.FC<RowManualTextingProps> = ({
  client,
  onToggleMessaging,
}) => {
  
  const rowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 26px',
    borderBottom: client.conversationStatus === 'Unanswered' ? '1px solid var(--warning)' : '1px solid var(--light-grey)',
    backgroundColor: client.conversationStatus === 'Unanswered' ? 'rgba(240, 97, 97, 0.03)' : 'var(--white)',
    minHeight: '60px',
    gap: '40px',
    justifyContent: 'space-between',
    opacity: client.conversationStatus === 'Removed' ? 0.5 : 1,
    cursor: 'pointer',
  };

  const nameStyle: React.CSSProperties = {
    minWidth: '200px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  return (
    <div style={rowStyle} onClick={() => onToggleMessaging?.()}>
      <Wrapper type="row" style={nameStyle}>
        <Wrapper type="row">
          <AvaIcon size={40} color="var(--middle-grey)" />
        </Wrapper>

        <Typography variant="title16" style={{ fontWeight: 500 }}>
          {client.name}
        </Typography>
      </Wrapper>

        <Typography variant="title15" style={{ color: 'var(--primary-color)', width: 300 }}>
          {client.mostRecentText}
        </Typography>

        <Typography variant="title16" style={{ width: 150 }}>
          {client.cellphone}
        </Typography>

        <Typography variant="title16" style={{ width: 150 }}>
          { client.spouseCellphone ? client.spouseCellphone : '—'}
        </Typography>

        <Typography variant="title15" style={{ width: 120 }} >
          {client.dateAdded}
        </Typography>

      <Wrapper type="row" style={{ gap: 8, width: 120 }}>
        {getStatusIcon(client.conversationStatus)}

        <Typography 
          variant="title15" 
          style={{ width: 120 }}
        >
          {client.conversationStatus}
        </Typography>
      </Wrapper>

      <Wrapper type="row">    
        <AccordionIcon 
            size={22} color="var(--middle-grey)" 
            style={{ transform: 'rotate(-90deg)', width: 50 }} 
        />
      </Wrapper>
    </div>
  );
};
