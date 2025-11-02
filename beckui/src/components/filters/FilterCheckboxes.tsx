import React from 'react';
import { Card } from '../card/Card';
import { Checkbox } from '../checkbox/Checkbox';
import { CloseIcon } from '../icons';
import { Wrapper } from '../wrapper/PageWrapper';
import { Typography } from '../typography/Typography';

export interface FilterCheckboxesProps {
  title?: string;
  onClose: () => void;
  options: { label: string; checked?: boolean }[];
  onOptionChange?: (label: string, checked: boolean) => void;
  style?: React.CSSProperties;
}

export const FilterCheckboxes: React.FC<FilterCheckboxesProps> = ({
  title = 'Filter by Status',
  onClose,
  options,
  onOptionChange,
  style,
}) => {
  const [checkedStates, setCheckedStates] = React.useState<Record<string, boolean>>(
    options.reduce((acc, option) => {
      acc[option.label] = option.checked || false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleCheckboxChange = (label: string, checked: boolean) => {
    setCheckedStates(prev => ({
      ...prev,
      [label]: checked,
    }));
    onOptionChange?.(label, checked);
  };

  return (
    <Card style={{ boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.25)' }}>
      <Wrapper 
        type="row" 
        style={{ 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '20px', 
            width: '100%' 
        }}>

        <Typography variant='title16' color='var(--dark-grey)'>
          {title}
        </Typography>

        <div style={{ cursor: 'pointer' }} onClick={onClose}> 
          <CloseIcon
            size={14}
            color="var(--middle-grey)"
            hoverColor="var(--secondary-color)"
            style={{ 
              cursor: 'pointer', 
              position: 'relative',
              right: -10,
              top: -10
            }}
          />  
        </div>
        
         
      </Wrapper>

      <Wrapper type="column" style={{ gap: '16px' }}>
        {options.map((option) => (
          <Checkbox
            key={option.label}
            label={option.label}
            colorLabel="var(--dark-grey)"
            checked={checkedStates[option.label]}
            onChange={(checked) => handleCheckboxChange(option.label, checked)}
            style={{ fontSize: '15px' }}
          />
        ))}
      </Wrapper>
    </Card>
  );
};

