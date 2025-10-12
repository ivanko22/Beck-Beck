import React from 'react';
import { Typography } from '../../../components/typography/Typography';
import { Checkbox } from '../../../components/checkbox/Checkbox';
import { Button } from '../../../components/button/Button';
import { EmailIcon } from '../../../components/icons';
import { Wrapper } from '../../../components/wrapper/PageWrapper';
import { Border } from '../../../components/border/Border';

interface TraumaticBrainInjurySectionProps {
  formData?: {
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

export const TraumaticBrainInjurySection: React.FC<TraumaticBrainInjurySectionProps> = ({ formData = {} }) => {
  return (
    <>
      <Wrapper type="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="leftLabel">
          Traumatic Brain Injury Symptoms
        </Typography>
        <Button
          label="Email Team for TBI Eval"
          icon={<EmailIcon size={22} />}
          iconPosition="left"
          onClick={() => {}}
          size="medium"
        />   
      </Wrapper>
      
      <Wrapper type="pageWrapperContentColumn" style={{ marginTop: '20px', height: '245px' }}>
        <Wrapper type="row">
          <Wrapper type="pageWrapperContentColumn" style={{flex: 1, gap: '30px', alignItems: 'center'}}>
            <Checkbox
              label="Adult Traumatic Brain Injury Symptoms?"
              checked={formData?.adultTBI || false}
              onChange={() => {}}
            />
            {[1, 2, 3].map((rowIndex) => (
              <Wrapper key={rowIndex} type="row" style={{gap: '24px', paddingLeft: '78px'}}>
                <Checkbox
                  label="Headache"
                  checked={formData?.childHeadache || false}
                  onChange={() => {}}
                />
                <Checkbox
                  label="Nausea"
                  checked={formData?.childNausea || false}
                  onChange={() => {}}
                />
                <Checkbox
                  label="Seizures"
                  checked={formData?.childSeizures || false}
                  onChange={() => {}}
                />
              </Wrapper>
            ))}
          </Wrapper>

          <Wrapper type="pageWrapperContentColumn" style={{flex: 1, gap: '24px'}}>
            <Checkbox
              label="Child Traumatic Brain Injury Symptoms?"
              checked={formData?.childTBI || false}
              onChange={() => {}}
            />
            {[1, 2, 3].map((rowIndex) => (
              <Wrapper key={rowIndex} type="row" style={{gap: '24px', paddingLeft: '78px'}}>
                <Checkbox
                  label="Headache"
                  checked={formData?.childHeadache || false}
                  onChange={() => {}}
                />
                <Checkbox
                  label="Nausea"
                  checked={formData?.childNausea || false}
                  onChange={() => {}}
                />
                <Checkbox
                  label="Seizures"
                  checked={formData?.childSeizures || false}
                  onChange={() => {}}
                />
              </Wrapper>
            ))}
          </Wrapper>
        </Wrapper>

      </Wrapper>

      <Border />

      <Wrapper type="row" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Button
            label="Email Team to Do TBI Evaluation"
            icon={<EmailIcon size={22} />}
            iconPosition="left"
            onClick={() => {}}
            size="medium"
        />
      </Wrapper>


    </>
  );
};
