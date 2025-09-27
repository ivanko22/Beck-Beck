import React from 'react';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  id?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
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
    width: '22px',
    height: '22px',
    accentColor: 'var(--secondary-color)',
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
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  id,
  name,
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
        ...(disabled ? styles.disabled : {})
      }}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={value}
        disabled={disabled}
        onChange={handleChange}
        style={{
          ...styles.checkbox,
          ...(disabled ? { ...styles.disabled} : {}),
        }}
        area-checked={value}
      />
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
