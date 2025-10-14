import React, { useState } from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { Wrapper } from '../wrapper/PageWrapper';
import { Input } from '../input/Inputs';
import { AccordionIcon } from '../icons';
import { PageActions } from '../page-actions/PageActions';
import { Upload } from '../upload/Upload';
import { Spacer } from '../spacer/Spacer';
import { Border } from '../border/Border';

export interface RowMedAuthData {
  id: string;
  state: 'saved' | 'edit' | 'adding';
  orderRecordsDate: string;
  orderBillsDate: string;
  providerName: string;
  address?: string;
  city?: string;
  stateCode?: string;
  zipCode?: string;
  recordsArrived: boolean;
  billsArrived: boolean;
  billedAmount: string;
  notes: string;
  onClick?: () => void;
}

export interface RowMedAuthProps {
  row: RowMedAuthData;
  isOpen?: boolean;
  onToggle?: () => void;
  onChange?: (row: RowMedAuthData) => void;
}

export const RowMedAuth: React.FC<RowMedAuthProps> = ({
  row,
  isOpen = false,
  onToggle,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [state, setState] = useState(row.state);

  return (
    <Wrapper type='column'>
      <div 
        onClick={() => onToggle?.()} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer', pointerEvents: 'auto' }}
      >
        <Wrapper 
          type="row" 
          style={{ 
            borderBottom: '1px solid var(--light-grey)', 
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            height: 50, 
            paddingBottom: 20,
            overflow: 'hidden',
            pointerEvents: 'none',
            backgroundColor: isHovered ? 'var(--ultra-light-grey)' : 'transparent',
            transition: 'background-color 0.2s ease'
          }}>

          <Wrapper type="row" style={{ width: '150px' }}>
            <Checkbox
              label={row.orderRecordsDate}
              checked={ row.orderRecordsDate === 'Order Rec' ? false : true}
              disabled={state === 'saved'}
              onChange={() => {}}
              aria-label="Order Records"
            />
          </Wrapper>

          <Wrapper type="row" style={{ width: '150px' }}>
            <Checkbox
              label={row.orderBillsDate}
              checked={ row.orderBillsDate === 'Order Bill' ? false : true}
              disabled={state === 'saved'}
              onChange={() => {}}
              aria-label="Order Bills"
            />
          </Wrapper>

          <Wrapper type="row" style={{ position: 'relative', top: 4 }}>
            <Input
              value={row.providerName}
              placeholder="Provider Name"
              disabled={state === 'saved'}
              showLabel={false}
              noBorder={state === 'saved'}
              onChange={(e) => {
                console.log('Provider Name', e.target.value);
              }}
              aria-label="Provider Name"
              size="medium"
              label="Provider Name"
              customSize={{ width: '380px' }}
            />
          </Wrapper>

          <Wrapper type="row" style={{ width: '120px', justifyContent: 'center' }}>
            <Checkbox
              checked={row.recordsArrived}
              disabled={state === 'saved'}
              onChange={() => (console.log('Records Arrived'))}
              aria-label="Records Arrived"
            />
          </Wrapper>

          <Wrapper type="row" style={{ width: '120px', justifyContent: 'center' }}>
            <Checkbox
              checked={row.billsArrived}
              disabled={state === 'saved'}
              onChange={() => (console.log('Bills Arrived'))}
              aria-label="Bills Arrived"
            />
          </Wrapper>

          <Wrapper type="row" style={{ position: 'relative', top: 4 }}>
            <Input
              value={row.billedAmount}
              placeholder="Billed Amount"
              disabled={state === 'saved'}
              showLabel={false}
              noBorder={state === 'saved'}
              onChange={(e) => {
                console.log('Billed Amount', e.target.value);
              }}
              aria-label="Billed Amount"
              size="medium"
              label="Billed Amount"
              customSize={{ width: '100px' }}
            />
          </Wrapper>

          <Wrapper type="row" style={{ position: 'relative', top: 4 }}>
            <Input
              value={row.notes}
              placeholder="Notes"
              disabled={state === 'saved'}
              showLabel={false}
              noBorder={state === 'saved'}
              onChange={(e) => {
                console.log('Notes', e.target.value);
              }}
              aria-label="Notes"
              size="medium"
              label="Notes"
              customSize={{ width: '300px' }}
            />
          </Wrapper>

          <Wrapper type="row" style={{ width: '32px', justifyContent: 'center', alignItems: 'center', paddingBottom: 5, paddingRight: 16 }}>
            <AccordionIcon 
              size={22} 
              color={isHovered ? "var(--secondary-color)" : "var(--middle-grey)"} 
              style={{ 
                transition: 'color 0.2s ease',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transformOrigin: 'center center',
                transitionProperty: 'color, transform'
              }} 
            />
          </Wrapper>

        </Wrapper>
      </div>

          {isOpen && (
          <Wrapper type="column">
            <Wrapper type="row" style={{ padding: '20px', gap: '40px' }}>
              <Wrapper type="column" style={{ gap: '40px' }}>
                <Input 
                  label="Address" 
                  placeholder="Address"
                  value={row.address} 
                  onChange={() => {}} 
                  customSize={{ width: '100%' }}
                  noBorder={state === 'saved'}
                  disabled={state === 'saved'}
                  style={{ gap: 0 }}
                  size="medium"
                />

                <Wrapper type="row" style={{ gap: '10px' }}>
                  <Input 
                    label="City" 
                    placeholder="City"
                    value={row.city} 
                    onChange={() => {}} 
                    customSize={{ width: '200px' }}
                    noBorder={state === 'saved'}
                    disabled={state === 'saved'}
                    style={{ gap: 0 }}
                    size="medium"
                  />
                  <Input 
                    label="State" 
                    placeholder="State"
                    value={row.stateCode} 
                    onChange={() => {}} 
                    customSize={{ width: '80px' }}
                    noBorder={state === 'saved'}
                    disabled={state === 'saved'}
                    style={{ gap: 0 }}
                    size="medium"
                  />
                  <Input 
                    label="Zip Code" 
                    placeholder="Zip Code"
                    value={row.zipCode} 
                    onChange={() => {}} 
                    customSize={{ width: '100px' }}
                    noBorder={state === 'saved'}
                    disabled={state === 'saved'}
                    style={{ gap: 0 }}
                    size="medium"
                  />
                </Wrapper>
              </Wrapper>

              <Wrapper type="column" style={{ gap: '40px' }}>
              <Spacer customSize={30} />
                <Wrapper type="row" style={{ gap: 40, justifyContent: 'space-between' }}>
                  <Spacer horizontal customSize={30} />
                  
                  <Upload
                    label="Drag recordsfiles here"
                    placeholder="Drag records files here"
                    withBorder={true}
                    style={{ height: 150, width: 300 }}
                  />

                  <Upload
                    label="Drag bills here to replace"
                    placeholder="Drag bills here to replace"
                    withBorder={true}
                    style={{ height: 150, width: 300 }}
                  />
                </Wrapper>
              </Wrapper>               
            </Wrapper>
            
            <PageActions
              state={state}
              type='button'
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
            />
            
            <Spacer customSize={10} />
            <Border color="var(--light-grey)" />
            </Wrapper>
          )}
    </Wrapper>
  );
};
