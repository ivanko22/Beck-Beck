import React from 'react';
import { Typography } from '../../components/typography/Typography';
import { Card } from '../../components/card/Card';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { Input } from '../../components/input/Inputs';
import { Spacer } from '../../components/spacer/Spacer';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { Upload } from '../../components/upload/Upload';
import { Button } from '../../components/button/Button';
import { EditIcon, EmailIcon, RightArrowIcon, TextIcon, CheckmarkIcon, ESignIcon, PhoneIcon } from '../../components/icons';
import { TableHeader } from '../../components/table/TableHeader';
import { BaseDropdown } from '../../components/dropdown/Dropdown';

interface DemandOffer {
  id: string;
  amount: string;
  date: string;
  sent?: boolean;
}

interface InsuranceOffer {
  id: string;
  amount: string;
  date: string;
  received?: boolean;
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
  negotiationData: NegotiationData;
  style?: React.CSSProperties;
}

export const SettlementNegotiationsCard: React.FC<SettlementNegotiationsCardProps> = ({
  negotiationData,
}) => {
  return (
    <Wrapper type="column" style={{ gap: 0 }}>
      <Spacer customSize={20} />

      <Wrapper type="row" style={{ justifyContent: 'space-between' }}>
        <Wrapper type="row" style={{ gap: 24, paddingLeft: 25 }}>
          <Typography variant="secondaryTitle" style={{ fontWeight: 500 }}>{negotiationData.insuranceCompany}</Typography>
          <Typography variant="secondaryTitle" color="var(--middle-grey)" style={{ fontWeight: 400 }}>/ {negotiationData.caseNumber}</Typography>
        </Wrapper>

        <Wrapper type="row" style={{ justifyContent: 'flex-end', gap: 10, alignItems: 'center', marginRight: 30 }}>
          <Typography variant="title17" color="var(--primary-color)">{negotiationData.clientName}</Typography>
          
          <Wrapper type="row" style={{ gap: 10, alignItems: 'center' }}> 
            <PhoneIcon size={20} color="var(--middle-grey)" />
            <Typography variant="title18" color="var(--primary-color)">{negotiationData.primaryPhone}</Typography>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Card style={{ width: 'fit-content' }}>
        <Wrapper type="column">
          <TableHeader
              columns={[
                { label: 'Client Info', width: '238px' },
                { label: 'Policy Limit(s) Available', width: '224px' },
                { label: 'Insurance Company Demand Sent To', width: '213px' },
                { label: 'Demand Sent Date', width: '130px' },
                { label: 'Adjuster Email Address', width: '230px' },
                { label: 'Demand and Counter Demand Amount', width: '174px' },
                { label: 'Insurance Offer(s)', width: '160px' },
                { label: 'Negotiation Notes', width: '366px' },
                { label: 'Accepted Settlement', width: '230px' },
                { label: 'Settlement Release Received', width: '226px' },
                { label: 'Release Sent to Client?', width: '196px' },
                { label: 'Release Signed, Received & Sent to Adjuster', width: '200px' },
                { label: 'Check Received?', width: '198px' },
                { label: 'Misc. Notes', width: '440px' },
              ]}
              useSpecificWidths={true}
              style={{ gap: 30 }}
          />

          <Spacer customSize={5} />

          <Wrapper type="row" style={{ paddingLeft: 25, gap: 30 }}>
            <Wrapper type="column" style={{alignItems: 'flex-start', width: 213}}>
              <Typography variant="title16" color="var(--primary-color)" style={{paddingBottom: 8}}>
                {negotiationData.clientName}
              </Typography>
              
              <Wrapper type="row" style={{ gap: 10 }}>
                <Typography variant="title16" style={{fontWeight: 400}}>Prim:</Typography>
                <Typography variant="title18" color="var(--primary-color)" style={{fontWeight: 500}}>{negotiationData.primaryPhone}</Typography>
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

            <Typography variant="title15" style={{ width: 224 }}>
              {negotiationData.note}
            </Typography>

            <BaseDropdown 
              style={{ width: 180 }}
              type="BaseDropdown"
              label="Ins. Companies"
              value="Ins. Companies"
              menuItems={[
                { label: 'State Farm' },
                { label: 'Dropdown Item 2' },
                { label: 'Geico' },
                { label: 'Progressive' },
                { label: 'Allstate' },
                ]}
            />

            <Typography variant="title15" style={{ width: 130, textAlign: 'center' }}>
              {negotiationData.demandSentDate}
            </Typography> 

            <Typography variant="title15" style={{ width: 230 }}>
              {negotiationData.adjusterEmail}
            </Typography>

            <Wrapper type="column" style={{ gap: 10, width: 174 }}>
              <Input
                value={negotiationData.demandsOffers[0].amount}
                customSize={{ width: '120px' }}
                label="Demand 1"
                noBorder={true}
                onChange={() => {}}
                style={{ gap: 0 }}
              />
              <Wrapper type="column" style={{ gap: 6, paddingLeft: 16 }}>
                <Typography variant="titleSmall" style={{ fontWeight: 400 }}>
                  Sent:
                </Typography>
                <Typography variant="titleSmall">
                  {negotiationData.demandsOffers[0].date}
                </Typography>
              </Wrapper>
            </Wrapper>

            <Wrapper type="column" style={{ gap: 10, width: 160 }}>
              <Input
                value={negotiationData.insuranceOffer[0].amount}
                customSize={{ width: '120px' }}
                label="Offer 1"
                noBorder={true}
                onChange={() => {}}
                style={{ gap: 0 }}
              />
              <Wrapper type="column" style={{ gap: 6, paddingLeft: 16 }}>
                <Typography variant="titleSmall" style={{ fontWeight: 400 }}>
                  Received:
                </Typography>
                <Typography variant="titleSmall">
                  {negotiationData.insuranceOffer[0].date}
                </Typography>
              </Wrapper>
            </Wrapper>

            <Input
              inputType="textarea"
              value={negotiationData.negotiationNotes[0]}
              customSize={{ width: '320px', height: '160px' }}
              label="Negotiation Notes"
              onChange={() => {}}
              style={{ justifyContent: 'flex-start' }}
              size="medium"
            />

            <Wrapper type="column" style={{ gap: 10, width: 230}}>
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
                  {negotiationData.settlementAccepted?.date}
                </Typography>
              </Wrapper>
            </Wrapper>

            <Wrapper type="column" style={{ gap: 10, alignItems: 'center', width: 230 }}>
              <Button
                label="Settlement Received"
                size="small"
                onClick={() => {}}
                icon={<CheckmarkIcon size={20} />}
              />

              <Wrapper type="row" style={{ gap: 6 }}>
                <Typography variant="titleSmall" style={{ paddingLeft: 16, fontWeight: 400 }}>
                  On
                </Typography>
                <Typography variant="titleSmall">
                  {negotiationData.settlementReleaseReceived?.date}
                </Typography>
              </Wrapper>

              <Upload
                vertical
                label="Click or Drag Files to Upload Here"
                withBorder={true}
                style={{ marginTop: 10, height: '90px', width: '140px' }}
              />
            </Wrapper>

            <Wrapper type="column" style={{ gap: 24, alignItems: 'center', width: 200 }}>
              <Button
                label={negotiationData.releaseSentToClient?.date}
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

            <Wrapper type="column" style={{ gap: 24, alignItems: 'center', width: 200 }}>
              <Typography variant="title15" style={{ textAlign: 'center' }}>
                {negotiationData.releaseSignedReceived?.adjusterEmail}
              </Typography>

              <Wrapper type="row" style={{ gap: 6 }}>
                <Typography variant="titleSmall" style={{ paddingLeft: 16, fontWeight: 400 }}>
                  On
                </Typography>
                <Typography variant="titleSmall">
                  {negotiationData.releaseSignedReceived?.date}
                </Typography>
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
                    {negotiationData.releaseSignedReceived?.signedDate}
                  
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

            <Wrapper type="column" style={{ gap: 24, alignItems: 'center', width: 220 }}>
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

            <Wrapper type="column" style={{ width: 440 }}>
              <Input
                value={negotiationData.miscNotes}
                placeholder="Enter miscellaneous notes..."
                customSize={{ width: '440px', height: '215px' }}
                showLabel={false}
                inputType="textarea"
                onChange={() => {}}
                size="medium"
              />
            </Wrapper>

          </Wrapper>
        </Wrapper>
      </Card>
    </Wrapper>
  );
};
