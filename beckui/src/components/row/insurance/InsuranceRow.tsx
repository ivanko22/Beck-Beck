import React from 'react';
import { Input } from '../../input/Inputs';
import { EditIcon } from '../../icons';
import { PageActions } from '../../page-actions/PageActions.tsx';

export interface InsuranceRowProps {
  companyName: string;
  mailAddress: string;
  fax: string;
  email: string;
  state: 'adding' | 'edit' | 'save' | 'saved';
  onCompanyNameChange?: (value: string) => void;
  onMailAddressChange?: (value: string) => void;
  onFaxChange?: (value: string) => void;
  onEmailChange?: (value: string) => void;
  onEdit?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
}

const styles = {
  row: {
    display: 'grid',
    gridTemplateColumns: '2.5fr 2.5fr 1fr 2fr 40px',
    columnGap: 24,
    alignItems: 'center',
    paddingLeft: '26px',
  } as const,
  
  field: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  
};

export const InsuranceRow: React.FC<InsuranceRowProps> = (props) => {
  const { companyName, mailAddress, fax, email, state, onCompanyNameChange, onMailAddressChange, onFaxChange, onEmailChange } = props;

  return (
    <div>

      <div style={styles.row}>
        <Input 
          value={companyName} 
          customSize={{ width: '100%' }} 
          onChange={(e) => onCompanyNameChange?.(e.target.value)} 
          placeholder="Enter company name" 
          active={state === 'adding' || state === 'edit'}
          disabled={state === 'saved'}
        />

        <Input 
          value={mailAddress} 
          customSize={{ width: '100%' }} 
          onChange={(e) => onMailAddressChange?.(e.target.value)} 
          placeholder="Enter mail address" 
          disabled={state === 'saved'}
        />

        <Input 
          value={fax}        
          customSize={{ width: '100%' }}        
          onChange={(e) => onFaxChange?.(e.target.value)}        
          placeholder="Enter fax" 
          disabled={state === 'saved'}
        />

        <Input 
          value={email}      
          customSize={{ width: '100%' }}      
          onChange={(e) => onEmailChange?.(e.target.value)}      
          placeholder="Enter email" 
          disabled={state === 'saved'}
        />

        {(state !== 'adding' && state !== 'edit' && state !== 'save') && 
          <div style={{ paddingTop: '34px' }}>
            <EditIcon 
              size={28} 
              color="var(--middle-grey)" 
                hoverColor="var(--secondary-color-hover)" 
              />
          </div>
        }
     
    </div>

      {(state === 'adding' || state === 'edit' || state === 'save') && 
        
        <div style={{ paddingLeft: '26px', paddingTop: '18px' }}>
          <PageActions 
            type={state === 'edit' || state === 'adding' ? 'edit' : 'save'}
          />
        </div>
        }

    </div>
  );
};
