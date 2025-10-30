import React from 'react';
import { Typography } from '../../components/typography/Typography';
import { Card } from '../../components/card/Card';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { Spacer } from '../../components/spacer/Spacer';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { Button } from '../../components/button/Button';
import { EmailIcon, TextIcon, AccordionIcon } from '../../components/icons';
import { BaseDropdown } from '../../components/dropdown/Dropdown';

export interface ClientDashboardCase {
  id: string;
  caseNumber: string;
  status: {
    text: string;
    color: string;
  };
  clientName: string;
  primaryPhone: string;
  momsPhone: string;
  email: string;
  casePlan: string;
  bigPolicy: boolean;
  bigInjury: boolean;
  injuryDescription: string;
  clientStatusDetails: string;
  lorSent: {
    date: string;
    event: string;
    status?: string;
  }[];
  medRecsOrdered: {
    someOrdered: boolean;
    allOrdered: boolean;
    allOrderedDate: string;
  };
  liabilityLimits: {
    wasInCar: boolean;
    insurances: string[];
    UmbrellaExcess: string;
  };
  clientUIMlimits: string;
  residentUMUIMLimits: string;
  medpay: string;
  atFaultDriverOtherPolicies: boolean;
  subroSetup: string;
  wageLoss: string;
  demandSentStatus: string;
  settlementAcceptedRelease: string;
  checkReceived: string;
  caseAge: number;
  billingPacketSent: string;
  policyReportOrdered: string;
  totalCurrentBills: string;
  menuItems: {label: string, icon?: React.ComponentType<any>}[];
}

