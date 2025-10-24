import React from 'react';
import { Wrapper } from '../wrapper/PageWrapper';
import { Typography } from '../typography/Typography';
import { CheckmarkIcon, AvaIcon, AlertIcon } from '../icons/index';
import { Spacer } from '../spacer/Spacer';

export interface MessageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isReceived?: boolean;
  senderName?: string;
  senderPhone?: string;
  timestamp?: string;
  isRead?: boolean;
  agent?: boolean;
}

const styles = {
  messageBubble: {
    padding: '12px 16px',
    borderRadius: '18px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.4,
    wordWrap: 'break-word' as const,
    maxWidth: 360,
  } as React.CSSProperties,
  
  receivedBubble: {
    backgroundColor: 'var(--ultra-light-grey)',
    color: 'var(--dark-grey)',
    borderBottomLeftRadius: '4px',
  } as React.CSSProperties,
  
  sentBubble: {
    backgroundColor: 'var(--secondary-color)',
    color: 'var(--white)',
    borderBottomRightRadius: '4px',
  } as React.CSSProperties,

  unreadBubble: {
    border: '2px solid var(--secondary-color)',
    backgroundColor: 'var(--white)',
    color: 'var(--secondary-color)',
  } as React.CSSProperties,

};

export const MessageCard: React.FC<MessageCardProps> = ({ 
  children, 
  isReceived = true,
  senderName,
  senderPhone,
  timestamp,
  isRead = false,
  agent = false,
}) => {

  const bubbleStyle = {
    ...styles.messageBubble,
    ...(isReceived ? styles.receivedBubble : styles.sentBubble),
    ...(!isRead && styles.unreadBubble),
  };

  return (
    <>
       <Wrapper 
        type="row" 
        style={{ 
          gap: 16, 
          alignItems: 'center', 
          paddingBottom: 8, 
          width: 520, 
          justifyContent: isReceived ? 'flex-start' : 'flex-end',
        }}
       >

        <Wrapper type="column" style={{ gap: 4, alignItems: 'center'}}>
          <AvaIcon size={34} color="var(--middle-grey)" />
       
          <Wrapper type="row" style={{ gap: 4, alignItems: 'center'}}>
            {timestamp && <Typography variant="title12" color="var(--dark-grey)">{timestamp}</Typography>}

            {isRead && <CheckmarkIcon size={12} color="var(--secondary-color)" />}
            {!isRead && <AlertIcon size={14} color="var(--secondary-color)" />}
          </Wrapper>
          {!isRead && <Typography variant="title12" color="var(--secondary-color)" style={{ fontWeight: 400 }}>Unread</Typography>}
        </Wrapper>

        <Wrapper type="column" style={{ gap: 4, alignItems: 'flex-start', paddingBottom: 8, maxWidth: 500, justifyContent: 'flex-end' }}>
          <Wrapper type="row" style={{ gap: 8, alignItems: 'center', paddingBottom: 8, paddingLeft: 13 }}>
            
            {agent && (<Typography variant="titleSmall" style={{ fontWeight: 400 }}>Agent:</Typography>)}

            <Typography variant="titleSmall">{senderName}</Typography>
            <Typography variant="titleSmall" style={{ fontWeight: 400 }}>Sent: {senderPhone}</Typography>
          </Wrapper>
          
          <div style={{ ...bubbleStyle }}>
            {children}
          </div>
        </Wrapper>
      </Wrapper>

      <Spacer customSize={20} />

    </>
  );
};
