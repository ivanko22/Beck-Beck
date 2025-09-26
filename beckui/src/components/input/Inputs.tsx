import React, { useState } from 'react';

interface InputProps {
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  disabled?: boolean;
  active?: boolean;
  error?: boolean | string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  name?: string;
  showForgotPassword?: boolean;
  noBorder?: boolean;
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    position: 'relative' as const,
  },

  label: {
    fontFamily: 'var(--font-family-base)',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.2,
    padding: '0px 0px 5px 17px',
    color: 'var(--dark-grey)',
  },

  input: {
    fontFamily: 'var(--font-family-base)',
    border: '1px solid var(--light-grey)',
    borderRadius: '2px',
    padding: '0 12px',
    fontSize: '16px',
    transition: 'all 0.2s ease',
    backgroundColor: '#fff',
    color: 'var(--dark-grey)',
    boxSizing: 'border-box' as const,
    position: 'relative' as const,
  },

  inputActive: {
    border: '1.5px solid var(--secondary-color)',
    filter: 'drop-shadow(0px 0px 2px var(--secondary-color))',
    borderRadius: '2px',
  },

  inputError: {
    borderColor: 'var(--warning)',
  },

  inputDisabled: {
    backgroundColor: '#f5f5f5',
    color: '#999',
    cursor: 'not-allowed',
    borderColor: '#D6D6DD',
  },

  inputNoBorder: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'default',
    outline: 'none',
    boxShadow: 'none',
  },

  resetPassword: {
    color: 'var(--middle-grey)',
    fontWeight: 500,
    fontSize: '14px',
    textAlign: 'right' as const,
    paddingTop: '13px',
    paddingRight: '6px',
    cursor: 'pointer',
  },

  resetPasswordHover: {
    color: 'var(--secondary-color-hover)',
  },

  errorMessage: {
    fontFamily: 'var(--font-family-base)',
    fontSize: '14px',
    color: 'var(--warning)',
    lineHeight: 1.2,
    marginTop: '2px',
    marginLeft: '16px',
  },

  sizeVariants: {
    small: {
      height: '32px',
      fontSize: '12px',
      padding: '0 10px',
    },

    medium: {
      height: '40px',
      fontSize: '14px',
      padding: '0 12px',
    },
    
    large: {
      height: '46px',
      width: '264px',
      fontSize: '18px',
      padding: '3px 0px 0px 16px',
    },
  },
};

export const Input: React.FC<InputProps> = ({
  size = 'large',
  placeholder = '',
  disabled = false,
  active = false,
  error = false,
  type = 'text',
  value,
  defaultValue,
  onChange,
  label,
  className = '',
  name,
  showForgotPassword = false,
  noBorder = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const currentValue = isControlled ? value! : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = {
    ...styles.input,
    ...styles.sizeVariants[size],
    ...(active || isFocused ? styles.inputActive : {}),
    ...(error && styles.inputError),
    ...(disabled && styles.inputDisabled),
    ...(noBorder && styles.inputNoBorder),
    ...(String(currentValue).trim() !== '' && { fontWeight: 500 }),
  };

  return (
    <div style={styles.wrapper}>
      {label && String(value).trim() !=='' && (
        <label style={{
          ...styles.label,
          ...(error && { color: 'var(--warning)' })
        }}>
          {label}
        </label>
      )}

      <input
        type={type}
        style={inputStyle}
        placeholder={placeholder}
        disabled={disabled || noBorder}
        readOnly={noBorder}
        value={currentValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        {...props}
      />
      
      {type === "password" && showForgotPassword && (
        <a 
          href="#"
          style={{
            ...styles.resetPassword,
            ...(isHovered ? styles.resetPasswordHover : {})
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Forgot Your Password?
        </a>
      )}

      {error && typeof error === 'string' && (
        <span style={styles.errorMessage}>
          {error}
        </span>
      )}
    </div>
  );
};
