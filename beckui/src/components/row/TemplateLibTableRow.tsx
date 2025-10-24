import React from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { Typography } from '../typography/Typography';
import { Wrapper } from '../wrapper/PageWrapper';

export type TemplateRow = {
  id: string;
  name: string;
  email: boolean;
  text: boolean;
  pdf: boolean;
};

export const TemplateRowItem: React.FC<{ row: TemplateRow; disabled?: boolean; saved?: boolean }> = ({ 
  row, 
  disabled = true, 
}) => {

  return (
    <Wrapper type="row" style={{ 
      borderBottom: '1px solid var(--light-grey)', 
      height: 60, 
      minWidth: 1050, 
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '600px 180px 180px 180px',
      padding: '0 36px',
    }}>
      <Wrapper type="column">
        <Typography variant="title16">{row.name}</Typography>
      </Wrapper>
      <Wrapper type="column">
        <Checkbox
          checked={row.email}
          disabled={disabled}
          aria-label={`${row.name} - Email`}
        />
      </Wrapper>
      <Wrapper type="column">
        <Checkbox
          checked={row.text}
          disabled={disabled}
          aria-label={`${row.name} - Text`}
        />
      </Wrapper>
      <Wrapper type="column">
        <Checkbox
          checked={row.pdf}
          disabled={disabled}
          aria-label={`${row.name} - PDF for eFax / Mail`}
        />
      </Wrapper>
    </Wrapper>
  );
};
