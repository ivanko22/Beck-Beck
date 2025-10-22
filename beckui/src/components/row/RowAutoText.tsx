import React, { useState } from 'react';
import { Wrapper } from '../wrapper/PageWrapper';
import { Input } from '../input/Inputs';
import { PageActions } from '../page-actions/PageActions';
import { AssignIcon, CloseIcon, CheckmarkIcon, TextIcon } from '../icons/index';
import { Typography } from '../typography/Typography';
import { BaseDropdown } from '../dropdown/Dropdown';

export interface RowAutoTextData {
  id: string;
  state: 'saved' | 'edit' | 'adding';
  dropdownValue?: string;
  triggeringEvent?: string;
  textMessage?: string;
  onClick?: () => void;
}

export interface RowAutoTextProps {
  row: RowAutoTextData;
  isOpen?: boolean;
  onToggle?: () => void;
  onChange?: (row: RowAutoTextData) => void;
}

export const RowAutoText: React.FC<RowAutoTextProps> = ({
  row,
  onChange,
}) => {
  const [state, setState] = useState(row.state);
  const [baseDropdownValue, setBaseDropdownValue] = React.useState(row.dropdownValue || 'Select an event');
  const [baseDropdownState, setBaseDropdownState] = React.useState<'selected' | 'default' | 'hover'>(row.dropdownValue ? 'selected' : 'default');

  return (

        <Wrapper 
          type="row" 
          style={{ 
            borderBottom: '1px solid var(--light-grey)', 
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            height: 50, 
            paddingBottom: 16,
            minWidth: 1055,
          }}>

            <Wrapper type="row" style={{ gap: 10, height: 40, alignItems: 'center', paddingLeft: 24, width: 440 }}>
              <AssignIcon 
                size={22}
                color="var(--middle-grey)"
              />
              <Typography variant="title15" style={{ fontWeight: 400 }}>When:</Typography>

              <BaseDropdown
                type="BaseDropdown"
                value={baseDropdownValue}
                state={baseDropdownState}
                openHeight="auto"
                openDirection="down"
                noBorder={true}
                style={{ minHeight: 80, paddingLeft: 0 }}
                
                menuItems={[
                  { label: 'Case Opened' },
                  { label: 'Medical Records Requested' },
                  { label: 'Medical Records Received' },
                  { label: 'Demand Package Sent' },
                  { label: 'Offer Received' },
                  { label: 'Negotiations in Progress' },
                  { label: 'Settlement Reached' },
                  { label: 'Check Received' },
                  { label: 'Case Closed' },
                  { label: 'Follow-Up Appointment Reminder' }
                  ]}
                  onSelect={(item) => {
                    setBaseDropdownValue(item);
                    setBaseDropdownState('selected');
                  }}
                />
            </Wrapper>

            {baseDropdownValue !== 'Select an event' && 
              (<Wrapper type="row" style={{ gap: 10, height: 40, alignItems: 'center' }}>
                <TextIcon 
                  size={22}
                  style={{ color: 'var(--middle-grey)' }}
                />
                <Typography variant="title15" style={{ fontWeight: 400 }}>Then:</Typography>

                <Input
                  size="large"
                  inputType='textarea'
                  placeholder="Enter text here..."
                  value={row.textMessage}
                  onChange={(e) => onChange?.({ ...row, textMessage: e.target.value })}
                  noBorder={state === 'saved'}
                  customSize={{ width: '477px', height: state === 'saved' ? '60px' : '40px' }}
                  style={{ 
                    minHeight: 40,
                    marginLeft: -15, 
                    paddingLeft: baseDropdownValue !== '' ? 15 : 0, 
                  }}
                />

              </Wrapper>
            )}

         {state !== 'adding' && (   
            <PageActions
              state={state}
              leftIcon={state === 'edit'? <CloseIcon size={20} /> : undefined}
              rightIcon={state === 'edit' ? <CheckmarkIcon size={20} /> : undefined}
              type='iconButton'
              onEdit={() => {
                setState('edit');
                console.log('Editing row');
              }}
              onSave={() => {
                setState('saved');
                console.log('Saved row');
              }}
              onCancel={() => {
                setState('saved');
                console.log('Cancelled editing');
              }}
            />)}
      </Wrapper>
  );
};
