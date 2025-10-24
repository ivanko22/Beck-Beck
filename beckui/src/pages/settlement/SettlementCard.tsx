import React from 'react';
import { Typography } from '../../components/typography/Typography';
import { Card } from '../../components/card/Card';
import { Wrapper } from '../../components/wrapper/PageWrapper';
import { Input } from '../../components/input/Inputs';
import { Spacer } from '../../components/spacer/Spacer';
import { TableHeader } from '../../components/table/TableHeader';
import { TemplateRowItem } from '../../components/row/TemplateLibTableRow';
import { PageActions } from '../../components/page-actions/PageActions';
import { EditIcon, PrintIcon } from '../../components/icons';

interface SettlementCardProps {
  claim?: string;
  clientName?: string;
  style?: React.CSSProperties;
  formData?: any;
}

export const SettlementCard: React.FC<SettlementCardProps> = ({
  formData,
}) => {
  return (
    <Wrapper type="column" style={{ gap: 0 }}>
        <Spacer customSize={20} />
        <Typography variant="title15" color="var(--middle-grey)" style={{ fontWeight: 400, paddingLeft: 25 }}>
            {formData?.settlementCard} {formData?.id}
        </Typography>

        <Card style={{ height: '100%', width: 490, display: 'flex', flexDirection: 'column' }}>
            <Wrapper type="column" style={{ width: '100%', flex: 1, gap: 0 }}>
                <Wrapper type="row" style={{ gap: 10, alignItems: 'center', paddingBottom: 10 }}>
                    <Typography variant="titleSmall" color="var(--middle-grey)" style={{ fontWeight: 400 }}>Insurance Company Name:</Typography>
                    <Typography variant="sectionTitleSmall">{ formData?.insuranceCompanyName }</Typography>
                </Wrapper>

                <Wrapper type="row" style={{ gap: 10, alignItems: 'center', paddingBottom: 10 }}>
                    <Typography variant="titleSmall" color="var(--middle-grey)" style={{ fontWeight: 400 }}>Claim:</Typography>
                    <Typography variant="sectionTitleSmall">{ formData?.claim }</Typography>
                </Wrapper>

                <Wrapper type="row" style={{ gap: 10, alignItems: 'center', paddingBottom: 10 }}>
                    <Typography variant="titleSmall" color="var(--middle-grey)" style={{ fontWeight: 400 }}>Client Name:</Typography>
                    <Typography variant="sectionTitleSmall">{ formData?.clientName }</Typography>
                </Wrapper>

                <Typography variant="title16">Non-Medical Payments Settlement</Typography>
                <Wrapper type="column" style={{ width: '270px', alignItems: 'flex-start'  }}>
                    <Input 
                        leftLabel={true}
                        label="Attorney Fees%" 
                        value={ formData?.attorneyFees }
                        size="medium"
                        customSize={{ width: '112px' }}
                    />
                    <Input 
                        leftLabel={true}
                        label="Case Expenses" 
                        value={ formData?.caseExpenses || '' }
                        size="medium"
                        customSize={{ width: '112px' }}
                    />
                    <Input 
                        leftLabel={true}
                        label="Medical Records/Bills Expenses" 
                        value={ formData?.medicalRecordsBillsExpenses || '' }
                        size="medium"
                        customSize={{ width: '112px' }}
                    />
                </Wrapper>
                
                <Spacer customSize={10} />
                <Typography variant="title16">Gross Settlement</Typography>
                
                <Wrapper type="column" style={{ width: '270px', alignItems: 'flex-start'  }}>
                    <Input 
                        leftLabel={true}
                        label="Medical Payments Settlement 1" 
                        value={ formData?.medicalPaymentsSettlement1 || '' }
                        size="medium"
                        customSize={{ width: '112px' }}
                    />
                    <Input 
                        leftLabel={true}
                        label="Medical Payments Settlement 2" 
                        value={ formData?.medicalPaymentsSettlement2 || '' }
                        size="medium"
                        customSize={{ width: '112px' }}
                    />
                    <Input 
                        leftLabel={true}
                        label="Medical Payments Settlement 3" 
                        value={ formData?.medicalPaymentsSettlement3 || '' }
                        size="medium"
                        customSize={{ width: '112px' }}
                    />
                </Wrapper>

                <Spacer customSize={10} />
                <Typography variant="title16">Loan Information</Typography>
                <Wrapper type="row" style={{ gap: 10, alignItems: 'center' }}>
                    <Typography variant="titleSmall" color="var(--middle-grey)" style={{ fontWeight: 400 }}>Loan Company Name:</Typography>
                    <Typography variant="sectionTitleSmall">{ formData?.loanCompanyName }</Typography>
                </Wrapper>

                <Spacer customSize={20} />
                <Typography variant="titleSmall" style={{ fontWeight: 500 }}>Loan Repayment</Typography>

                <Wrapper type="column" style={{  alignItems: 'flex-start' }}>
                
                    <TableHeader 
                        columns={['Bill Company', 'Amount Paid', 'Amount Due', 'Client Says Don\'t Pay']} 
                        template="2.5fr 1.5fr 1.5fr 1fr"
                    />
                    {formData?.loanRepayment?.map((item: any, index: number) => (       
                        <TemplateRowItem type="loan" key={`loan-${index}-${item.id || index}`} row={item} />
                    ))}

                    <Spacer customSize={20} />
                    <Typography variant="title16" style={{ fontWeight: 500 }}>Lien Information</Typography>
                    <Spacer customSize={1} />

                    <TableHeader 
                        columns={['Lien Source', 'Amount']} 
                        template="1.55fr 1fr"
                    />
                    {formData?.lienInformation?.map((item: any, index: number) => (       
                        <TemplateRowItem type="lien" key={`lien-${index}-${item.id || index}`} row={item} />
                    ))}

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center', 
                        paddingLeft: '26px',
                        paddingTop: 5,
                        paddingBottom: 10,
                    }} >
                        <Typography variant="title17" style={{ fontWeight: 600, width: 237 }}>Net To Client:</Typography>
                        <Typography variant="secondaryTitle" style={{ textAlign: 'right', width: '100px' }}>{formData?.netToClient || '$0'}</Typography>
                    </div>

                    <Wrapper type="fullWidth" style={{ justifyContent: 'center' }}>
                        <PageActions 
                            state="saved" 
                            type="button"
                            leftIcon={<PrintIcon size={22} />}
                            leftLabel="Print Settlement Statement"
                            rightIcon={<EditIcon size={20} />}
                            rightLabel="Edit"
                        />

                        <Spacer customSize={20} />

                        <Input
                            label="Notes"
                            inputType="textarea"
                            value={formData?.notes || ''}
                            customSize={{ width: '100%', height: '170px' }}
                        />

                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Card>
    </Wrapper>
  );
};
