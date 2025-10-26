import React from 'react';
import { CheckmarkIcon } from '../icons';
import { Wrapper } from '../wrapper/PageWrapper';

export interface CheckboxProps {
  label?: string;
  colorLabel?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  id?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  color?: string;
  style?: React.CSSProperties;
}

const styles = {
  label: {
    fontWeight: '500',
    fontSize: '16px',
    color: 'var(--primary-color)',
    display: 'flex',
    alignItems: 'center',  
    cursor: 'pointer',
  },

  labelText: {
    paddingLeft: '12px',
  },

  checkbox: {
    appearance: 'none' as const,          
    WebkitAppearance: 'none' as const,
    width: '22px',
    height: '22px',
    border: '1px solid var(--light-grey)',
    borderRadius: '4px',
    display: 'inline-block',
    position: 'relative' as const,
    cursor: 'pointer',
    accentColor: 'var(--secondary-color)',
  },

  checkboxChecked: {
    backgroundColor: 'var(--secondary-color)',
    borderColor: 'var(--secondary-color)',
  },

  checkmark: {
    color: 'var(--white)',
    fontSize: '16px',
    position: 'relative' as const,
    right: 21,
    top: 2,
  },

  container: {
    display: 'flex',
    alignItems: 'center'
  },

  disabled: {
    color: 'var(--dark-grey)',
    cursor: 'not-allowed'
  },
}

export const Checkbox: React.FC<CheckboxProps> =  ({
  label,
  colorLabel = 'var(--primary-color)',
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  id,
  name,
  color = 'var(--secondary-color)',
  style,
}) => {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState<boolean>(defaultChecked);
  const value = isControlled ? !!checked : internal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.checked;

    if (!isControlled) setInternal(next);
    onChange?.(next);
  }

  return (
    <label
      style={{
        ...styles.label,
        color: colorLabel,
        ...(disabled ? styles.disabled : {}),
        ...style
      }}
    >
      <Wrapper type="row" style={{ position: 'relative' }}>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={value}
          disabled={disabled}
          onChange={handleChange}
          style={{
            ...styles.checkbox,
            ...(value ? { 
              ...styles.checkboxChecked, 
              backgroundColor: color, 
              borderColor: color 
            } : { borderColor: color }),
            ...(disabled ? { ...styles.disabled} : {}),
          }}
          area-checked={value}
        />
        {value && (
          <Wrapper type="row" 
          style={{ 
            position: 'absolute', 
            left: 8, 
            top: 7,
            color: 'var(--white)',
            pointerEvents: 'none'
          }}>
            <CheckmarkIcon size={14} />
          </Wrapper>
        )}
      </Wrapper>
      {label && 
        <span 
          style={{
            ...styles.labelText,
            ...(disabled ? styles.disabled : {})
          }}
        >
          {label}
        </span>}
    </label>
  )
}
