import React, {useState} from 'react';
import { Typography } from '../../components/typography/Typography';
import { Card } from '../../components/card/Card';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { Input } from '../../components/input/Inputs';
import { Spacer } from '../../components/spacer/Spacer';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { Upload } from '../../components/upload/Upload';
import { Button } from '../../components/button/Button';
import { EditIcon, EmailIcon, RightArrowIcon, TextIcon, CheckmarkIcon, ESignIcon, PhoneIcon, PlusIcon, AccordionIcon } from '../../components/icons';
import { TableHeader } from '../../components/table/TableHeader';
import { BaseDropdown } from '../../components/dropdown/Dropdown';
import { StatusItem } from '../../components/case-status/CaseStatusItem';

interface DemandOffer {
  id: string;
  amount: string;
  date: string;
  sent?: boolean;
  status?: string;
}

interface InsuranceOffer {
  id: string;
  amount: string;
  date: string;
  received?: boolean;
  status?: string;
}

interface NegotiationData {
  id: string;
  caseNumber: string;
  insuranceCompany: string;
  clientName: string;
  primaryPhone: string;
  momsPhone: string;
  email: string;
  note: string;
  status?: {
    text: string;
  };
  policyLimitsAvailable?: string;
  demandSentDate: string;
  adjusterEmail: string;
  demandsOffers: DemandOffer[];
  insuranceOffer: InsuranceOffer[];
  negotiationNotes: string[];
  settlementAccepted?: {
    accepted: boolean;
    date: string;
  };
  settlementReleaseReceived?: {
    received: boolean;
    date?: string;
  };
  releaseSentToClient?: {
    date: string;
    sentBySnailMail: boolean;
    sentElectronically: boolean;
  };
  releaseSignedReceived?: {
    adjusterEmail: string;
    date: string;
    signedDate: string;
  };
  checkReceived?: {
    received: boolean;
    date?: string;
  };
  miscNotes: string;
}
interface SettlementNegotiationsCardProps {
  type?: 'negotiations' | 'statement';
  negotiationData: NegotiationData;
  style?: React.CSSProperties;
}

