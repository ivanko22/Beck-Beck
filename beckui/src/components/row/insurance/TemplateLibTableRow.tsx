import React from 'react';
import { Checkbox } from '../../checkbox/Checkbox';
import { Typography } from '../../typography/Typography';
import { RemoveIcon } from '../../icons/Remove';
import { Button } from '../../button/Button';
import { Wrapper } from '../../wrapper/PageWrapper';

export type TemplateRow = {
    id: string;
    name: string;
    email: boolean;
    text: boolean;
    pdf: boolean;
};

export type LoanRow = {
  name: string;
  amountPaid: string;
  amountDue: string;
  dontPay: boolean;
};

export type LienRow = {
  name: string;
  amount: string;
};

type TemplateRowItemProps = {
  type?: string;
  row: TemplateRow | LoanRow | LienRow;
  disabled?: boolean;
  saved?: boolean;
  onChange: (next: TemplateRow) => void;
};

const L = {
  row: {
    display: 'grid',
    gridTemplateColumns: '4fr 1fr 1fr 1fr',
    columnGap: '24px',
    alignItems: 'center',
    paddingLeft: '26px',
    borderBottom: '1px solid var(--light-grey)',
  } as React.CSSProperties,

  cellText: {
    textAlign: 'left' as const,
    padding: '14px 0',
    fontWeight: 500,
    fontSize: '16px',
    color: 'var(--primary-color)',
  },

  cellTextSaved: {
    color: 'var(--dark-grey)',
  },

  cellCheckbox: {
    padding: '14px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
};

export const TemplateRowItem: React.FC<TemplateRowItemProps> = ({
  row,
  disabled,
  type,
  saved = false,
}) => {

  const textStyle = saved
    ? { ...L.cellText, ...L.cellTextSaved }
    : L.cellText;

  if (type === 'loan') {
    const loanRow = row as LoanRow;
    return (
      <div style={{
          ...L.row, 
          gridTemplateColumns: '2.5fr 1.5fr 1.5fr 1fr', 
          alignItems: 'center', 
          paddingLeft: '26px', 
          paddingBottom: 10,
          width: 462
        }} 
        role="row">
        <Typography variant="titleSmall">{loanRow.name}</Typography>
        <Typography variant="title15">{loanRow.amountPaid}</Typography>
        <Typography variant="title16" style={{ fontWeight: 600 }}>{loanRow.amountDue}</Typography>
        
        <Checkbox
          checked={loanRow.dontPay}
          disabled={disabled}
          aria-label={`${loanRow.name} - Don't Pay`}
        />
      </div>
    );
  }

  if (type === 'lien') {
    const lienRow = row as LienRow;
    return (
      <div style={{
        ...L.row, 
        gridTemplateColumns: '5fr 2fr 1fr', 
        alignItems: 'center', 
        paddingLeft: '26px', 
        paddingBottom: 10,
      }} 
      role="row">
      <Typography variant="titleSmall">{lienRow.name}</Typography>
      <Typography variant="title16" style={{ fontWeight: 600 }}>{lienRow.amount}</Typography>
      
      <Wrapper type="pageWrapperContentRow" style={{ height: 28, alignItems: 'center' }}>
        <Button 
          size="medium"
          icon={<RemoveIcon size={20} />} 
          customSize={ 'auto' } 
        />
      </Wrapper>

    </div>
    );
  }

  const templateRow = row as TemplateRow;
  return (
    <div style={L.row} role="row">
      <div style={textStyle} role="gridcell">{row.name}</div>

      <div style={L.cellCheckbox} role="gridcell">
        <Checkbox
          checked={templateRow.email}
          disabled={disabled}
          aria-label={`${templateRow.name} - Email`}
        />
      </div>

      <div style={L.cellCheckbox} role="gridcell">
        <Checkbox
          checked={templateRow.text}
          disabled={disabled}
          aria-label={`${templateRow.name} - Text`}
        />
      </div>

      <div style={L.cellCheckbox} role="gridcell">
        <Checkbox
          checked={templateRow.pdf}
          disabled={disabled}
          aria-label={`${templateRow.name} - PDF for eFax / Mail`}
        />
      </div>
    </div>
  );
};
