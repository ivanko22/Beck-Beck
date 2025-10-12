import React, { useState } from "react";
import { Radio } from "./Radiobutton";
import { Typography } from "../typography/Typography";
import { Wrapper } from "../wrapper/PageWrapper";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioButtonGroupProps {
  name: string;
  title: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  direction?: 'horizontal' | 'vertical';
  gap?: string;
  style?: React.CSSProperties;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  name,
  title,
  options,
  value: controlledValue,
  defaultValue,
  disabled = false,
  onChange,
  direction = 'horizontal',
  gap = '20px',
  style,
}) => {

  const [internalValue, setInternalValue] = useState<string>(defaultValue || options[0]?.value || '');
  
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleChange = (selectedValue: string) => {
    if (!isControlled) {
      setInternalValue(selectedValue);
    }
    onChange?.(selectedValue);
  };

  const radioContainerStyle: React.CSSProperties = {
    gap: gap,
    ...(direction === 'vertical' ? {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'flex-start',
    } : {
      display: 'flex',
      alignItems: 'flex-start',
    }),
    ...style,
  };

  return (
    <Wrapper type="pageWrapperContentColumn" style={{ gap: '20px' }} >
      <Typography variant="titleSmall" style={{ textAlign: 'left' }}>{title}</Typography>
      
      <Wrapper type="row" style={radioContainerStyle}>
        {options.map((option) => (
          <Radio
            key={option.value}
            label={option.label}
            name={name}
            checked={currentValue === option.value}
            disabled={disabled || option.disabled}
            onChange={() => handleChange(option.value)}
          />
        ))}
      </Wrapper>
    </Wrapper>
  );
};