export const SettlementNegotiationsCard: React.FC<SettlementNegotiationsCardProps> = ({
  type,
  negotiationData,
}) => {
  const [isOpen, setIsOpen] = useState(type === 'negotiations' ? false : true);

  const styles = {
    cardContainer: {
      height: isOpen ? '50px' : 'auto',
      padding: type === 'negotiations' ? '25px 25px 25px 25px' : '12px 7px 25px 7px',
      width: 'fit-content',
      overflow: 'hidden',
    },
  };

  return (
    <Wrapper type="column" style={{ gap: 0 }}>
      {((type === 'negotiations') && (
        <Spacer customSize={20} />
      ))}

      {type === 'negotiations' && (    
        <Wrapper type="row" style={{ justifyContent: 'space-between' }}>
          <Wrapper type="row" style={{ gap: 10, alignItems: 'center', ...(type === 'negotiations' ? { paddingLeft: 25 } : { paddingLeft: 0 }) }}>
            <Typography variant="secondaryTitle" style={{ fontWeight: 500 }}>{negotiationData.insuranceCompany}</Typography>
            <Typography variant="title15" color="var(--middle-grey)">/ {negotiationData.caseNumber}</Typography>
          </Wrapper>

          <Wrapper type="row" style={{ justifyContent: 'flex-end', gap: 10, alignItems: 'center', marginRight: 30 }}>
            <Typography variant="title17" color="var(--primary-color)">{negotiationData.clientName}</Typography>
            
            <Wrapper type="row" style={{ gap: 10, alignItems: 'center' }}> 
              <PhoneIcon size={20} color="var(--middle-grey)" />
              <Typography variant="title18" color="var(--primary-color)">{negotiationData.primaryPhone}</Typography>
            </Wrapper>
          </Wrapper>
        </Wrapper>)}

      <Card 
        style={styles.cardContainer}>
        <Wrapper type="column" style={{ gap: 0 }}>
          {(type !== 'statement' && (
            <TableHeader
              columns={[
                { label: 'Client Info', width: '238px' },
                { label: 'Policy Limit(s) Available', width: '226px' },
                { label: 'Insurance Company Demand Sent To', width: '256px' },
                { label: 'Demand Sent Date', width: '136px' },
                { label: 'Adjuster Email Address', width: '230px' },
                { label: 'Demand and Counter Demand Amount', width: '174px' },
                { label: 'Insurance Offer(s)', width: '173px' },
                { label: 'Negotiation Notes', width: '356px' },
                { label: 'Accepted Settlement', width: '210px' },
                { label: 'Settlement Release Received', width: '226px' },
                { label: 'Release Sent to Client?', width: '196px' },
                { label: 'Release Signed, Received & Sent to Adjuster', width: '200px' },
                { label: 'Check Received?', width: '210px' },
                { label: 'Misc. Notes', width: '440px' },
              ]}
              useSpecificWidths={true}
              style={{ gap: 30, marginBottom: 20}}
            /> 
          ))}
   
          <Spacer customSize={5} />
          <Wrapper type="row" style={{ paddingLeft: type === 'statement' ? 0 : 25, gap: 30 }}>
            {type === 'statement' && (
              <Wrapper type='row'>
                <Wrapper type="column" style={{ paddingTop: 4 }}>
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    size="medium"
                    icon={<AccordionIcon size={28} style={{transform: !isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />}
                  />
                </Wrapper>

                <Wrapper type="column" style={{ alignItems: 'flex-start', width: 213, paddingTop: 4 }}>
                  <StatusItem
                    statusText={negotiationData.status?.text || 'No Status'}
                    identifier={negotiationData.caseNumber}
                  />

                  <Button
                    label="Edit Offer"
                    onClick={() => {}}
                    size="medium"
                    icon={<EditIcon size={22} />}
                  />
                 
                </Wrapper>
              </Wrapper>
            )}

            <Wrapper type="column" style={{alignItems: 'flex-start', width: 213}}>
              
              <Wrapper type="column" style={{ gap: 0 }}>
                <Typography variant="title16" color="var(--primary-color)" style={{paddingBottom: 8}}>
                  {negotiationData.clientName}
                </Typography>

                <Wrapper type="row" style={{ gap: 10, alignItems: 'center' }}>
                  <Typography variant="title16" style={{fontWeight: 400}}>Prim:</Typography>
                  <Typography variant="title18" color="var(--primary-color)" style={{fontWeight: 500}}>{negotiationData.primaryPhone}</Typography>
                </Wrapper>
              </Wrapper>

                <Wrapper type="row" style={{ gap: 10 }}>
                  <Typography variant="title16" style={{fontWeight: 400}}>Mom:</Typography>
                  <Typography variant="title16" color="var(--primary-color)" style={{fontWeight: 500}}>{negotiationData.momsPhone}</Typography>
                </Wrapper>

                <Wrapper type="column" style={{ gap: 0, marginLeft: -20 }}>
                  <Button
                    label="Send Text"
                    onClick={() => {}}
                    size="medium"
                    icon={<TextIcon size={22} />}
                  />

                  <Button
                    label="Send Message"
                    onClick={() => {}}
                    size="medium"
                    icon={<EmailIcon size={22} />}
                  />
                </Wrapper>

            </Wrapper>

            <Typography variant="title15" style={{ width: 224, paddingTop: 6}}>
              {negotiationData.note}
            </Typography>

            <Wrapper type="row" style={{ marginTop: -29 }}>
              <BaseDropdown 
                style={{ width: 200 }}
                type="BaseDropdown"
                value={negotiationData.insuranceCompany}
                disabled={ type === 'statement' }
                noBorder={ type === 'statement' }
                menuItems={[
                  { label: 'State Farm' },
                  { label: 'Dropdown Item 2' },
                  { label: 'Geico' },
                  { label: 'Progressive' },
                  { label: 'Allstate' },
                  ]}
              />
            </Wrapper>

            <Typography variant="title15" style={{ width: 160, textAlign: 'center', paddingTop: 16 }}>
              {negotiationData.demandSentDate}
            </Typography> 

            <Typography variant="title15" style={{ width: 230, paddingTop: 16 }}>
              {negotiationData.adjusterEmail}
            </Typography>

            <Wrapper type="column" style={{ gap: 6, width: 174, marginTop: -24 }}>
              {negotiationData.demandsOffers.map((demand, index) => (
                <>
                  <Input
                    value={demand.amount}
                    customSize={{ width: '120px', height: '28px' }}
                    label={ type === 'negotiations' ? `Demand ${index + 1}` : 
                    (demand.status === 'Created' ? 'Created Demand' : 
                     index === negotiationData.demandsOffers.length - 1 ? 
                      'Previous Demand' : `Last Demand ${index + 1}`) }
                    noBorder={true}
                    onChange={() => {}}
                    style={{ gap: 0 }}
                  />
                  
                  <Wrapper type="column" style={{ gap: 6, paddingLeft: 16 }}>
                    <Typography variant="titleSmall" style={{ fontWeight: 400 }}>
                      {demand.status}
                    </Typography>
                    <Typography variant="titleSmall">
                      {demand.date}
                    </Typography>
                  </Wrapper>
                    
                </>
              ))}
              
              <Spacer customSize={10} />

              <Button
                label={
                  negotiationData?.demandsOffers[negotiationData.demandsOffers.length - 1]?.status 
                  === 'Created' ? `Send Demand ${negotiationData.demandsOffers.length}` 
                  : `Add Demand ${negotiationData.demandsOffers.length + 1}`}
                size="small"
                onClick={() => {}}
                icon={negotiationData?.demandsOffers[negotiationData.demandsOffers.length - 1]?.status 
                  === 'Created' ? <EmailIcon size={20} /> 
                  : <PlusIcon size={20} />}
              />
            </Wrapper>

            <Wrapper type="column" style={{ gap: 6, width: 160, marginTop: -24}}>
              {(negotiationData?.insuranceOffer.map((offer, index) => (
                  <>
                    <Input
                      value={offer.amount}
                      customSize={{ width: '120px', height: '28px' }}
                      label={ type === 'negotiations' ? `Offer ${index + 1}` : (index === negotiationData.insuranceOffer.length - 1 ? 'Previous Offer' : `Last Offer ${index + 1}`) }
                      noBorder={true}
                      onChange={() => {}}
                      style={{ gap: 0 }}
                    />
                    
                    <Wrapper type="column" style={{ gap: 6, paddingLeft: 16 }}>
                      <Typography variant="titleSmall" style={{ fontWeight: 400 }}>
                        {negotiationData?.insuranceOffer[index].status}
                      </Typography>
                      <Typography variant="titleSmall">
                        {offer.date}
                      </Typography>
                    </Wrapper>
                      
                    </>
                  )))}

                  <Spacer customSize={10} />

                  <Button
                    label={
                      negotiationData?.insuranceOffer[negotiationData.insuranceOffer.length - 1]?.status 
                      === 'Created' ? `Send Offer ${negotiationData.insuranceOffer.length}` 
                      : `Add Offer ${negotiationData.insuranceOffer.length + 1}`}
                    size="small"
                    onClick={() => {}}
                    icon={negotiationData?.insuranceOffer[negotiationData.insuranceOffer.length - 1]?.status 
                      === 'Created' ? <EmailIcon size={20} /> 
                      : <PlusIcon size={20} />}
              />
            </Wrapper>

            <Input
              inputType="textarea"
              value={negotiationData?.negotiationNotes?.[0]}
              customSize={{ width: '320px', height: isOpen ? '50px' : '200px' }}
              onChange={() => {}}
              disabled
              noBorder={true}
              style={{ justifyContent: 'flex-start' }}
              size="medium"
            />

            <Wrapper type="column" style={{ gap: 10, width: 230, marginTop: -2}}>
              <Wrapper type="column" style={{ gap: 0 }}>
                <Button
                  label="Settlement Accepted"
                  size="small"
                  onClick={() => {}}
                  icon={<CheckmarkIcon size={16} />}
                />

                <Wrapper type="row" style={{ gap: 6, paddingLeft: 31 }}>
                  <Typography variant="titleSmall" style={{ paddingLeft: 16, fontWeight: 400 }}>
                    On
                  </Typography>
                  <Typography variant="titleSmall">
                    {negotiationData?.settlementAccepted?.date}
                  </Typography>
                </Wrapper>
              </Wrapper>
              
            </Wrapper>

            <Wrapper type="column" style={{ gap: 10, alignItems: 'center', width: 230 }}>
              <Wrapper type="column" style={{ gap: 0 }}>
                <Button
                  label="Settlement Received"
                  size="small"
                  onClick={() => {}}
                  icon={<CheckmarkIcon size={20} />}
                />

                <Wrapper type="row" style={{ gap: 6, paddingLeft: 31 }}>
                  <Typography variant="titleSmall" style={{ paddingLeft: 16, fontWeight: 400 }}>
                    On
                  </Typography>
                  <Typography variant="titleSmall">
                    {negotiationData?.settlementReleaseReceived?.date}
                  </Typography>
                </Wrapper>
              </Wrapper>

              <Upload
                vertical
                label="Click or Drag Files to Upload Here"
                withBorder={true}
                style={{ marginTop: 10, height: '90px', width: '140px' }}
              />
            </Wrapper>

            <Wrapper type="column" style={{ gap: 24, alignItems: 'center', width: 200, paddingTop: 10 }}>
              <Button
                label={negotiationData?.releaseSentToClient?.date}
                size="small"
                onClick={() => {}}
                icon={<RightArrowIcon size={20} />}
              />

              <Wrapper type="column" style={{ gap: 20 }}>
                <Checkbox 
                  label='Sent by Snail Mail'
                  checked
                  disabled
                  style={{fontSize: '14px'}}
                />

                <Checkbox 
                  label='Sent Electronically'
                  checked
                  disabled
                  style={{fontSize: '14px'}}
                />
              </Wrapper>
              
              <Button
                label="Jump to e-Sign"
                size="small"
                onClick={() => {}}
                icon={<ESignIcon size={20} />}
              />
            </Wrapper>

            <Wrapper type="column" style={{ gap: 24, alignItems: 'center', width: 200, paddingTop: 4 }}>
              <Wrapper type="column" style={{ gap: 6 }}>
                <Typography variant="title15" style={{ textAlign: 'center' }}>
                  {negotiationData?.releaseSignedReceived?.adjusterEmail}
                </Typography>

                <Wrapper type="row" style={{ gap: 6 }}>
                  <Typography variant="titleSmall" style={{ paddingLeft: 16, fontWeight: 400 }}>
                    On
                  </Typography>
                  <Typography variant="titleSmall">
                    {negotiationData?.releaseSignedReceived?.date}
                  </Typography>
                </Wrapper>
              </Wrapper>
       

              <Upload
                vertical
                label="Click or Drag to Replace"
                withBorder={true}
                style={{ marginTop: 10, height: '90px', width: '140px' }}
              />

              <Button
                label="Email Signed Release to Adjuster"
                customSize="200px"
                onClick={() => {}}
                size="small"
                icon={<EmailIcon size={22} />}
              />

              <Wrapper type="column" style={{ gap: 6, paddingLeft: 16, width: 240, alignItems: 'center' }}>
                <Wrapper type="column" style={{ gap: 6, alignItems: 'flex-start' }}>
                  <Typography variant="titleSmall" style={{ fontWeight: 400 }}>
                    Signed Date:
                  </Typography>
                  
                  <Typography variant="titleSmall" style={{ display: 'flex', alignItems: 'center' }}>
                    {negotiationData?.releaseSignedReceived?.signedDate}
                  
                    <div style={{ marginLeft: -8 }}> 
                      <Button
                          size="small"
                          onClick={() => {}}
                          icon={<EditIcon size={16} />}
                        />
                    </div>
                  </Typography>
                </Wrapper>
                
              </Wrapper>
            </Wrapper>

            <Wrapper type="column" style={{ gap: 24, alignItems: 'center', width: 220, paddingTop: 12 }}>
              <Checkbox 
                label={`Yes, on ${negotiationData.checkReceived?.date}`}
                checked
                disabled
                style={{fontSize: '14px'}}
              />

              <Upload
                vertical
                label="Click or Drag to Replace"
                withBorder={true}
                style={{ marginTop: 10, height: '90px', width: '140px' }}
              />
            </Wrapper>

            <Wrapper type="column" style={{ width: 440, marginTop: isOpen ? -14 : 0 }}>
              <Input
                value={negotiationData.miscNotes}
                placeholder="Enter miscellaneous notes..."
                customSize={{ width: '440px', height: '215px' }}
                showLabel={false}
                inputType="textarea"
                onChange={() => {}}
                size="medium"
                disabled
                noBorder={true}
              />
            </Wrapper>

            {type === 'statement' && (
              <Wrapper type='row'>
                <Wrapper type="column" style={{ paddingTop: 4, alignItems: 'flex-start'}}>
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    size="medium"
                    icon={<AccordionIcon size={28} style={{transform: !isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />}
                  />
                </Wrapper>
              </Wrapper>
            )}

          </Wrapper>
        </Wrapper>
      </Card>

    </Wrapper>
  );
};
