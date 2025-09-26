import React from 'react';
import { Checkbox } from '../checkbox/Checkbox';

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
  onChange: (next: TemplateRow) => void;
};

const L = {
    tr: {
        hieght: '60px',
        borderBottom: '1px solid var(--light-grey)',
    },
    td: {
        textAlign: 'left' as const,
        padding: '14px 31px',
        fontWeight: 500,
        fontSize: '16px',
        color: 'var(--primary-color)',
    },
    tdName: {
        padding: '14px 25px',
        textAlign: 'left' as const,
        color: 'var(--primary-color)',
        fontWeight: 500,
    },
};

export const TemplateRowItem: React.FC<TemplateRowItemProps> = ({
  row, disabled, onChange
}) => {
  const toggle = (key: keyof Pick<TemplateRow, 'email' | 'text' | 'pdf'>) =>
    onChange({ ...row, [key]: !row[key] });

  return (
    <tr style={L.tr}>
      <td style={L.td}>{row.name}</td>
      
      <td style={L.td}>
        <Checkbox 
            checked={row.email}
            disabled={disabled}
            onChange={() => toggle('email')}
            aria-label={`${row.email} - Email`}
        />
      </td>

      <td style={L.td}>
        <Checkbox 
            checked={row.text}
            disabled={disabled}
            onChange={() => toggle('text')}
            aria-label={`${row.name} - Text`}
        />  
      </td>

      <td style={L.td}>
        <Checkbox 
            checked={row.pdf}
            disabled={disabled}
            onChange={() => toggle('pdf')}
            aria-label={`${row.name} - PDF`}
        />  
      </td>
    </tr>
  );
};
