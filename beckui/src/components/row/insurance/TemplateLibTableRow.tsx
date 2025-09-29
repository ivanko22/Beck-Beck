import React from 'react';
import { Checkbox } from '../../checkbox/Checkbox';

export type TemplateRow = {
    id: string;
    name: string;
    email: boolean;
    text: boolean;
    pdf: boolean;
  };

type TemplateRowItemProps = {
  row: TemplateRow;
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
  saved = false,
}) => {

  const textStyle = saved
    ? { ...L.cellText, ...L.cellTextSaved }
    : L.cellText;

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
