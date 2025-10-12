import React from 'react';
import { Input } from '../input/Inputs';
import { Radio } from '../radiobutton/Radiobutton';
import { Button } from '../button/Button';
import { GenerateIcon, CheckmarkIcon, CloseIcon, RemoveIcon, EditIcon } from '../icons';
import { Upload } from '../upload/Upload';
import { Wrapper } from '../wrapper/PageWrapper';
import { PageActions } from '../page-actions/PageActions';
import { TableHeader } from './TableHeader';
import { Typography } from '../typography/Typography';
import { Spacer } from '../spacer/Spacer';

interface LienTableRowProps {
  index?: number;
  state?: 'save' | 'saved' | 'edit';
  type?: 'button' | 'iconButton';

  formData?: {
    medicalProvider?: string;
    lienAmount?: string;
    finalBalance?: string;
    insurancePaid?: string;
    notes?: string;
    accountNumber?: string;
    lienholderPhone?: string;
    lienholderEmail?: string;
    howToSend?: 'email' | 'fax';
    productionRequestPercent?: string;
    dateSent?: string;
    reducedToAmount?: string;
    insuranceType?: string;
    isGenerated?: boolean;
  };
  onDelete?: () => void;
  onSave?: () => void;
  disabled?: boolean;
}

export const LienTableRow: React.FC<LienTableRowProps> = ({
  formData = {},
  index,
  state,
  disabled = false,
}) => {
  const styles = {
    tableRow: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid var(--light-grey)',
    } as React.CSSProperties,
    
    radioContainer: {
      display: 'flex',
      gap: '26px',
      alignItems: 'center',
      paddingBottom: '12px',
    } as React.CSSProperties,
        
    rowStyle: {
      width: 'fit-content',
    } as React.CSSProperties,
    
    rowContentStyle: {
      display: 'flex',
      alignItems: 'flex-end',
      borderTop: index === 0 ? '1px solid var(--light-grey)' : 'none',
      borderBottom: '1px solid var(--light-grey)',
      gap: '24px',
      height: '60px',
      paddingBottom: '14px',
      marginRight: '40px',
    } as React.CSSProperties,
  };

  return (
    <Wrapper type="pageWrapper" style={styles.rowStyle}>

      {(index === 0) && (
        <TableHeader
          style={{ top: '0px' }}
          noBorder={true}
          columns={[
            'Medical Provider Name, Address, City, State, Zip',
            'Lien Amount',
            'Final Balance',
            'Insurance Paid',
            'Notes',
            'Account #',
            'Lienholder Phone',
            'Lienholder Email',
            'How to Send',
            'Production Request %',
            'Generate Reduction Letter',
            'Date Sent',
            'Reduced to Amount'
          ]}
          useSpecificWidths={true}
          columnWidths={[
            '257px',   // Medical Provider Name, Address, City, State, Zip
            '114px',    // Lien Amount
            '112px',    // Final Balance
            '113px',    // Insurance Paid
            '452px',   // Notes
            '119px',   // Account # (Upload area)
            '176px',   // Lienholder Phone
            '200px',   // Lienholder Email
            '170px',   // How to Send
            '90px',    // Production Request %
            '136px',   // Generate Reduction Letter
            '119px',   // Date Sent
            '100px',   // Reduced to Amount
          ]}
          />
        )}

      <Wrapper type="row" style={styles.rowContentStyle}>
        
        <Wrapper type="pageWrapperContentColumn" style={ { gap: 0 }}>
          {formData?.insuranceType && (
            <Typography variant="titleSmall" style={{ paddingLeft: '16px', marginBottom: '-45px', fontWeight: 400, color: 'var(--middle-grey)' }}>
              {formData.insuranceType}
            </Typography>
          )}

          <Input
            label="Medical Provider Name, Address, City, State, Zip"
            value={formData?.medicalProvider || 'StriveWell Insurance'}
            showLabel={false}
            disabled={disabled}
            customSize={{ width: '240px' }}
            noBorder={state === 'saved'}
            style={{ marginBottom: (formData?.insuranceType?.length || 0) > 0 ? '-10px' : '0px' }}
          />

        </Wrapper>
  
        <Input
          label="Lien Amount"
          placeholder="Amount"
          value={formData?.lienAmount || ''}
          showLabel={false}
          disabled={disabled}
          customSize={{ width: '112px' }}
          noBorder={state === 'saved'}
        />

        <Input
          label="Final Balance"
          placeholder="Amount"
          value={formData?.finalBalance || ''}
          showLabel={false}
          disabled={disabled}
          customSize={{ width: '112px' }}
          noBorder={state === 'saved'}
        />

        <Input
          label="Insurance Paid"
          placeholder="Amount"
          value={formData?.insurancePaid || ''}
          showLabel={false}
          disabled={disabled}
          customSize={{ width: '112px' }}
          noBorder={state === 'saved'}
        />

        <Input
          label="Notes"
          placeholder="Notes"
          value={formData?.notes || ''}
          showLabel={false}
          disabled={disabled}
          size='medium'
          customSize={{ width: '228px' }}
          noBorder={state === 'saved'}
        />

        <Upload
          label="Drop files here to attach and add files"
          style={{ width: '200px' }}
        />

        <Input
          label="Account #"
          placeholder="Account #"
          value={formData?.accountNumber || ''}
          showLabel={false}
          disabled={disabled}
          customSize={{ width: '120px' }}
          noBorder={state === 'saved'}
        />

        <Input
          label="Lienholder Phone"
          placeholder="Lienholder Phone"
          value={formData?.lienholderPhone || ''}
          showLabel={false}
          disabled={disabled}
          customSize={{ width: '176px' }}
          noBorder={state === 'saved'}
        />

        <Input
          label="Lienholder Email"
          placeholder="Lienholder Email"
          value={formData?.lienholderEmail || ''}
          showLabel={false}
          disabled={disabled}
          customSize={{ width: '220px' }}
          noBorder={state === 'saved'}
        />

      <div style={styles.radioContainer}>
        <Radio
          label="Email"
          checked={formData?.howToSend === 'email'}
          onChange={() => {}}
          disabled={disabled}
        />
        <Radio
          label="Fax"
          checked={formData?.howToSend === 'fax'}
          onChange={() => {}}
          disabled={disabled}
        />
      </div>

      <Input
        label="Production Request %"
        placeholder="%"
        value={formData?.productionRequestPercent || ''}
        showLabel={false}
        disabled={disabled}
        customSize={{ width: '80px' }}  
        noBorder={state === 'saved'}
      />

      <div style={{ width: '136px' }}>
        <Button
          label={formData?.isGenerated ? "Generated" : "Generate"}
          size="medium"
          onClick={() => {}}
          icon={formData?.isGenerated ? <CheckmarkIcon size={20} /> : <GenerateIcon size={20} />}
        />
      </div>

      <Input
        label="Date Sent"
        placeholder="m/d/y"
        value={formData?.dateSent || ''}
        showLabel={false}
        disabled={disabled}
        customSize={{ width: '118px' }}
        noBorder={state === 'saved'}
      />

      <Input
        label="Reduced to Amount"
        placeholder="$"
        value={formData?.reducedToAmount || ''}
        showLabel={false}
        disabled={disabled}
        customSize={{ width: '100px' }}
        noBorder={state === 'saved'}
      />

      <Upload
        label="Drop Redux Agreement"
        style={{ width: '130px' }}
      />

      <PageActions 
        state={state || 'save'} 
        type={'iconButton'} 
        leftIcon={state === 'save' ? <RemoveIcon size={20} /> : <CloseIcon size={20} />}
        rightIcon={state === 'save' ? <EditIcon size={20} /> : <CheckmarkIcon size={20} />}
      />

      </Wrapper>


      {state !== 'saved' && (
        <>
          <Spacer size="md" customSize={20} />
          <PageActions 
            state={state || 'save'} 
            type={'button'} 
          />
        </>
      )}
    </Wrapper>
  );
};
