import React from 'react';
import { Typography } from '../../components/typography/Typography';
import { GenerateIcon, LetterIcon } from '../../components/icons';
import { Card } from '../../components/card/Card';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { Button } from '../../components/button/Button';

interface ActionCardsSectionProps {
  style?: React.CSSProperties;
}

export const ActionCardsSection: React.FC<ActionCardsSectionProps> = ({
}) => {

  return (
      <Card style={{maxWidth: 1620}}>
        <Wrapper type="row" style={{justifyContent: 'space-around', width: '100%'}}>
            <Wrapper type="column">                
                <Typography variant="titleSmall" color="var(--middle-grey)">
                    Generate Reduction Letters
                </Typography>

                <Wrapper type="row" style={{marginLeft: -18}}>
                    <Button
                        label="Hospital Lien Statute Redux"
                        size="medium"
                        icon={<GenerateIcon size={22} />}
                        iconPosition="left"
                        onClick={() => {}}
                        customSize={"200px"}
                    />
                    
                    <Button
                        label="Standard Lien / Bill Redux"
                        size="medium"
                        icon={<GenerateIcon size={22} />}
                        iconPosition="left"
                        onClick={() => {}}
                        customSize={"200px"}
                    />

                    <Button
                        label="Health Ins Subro Redux"
                        size="medium"
                        icon={<GenerateIcon size={22} />}
                        iconPosition="left"
                        onClick={() => {}}
                        customSize={"200px"}
                    />

                    <Button
                        label="Loan Redux"
                        size="medium"
                        icon={<GenerateIcon size={22} />}
                        iconPosition="left"
                        onClick={() => {}}
                        customSize={"200px"}
                    />

                </Wrapper>
            </Wrapper>

            <Wrapper type="column">                
                <Typography variant="titleSmall" color="var(--middle-grey)">
                    Loan Actions
                </Typography>

                <Wrapper type="row" style={{marginLeft: -18}}>
                    <Wrapper type="column">
                        <Button
                            label="Request Loan Amount"
                            size="medium"
                            icon={<GenerateIcon size={22} />}
                            iconPosition="left"
                            onClick={() => {}}
                            customSize={"250px"}
                        />

                        <Typography variant="titleSmall" color="var(--middle-grey)" style={{fontWeight: 400, paddingLeft: 20}}>Requested: 08/03/25</Typography>

                    </Wrapper>
  
                    
                    <Button
                        label="Loan Repayment Letter"
                        size="medium"
                        icon={<GenerateIcon size={22} />}
                        iconPosition="left"
                        onClick={() => {}}
                        customSize={"200px"}
                    />
                </Wrapper>
            </Wrapper>

            <Wrapper type="column">                
                <Typography variant="titleSmall" color="var(--middle-grey)">
                    Settlement Actions
                </Typography>

                <Wrapper type="row" style={{marginLeft: -18}}>
                    <Button
                        label="Apply Hospital Lien Statute & Generate Statement"
                        size="medium"
                        icon={<GenerateIcon size={22} />}
                        iconPosition="left"
                        onClick={() => {}}
                        customSize={"280px"}
                    />
                </Wrapper>
            </Wrapper>

        </Wrapper>
        
      </Card>
  );
};
