import React from 'react';
import { Typography } from '../../../components/typography/Typography';
import { Input } from '../../../components/input/Inputs';
import { Checkbox } from '../../../components/checkbox/Checkbox';
import { Button } from '../../../components/button/Button';
import { EmailIcon } from '../../../components/icons';
import { Wrapper } from '../../../components/wrapper/PageWrapper';
import { Spacer } from '../../../components/spacer/Spacer';

interface CrashInjuryDetailsSectionProps {
  formData?: {
    crashDetails?: string;
    crashInjuries?: string;
    priorInjuries?: string;
    highValuePolicy?: boolean;
    severeInjury?: boolean;
    adultTBI?: boolean;
    adultHeadache?: boolean;
    adultNausea?: boolean;
    adultSeizures?: boolean;
    childTBI?: boolean;
    childHeadache?: boolean;
    childNausea?: boolean;
    childSeizures?: boolean;
    [key: string]: any;
  };
}

export const CrashInjuryDetailsSection: React.FC<CrashInjuryDetailsSectionProps> = ({ formData = {} }) => {
  return (
    <>
    <Wrapper type="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="leftLabel">
        Crash & Injury Details
      </Typography>

      <Wrapper type="pageWrapper" style={{ position: 'relative', top: '36px' }}>
        <Button
          label="Email Team for TBI Eval"
          icon={<EmailIcon size={22} />}
          iconPosition="left"
          onClick={() => {}}
          size="medium"
        />   
      </Wrapper>
    </Wrapper>
      
      <Wrapper type="pageWrapperContentColumn" style={{ marginTop: '20px' }}>
         <Input
            inputType="textarea"
            label="Crash Details" 
            showLabel={true}          
            placeholder="Crash Details"
            value={formData?.crashDetails || ''}
            size="large"
            customSize={{ width: '100%', height: '120px' }}
            style={{ marginTop: '-20px' }}
         />

        <Spacer customSize={40} />

        <Wrapper type="row">
          <Input
            inputType="textarea"
            placeholder="Crash Injuries From Crash"
            label="Crash Injuries From Crash"
            value={formData?.crashInjuries || ''}
            size="large"
            customSize={{ height: '120px', width: '100%' }}
            style={{ flex: 1, marginRight: '12px' }}
          />

          <Input
            inputType="textarea"
            placeholder="Prior Injuries"
            label="Prior Injuries"
            value={formData?.priorInjuries || ''}
            size="large"
            customSize={{ height: '120px', width: '100%' }}
            style={{ flex: 1, marginLeft: '12px' }}
          />
        </Wrapper>

        <Wrapper type="pageWrapperContentColumn" style={{ gap: '20px', marginTop: '20px' }}>
          <Checkbox
            label="High-Value Policy - Company vehicle at fault or insurance coverage likely exceeds $100K"
            checked={formData?.highValuePolicy || false}
            onChange={() => {}}
          />
          <Checkbox
            label="Severe Injury - Broken bones, surgery required, or overnight hospitalization"
            checked={formData?.severeInjury || false}
            onChange={() => {}}
          />
        </Wrapper>

        <Spacer customSize={40} />
      </Wrapper>
      
    </>
  );
};
