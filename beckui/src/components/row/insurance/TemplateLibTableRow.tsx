import React from 'react';
import { Checkbox } from '../../checkbox/Checkbox';
import { Typography } from '../../typography/Typography';
import { RemoveIcon } from '../../icons/Remove';
import { Button } from '../../button/Button';
import { Wrapper } from '../../wrapper/PageWrapper';
import { UploadIcon } from '../../icons/index';

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

export type BillRow = {
  name: string;
  uploaded: string;
};

type BaseRowProps = {
  disabled?: boolean;
  saved?: boolean;
};

type TemplateRowProps = {
  type?: 'template';
  row: TemplateRow;
  onChange?: (next: TemplateRow) => void;
} & BaseRowProps;

type LoanRowProps = {
  type: 'loan';
  row: LoanRow;
} & BaseRowProps;

type LienRowProps = {
  type: 'lien';
  row: LienRow;
} & BaseRowProps;

type BillRowProps = {
  type: 'bill';
  row: BillRow;
} & BaseRowProps;

type RowProps = TemplateRowProps | LoanRowProps | LienRowProps | BillRowProps;

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

const LoanRowComponent: React.FC<{ row: LoanRow; disabled?: boolean }> = ({ row, disabled = true }) => (
  <div
    style={{
      ...L.row,
      gridTemplateColumns: '2.5fr 1.5fr 1.5fr 1fr',
      alignItems: 'center',
      paddingLeft: '26px',
      paddingBottom: 10,
      width: 462,
    }}
    role="row"
  >
    <Typography variant="titleSmall">{row.name}</Typography>
    <Typography variant="title15">{row.amountPaid}</Typography>
    <Typography variant="title16" style={{ fontWeight: 600 }}>
      {row.amountDue}
    </Typography>
    <Checkbox
      checked={row.dontPay}
      disabled={disabled}
      aria-label={`${row.name} - Don't Pay`}
    />
  </div>
);

const LienRowComponent: React.FC<{ row: LienRow }> = ({ row }) => (
  <div
    style={{
      ...L.row,
      gridTemplateColumns: '5fr 2fr 1fr',
      alignItems: 'center',
      paddingLeft: '26px',
      paddingBottom: 10,
    }}
    role="row"
  >
    <Typography variant="titleSmall">{row.name}</Typography>
    <Typography variant="title16" style={{ fontWeight: 600 }}>
      {row.amount}
    </Typography>
    <Wrapper type="row" style={{ height: 28, alignItems: 'center' }}>
      <Button size="medium" icon={<RemoveIcon size={20} />} customSize="auto" />
    </Wrapper>
  </div>
);

const BillRowComponent: React.FC<{ row: BillRow }> = ({ row }) => (
  <div
    style={{
      ...L.row,
      gridTemplateColumns: '4fr 2.5fr 0.5fr 1fr',
      alignItems: 'center',
      paddingBottom: 10,
    }}
    role="row"
  >
    <Typography variant="title15">{row.name}</Typography>
    <Typography variant="title15">{row.uploaded}</Typography>
    <Button size="medium" icon={<RemoveIcon size={20} />} customSize="auto" />
    <Button size="medium" icon={<UploadIcon size={20} />} customSize="auto" />
  </div>
);

const TemplateRowComponent: React.FC<{ row: TemplateRow; disabled?: boolean; saved?: boolean }> = ({ 
  row, 
  disabled = true, 
  saved = false 
}) => {
  const textStyle = saved ? { ...L.cellText, ...L.cellTextSaved } : L.cellText;

  return (
    <div style={L.row} role="row">
      <div style={textStyle} role="gridcell">{row.name}</div>
      <div style={L.cellCheckbox} role="gridcell">
        <Checkbox
          checked={row.email}
          disabled={disabled}
          aria-label={`${row.name} - Email`}
        />
      </div>
      <div style={L.cellCheckbox} role="gridcell">
        <Checkbox
          checked={row.text}
          disabled={disabled}
          aria-label={`${row.name} - Text`}
        />
      </div>
      <div style={L.cellCheckbox} role="gridcell">
        <Checkbox
          checked={row.pdf}
          disabled={disabled}
          aria-label={`${row.name} - PDF for eFax / Mail`}
        />
      </div>
    </div>
  );
};

export const TemplateRowItem: React.FC<RowProps> = (props) => {
  switch (props.type) {
    case 'loan':
      return <LoanRowComponent row={props.row} disabled={props.disabled} />;
    case 'lien':
      return <LienRowComponent row={props.row} />;
    case 'bill':
      return <BillRowComponent row={props.row} />;
    default:
      return <TemplateRowComponent row={props.row} disabled={props.disabled} saved={props.saved} />;
  }
};