interface ClientDashboardCardProps {
  caseData: ClientDashboardCase;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const ClientDashboardCard: React.FC<ClientDashboardCardProps> = ({
  caseData,
  isOpen = true,
  onToggle,
}) => {

  const styles = {
    cardContainer: {
      flexDirection: 'row' as const,
      justifyContent: 'flex-start',
      height: isOpen ? 'auto' : '54px',
      padding: '8px 7px 12px 7px',
      marginTop: 8,
      marginBottom: 4,
      width: 'fit-content',
      overflow: 'hidden',
      gap: 20,
    },
  };

  return (
    <Card style={styles.cardContainer}>
      <Wrapper type="column" style={{ width: 300, gap: 16 }}>
        <Wrapper type="row" style={{ alignItems: 'center', gap: 14 }}>
          <Wrapper type="row" style={{ paddingTop: 6, width: 57 }}>
            <Button
              onClick={onToggle}
              size="medium"
              icon={<AccordionIcon size={26} style={{transform: !isOpen ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.2s ease' }} />}
            />
          </Wrapper>
            
          <Wrapper type="row" style={{ width: '220px', height: '44px', alignItems: 'center', gap: 16 }}>            
            <BaseDropdown
              type="statusDropdown"
              value={caseData.status.text}
              caseNumber={caseData.caseNumber}
              menuItems={caseData.menuItems}
            />
          </Wrapper>
        </Wrapper>

        <Wrapper type="row" style={{ marginLeft: 3 }}>
          <Button
            label="Email to Demand Writer"
            onClick={() => {}}
            size="small"
            icon={<EmailIcon size={24} />}
          />
        </Wrapper>

        <Wrapper type="column" style={{ gap: 6, paddingLeft: 80 }}>
          <Typography variant="titleSmall" color='var(--primary-color)' style={{ fontWeight: 400 }}>Billing Packet</Typography>
          <Wrapper type="row" style={{ gap: 6 }}>
            <Typography variant="titleSmall" color='var(--primary-color)' style={{ fontWeight: 400 }}>Sent:</Typography>
            <Typography variant="titleSmall" color='var(--primary-color)'>{caseData.billingPacketSent}</Typography>
          </Wrapper>
        </Wrapper>

        <Wrapper type="column" style={{ gap: 6, paddingLeft: 80 }}>
          <Typography variant="titleSmall" color='var(--primary-color)' style={{ fontWeight: 400 }}>Policy Report</Typography>
          <Wrapper type="row" style={{ gap: 6 }}>
            <Typography variant="titleSmall" color='var(--primary-color)' style={{ fontWeight: 400 }}>Ordered:</Typography>
            <Typography variant="titleSmall" color='var(--primary-color)'>{caseData.policyReportOrdered}</Typography>
          </Wrapper>
        </Wrapper>
      </Wrapper>


      {/* Client Name */}
      <Wrapper type="column" style={{ width: '190px', gap: 4 }}>
        <Wrapper type="column" style={{ gap: 6 }}>
          <Typography variant="title16" color="var(--primary-color)">{caseData.clientName}</Typography>
          <Wrapper type="row" style={{ gap: 6 }}>
            <Typography variant="title16" color="var(--primary-color)" style={{ fontWeight: 400 }}>Prim: </Typography>
            <Typography variant='title18' color="var(--primary-color">{caseData.primaryPhone}</Typography>
          </Wrapper>
        </Wrapper>
          
        <Wrapper type="column" style={{ gap: 18, paddingTop: 6  }}>
          <Wrapper type="row" style={{ gap: 6 }}>
            <Typography variant="title16" color="var(--primary-color)" style={{ fontWeight: 400 }}>Mom: </Typography>
            <Typography variant='title16' color="var(--primary-color">{caseData.momsPhone}</Typography>
          </Wrapper>

          <Wrapper type="row" style={{ gap: 6 }}>
            <Typography variant="titleSmall" color="var(--primary-color)" style={{ fontWeight: 400 }}>Case Age: </Typography>
            <Typography variant='titleSmall' color="var(--primary-color">{caseData.caseAge}</Typography>
          </Wrapper>

          <Wrapper type="column" style={{ gap: 10, marginLeft: -18 }}>
            <Button
              label="Send Text"
              onClick={() => {}}
              size="small"
              icon={<TextIcon size={24} />}
            />
            <Button
              label="Send Email"
              onClick={() => {}}
              size="small"
              icon={<EmailIcon size={24} />}
            />
          </Wrapper>
        </Wrapper>
      </Wrapper>
      
      {/* Case Plan */}
      <Wrapper type="row" style={{ width: '140px' }}>
          <Typography variant="titleSmall" style={{ lineHeight: '20px' }}>
            {caseData.casePlan}
          </Typography>
        </Wrapper>

       {/* Big Policy / Injury? */}
       <Wrapper type="row" style={{ width: '153px', justifyContent: 'center', gap: 41, paddingRight: 9, paddingTop: 16 }}>
          <Checkbox
            checked={caseData.bigPolicy}
            disabled={true}
          />
          <Checkbox
            checked={caseData.bigInjury}
            disabled={true}
          />
        </Wrapper>

        {/* Injury Description */}
        <Wrapper type="row" style={{ width: '157px', paddingTop: 10 }}>
          <Typography variant="titleSmall">
            {caseData.injuryDescription}
          </Typography>
        </Wrapper>

        {/* Client Status Details */}
        <Wrapper type="row" style={{ width: '200px', paddingRight: 10, paddingTop: 10 }}>
          <Typography variant="titleSmall">
            {caseData.clientStatusDetails}
          </Typography>
        </Wrapper>

        {/* LORs Sent */}
        <Wrapper type="column" style={{ width: '150px', gap: 16 }}>
          {caseData.lorSent.map((entry, index) => (
            <Typography key={`lor-${entry.date}-${index}`} variant="titleSmall" style={{ fontWeight: 400, lineHeight: '20px' }}>
              {entry.date} – {entry.event}
              {entry.status && ` – ${entry.status}`}
            </Typography>
          ))}
        </Wrapper>

        {/* Med Recs Ordered */}
        <Wrapper type="column" style={{ width: '180px', gap: 4, paddingRight: 10 }}>
          <Checkbox
            label="Some Ordered"
            checked={caseData.medRecsOrdered.someOrdered}
            disabled={true}
            style={{ fontSize: 14 }}
          />
          <Checkbox
            label={`All Ordered - ${caseData.medRecsOrdered.allOrderedDate}`}
            checked={caseData.medRecsOrdered.allOrdered}
            disabled={true}
            style={{ fontSize: 14, lineHeight: '16px' }}
          />

          <Spacer customSize={20}/>

          <Wrapper type='column' style={{ alignItems: 'center'}}>
            <Typography variant='title15'>Total Current Bills:</Typography>
            <Typography variant='title18'>{caseData.totalCurrentBills}</Typography>
          </Wrapper>

        </Wrapper>

        {/* Liability Limits */}
        <Wrapper type="column" style={{ width: '220px', height: isOpen ? 'auto' : '50px', gap: 4, overflow: 'hidden', paddingTop: 7 }}>
          <Wrapper type="row" style={{ gap: 6 }}>
            <Typography variant="titleSmall" style={{ fontWeight: 400 }}>Was Client in this car?</Typography>
            <Typography variant="titleSmall">
              {caseData.liabilityLimits.wasInCar ? 'Yes' : 'No'}
            </Typography>
          </Wrapper>
          {caseData.liabilityLimits.insurances.map((insurance, index) => (
            <Wrapper key={`insurance-${insurance}-${index}`} type="row" style={{ gap: 6 }}>
              <Typography variant="titleSmall" style={{ fontWeight: 400 }}>Insurance#{index+1}</Typography>
              <Typography variant="titleSmall">{insurance}</Typography>
            </Wrapper>
          ))}
        </Wrapper>

        {/* Client's UIM Limits */}
        <Wrapper type="row" style={{ width: '150px' }}>
          <Typography variant="title15">
            {caseData.clientUIMlimits}
          </Typography>
        </Wrapper>

        {/* Resident UM/UIM Limits */}
        <Wrapper type="row" style={{ width: '120px', paddingRight: 10, lineHeight: '20px' }}>
          <Typography variant="title15">
            {caseData.residentUMUIMLimits}
          </Typography>
        </Wrapper>

        {/* Medpay */}
        <Wrapper type="row" style={{ width: '100px', height: "100%", alignItems: 'center' }}>
          <Typography variant="title15" style={{ paddingLeft: 18 }}>
            {caseData.medpay}
          </Typography>
        </Wrapper>

        {/* At Fault Driver Other Policies */}
        <Wrapper type="row" style={{ width: '97px', paddingTop: 18 }}>
          <Typography variant="title15" style={{ paddingLeft: 18 }}>
            {caseData.atFaultDriverOtherPolicies ? 'Yes' : 'No'}
          </Typography>
        </Wrapper>

        {/* Subro Setup */}
        <Wrapper type="row" style={{ width: '82px', paddingTop: 18 }}>
          <Typography variant="title15">
            {caseData.subroSetup}
          </Typography>
        </Wrapper>

        {/* Wage Loss */}
        <Wrapper type="row" style={{ width: '80px', paddingTop: 18 }}>
          <Typography variant="title17">
            {caseData.wageLoss}
          </Typography>
        </Wrapper>

        {/* Demand Sent / Status */}
        <Wrapper type="row" style={{ width: '168px', height: isOpen ? 'auto' : '50px', paddingRight: 16, paddingTop: 7, overflow: 'hidden' }}>
          <Typography variant="title15" style={{ fontWeight: 400 }}>
            {caseData.demandSentStatus}
          </Typography>
        </Wrapper>

        {/* Settlement Accepted/Release */}
        <Wrapper type="row" style={{ width: '98px',  paddingTop: 18 }}>
          <Typography variant="title15">
            {caseData.settlementAcceptedRelease}
          </Typography>
        </Wrapper>

        {/* Check Received */}
        <Wrapper type="row" style={{ paddingTop: 18, width: '60px' }}>
          <Typography variant="title15">
            {caseData.checkReceived}
          </Typography>
        </Wrapper>

        {/* Accordion Button */}
        <Wrapper type="column" style={{ paddingTop: 6, width: 62 }}>
          <Button
            onClick={onToggle}
            size="medium"
            icon={<AccordionIcon size={28} style={{transform: !isOpen ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.2s ease' }} />}
          />
        </Wrapper>

    </Card>
  );
};
