import React, { useState } from "react";

export type RadioProps = {
  label?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  style?: React.CSSProperties;
};

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

  input: {
    width: 22,
    height: 22,
    margin: 0,
    accentColor: "var(--secondary-color)",
    outline: "none",
    border: "2px solid var(--light-grey)",
    borderRadius: "50%",
  },

  container: {
    display: 'flex',
    alignItems: 'center'
  },

  disabled: {
    color: 'var(--middle-grey)',
    cursor: 'not-allowed'
  },
}

export const Radio: React.FC<RadioProps> = ({
  label,
  name,
  checked,
  disabled,
  onChange,
  id,
  style,
}) => {

  const [hover, setHover] = useState(false);

  return (
    <label 
      style={{
        ...styles.label,
        ...(disabled ? styles.disabled : {})
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          ...styles.input,
          ...(disabled ? styles.disabled : {}),
        }}
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
  );
};
