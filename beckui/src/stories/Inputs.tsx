import React, { useState } from 'react';

interface InputProps {
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  disabled?: boolean;
  error?: boolean | string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value?: string;
  onChange?: (value: string | number) => void;
  label?: string;
  className?: string;
}

// Scoped CSS styles
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    position: 'relative' as const,
  },
  label: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    color: '#333',
    lineHeight: 1.2,
  },
  input: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    border: '1px solid #D6D6DD',
    borderRadius: '2px',
    padding: '0 12px',
    fontSize: '14px',
    lineHeight: 1.5,
    transition: 'all 0.2s ease',
    backgroundColor: '#fff',
    color: '#333',
    boxSizing: 'border-box' as const,
    position: 'relative' as const,
  },
  inputActive: {
    border: '1.5px solid #3338C1',
    filter: 'drop-shadow(0px 0px 2px #3338C1)',
    borderRadius: '2px',
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  inputDisabled: {
    backgroundColor: '#f5f5f5',
    color: '#999',
    cursor: 'not-allowed',
    borderColor: '#D6D6DD',
  },
  errorMessage: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: '12px',
    color: '#e74c3c',
    lineHeight: 1.2,
    marginTop: '2px',
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
      height: '48px',
      fontSize: '16px',
      padding: '0 16px',
    },
  },
};

/** Basic input component for user data entry */
export const Input: React.FC<InputProps> = ({
  size = 'medium',
  placeholder = '',
  disabled = false,
  error = false,
  type = 'text',
  value = '',
  onChange,
  label,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
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
    ...(isFocused && styles.inputActive),
    ...(error && styles.inputError),
    ...(disabled && styles.inputDisabled),
  };

  return (
    <div style={styles.wrapper}>
      {label && String(value).trim() !=='' && (
        <label style={styles.label}>
          {label}
        </label>
      )}

{/* {label && String(value).trim() !== '' && (
  <label style={styles.label}>
    {label}
  </label>
)} */}
      <input
        type={type}
        style={inputStyle}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {error && typeof error === 'string' && (
        <span style={styles.errorMessage}>
          {error}
        </span>
      )}
    </div>
  );
};


