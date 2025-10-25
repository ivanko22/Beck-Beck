import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/header/Header';
import { Navigation } from '../../../components/navigation/Navigation';
import { TableHeader } from '../../../components/table/TableHeader';
import { Wrapper } from '../../../components/wrapper/PageWrapper';
import { RightArrowIcon, CheckmarkIcon, PlusIcon, StethoscopeIcon, TextIcon } from '../../../components/icons/index';
import { RowManualTexting } from '../../../components/row/RowManualTexting';
import { MessageCard } from '../../../components/card/MessageCard';
import { Card } from '../../../components/card/Card';
import { Typography } from '../../../components/typography/Typography';
import { Input } from '../../../components/input/Inputs';
import { Button } from '../../../components/button/Button';
import { Spacer } from '../../../components/spacer/Spacer';
import { Radio } from '../../../components/radiobutton/Radiobutton';
import { AccordionIcon } from '../../../components/icons/index';

export interface ManualTextingProps {
  clients: {
    id: string;
    name: string;
    mostRecentText: string;
    cellphone: string;
    spouseCellphone: string;
    dateAdded: string;
    conversationStatus: 'Responsed' | 'Pending' | 'Removed' | 'Unanswered';
  }[];
  showMessaging?: boolean;
  onAddClient?: () => void;
  onViewConversation?: (clientId: string) => void;
  onRefreshClient?: (clientId: string) => void;
  messageHistory?: any;
}

export const ManualTexting: React.FC<ManualTextingProps> = ({ 
  clients,
  showMessaging = false,
  onViewConversation,
  onRefreshClient,
}) => {

  const [messaging, setMessaging] = useState(false);
  const [client, setClient] = useState<{name: string, cellphone: string, spouseCellphone: string, messageHistory?: any[]} | null>(null);

  useEffect(() => {
    if (showMessaging) {
      setMessaging(true);
      setClient(clients[2]);
    }
  }, [showMessaging]);

  return (
    <Wrapper type="pageWrapper">
      <Navigation
        userEmail="ivankordonets@gmail.com"
      />

      <Wrapper type="mainWrapper">
        <Header
          section="Manual Texting"
          current={messaging ? client?.name : ''}
          rightButtonLabel={messaging ? '' : 'Add Client'}
          buttonIcon={<PlusIcon size={16} />}
          onClose={messaging ? () => setMessaging(false) : undefined}
        />



        {( !messaging && 
          <Wrapper type="contentWrapper" style={{ gap: 0 }}>
            <TableHeader
              columns={[
                { 
                  label: 'Last First Name', 
                  width: '200px',
                  style: { marginLeft: '26px' }
                },
                { 
                  label: 'Most Recent Text', 
                  width: '300px',
                  style: { marginLeft: '17px' }
                },
                { 
                  label: 'Cellphone', 
                  width: '150px',
                  style: { marginLeft: '17px' }
                },
                { 
                  label: 'Spouse Cellphone', 
                  width: '150px',
                  style: { marginLeft: '17px' }
                },
                { 
                  label: 'Date added', 
                  width: '120px',
                  style: { marginLeft: '17px' }
                },
                { 
                  label: 'Conversation', 
                  width: '120px',
                  style: { marginLeft: '17px' }
                },
                { 
                  label: '', 
                  width: '50px',
                  style: { marginLeft: '17px' }
                }
              ]}
              activeColumn={0}
              useSpaceBetween={true}
            />

            {clients.map((client) => (
              <RowManualTexting
                key={client.id}
                client={client}
                onViewConversation={() => onViewConversation?.(client.id)}
                onRefreshClient={() => onRefreshClient?.(client.id)}
                onToggleMessaging={() => 
                  {
                    console.log('toggle messaging', client.id, client.name, client.mostRecentText, client.cellphone, client.spouseCellphone, client.dateAdded, client.conversationStatus)
                    setMessaging(true);
                    setClient(client);
                  }
                }
              />
            ))}

            {clients.length === 0 && (
              <div style={{ 
                textAlign: 'center', 
                padding: '40px',
                color: 'var(--middle-grey)'
              }}>
                No clients found. Add a client to get started.
              </div>
            )}
        </Wrapper>)}
          
        {messaging && (
          <Wrapper type="contentWrapper" style={{ gap: 0, alignItems: 'center' }}>
            
            <Wrapper type="row" style={{ width: '100%', justifyContent: 'space-between' }}>
              <Button
                label="Back"
                size="medium"
                icon={<AccordionIcon size={20} style={{ transform: 'rotate(90deg)' }} />} 
                onClick={() => setMessaging(false)}
              />

              <Button
                label="Text This Files Client"
                size="medium"
                iconPosition="left"
                icon={<TextIcon size={20} />} 
              />
            </Wrapper>  

            <Spacer customSize={70} />

            <Wrapper type="row" style={{ gap: 100 }}>
              <Wrapper type="column">
                <Spacer customSize={40} />

                <Typography variant="title16" style={{ fontWeight: 500 }}>Sent Message By:</Typography>
                <Spacer customSize={10} />

                <Radio
                  label="Cellphone"
                  checked={true}
                />
                <Typography variant="title18" style={{paddingLeft: 34, fontWeight: 500 }}>{client?.cellphone}</Typography>
                
                <Spacer customSize={10} />

                <Radio
                  label="Spouse Cellphone"
                  checked={false}
                />
                <Typography variant="title18" style={{paddingLeft: 34, fontWeight: 500 }}>{client?.spouseCellphone}</Typography>
              </Wrapper>

              <Wrapper type="column" style={{gap: 0, justifyContent: 'flex-end' }}>
                <Typography variant="titleSmall" color="var(--middle-grey)" style={{ textAlign: 'left', fontWeight: 400, paddingLeft: 30 }}>Conversation</Typography>

                <Card style={{ width: 520, borderRadius: 30, gap: 0 }}>

                  {client?.messageHistory?.map((message: any) => (
                    <MessageCard
                      key={message.id}
                      isReceived={message.isReceived}
                      senderName={message.sender}
                      senderPhone={message.senderPhone}
                      timestamp={message.timestamp}
                      isRead={message.isRead}
                      agent={message.agent}
                    >
                      {message.text}
                    </MessageCard>
                  ))}

                  <Wrapper type="row" style={{ gap: 18, alignItems: 'flex-end', borderTop: '1px solid var(--light-grey)' }}>
                    <Input
                      size="large"
                      placeholder="Type your message..."
                      customSize={{ width: '460px' }}
                    />
                    <Button 
                      primary={true}
                      customSize="48px"
                      size="medium" 
                      iconPosition="center"
                      icon={<RightArrowIcon size={20} color="currentColor" style={{ transform: 'rotate(-90deg)'}} />} 
                    />
                  </Wrapper>
        
                </Card>

                <Spacer customSize={16} />

                <Wrapper type="row" style={{ width: '100%', justifyContent: 'center' }}>
                  <Button
                    label="Still Treating"
                    size="medium"
                    icon={<StethoscopeIcon size={20} color="currentColor" />} 
                  />
                  <Button
                    label="New Providers"
                    size="medium"
                    icon={<PlusIcon size={18} color="currentColor" />} 
                  />
                  <Button
                    label="Confirm End"
                    size="medium"
                    icon={<CheckmarkIcon size={20} color="currentColor" />} 
                  />
                </Wrapper>
              </Wrapper>
              <Spacer horizontal customSize={70} />
            </Wrapper>

          </Wrapper>
        )}

      </Wrapper>
    </Wrapper>
  );
};
