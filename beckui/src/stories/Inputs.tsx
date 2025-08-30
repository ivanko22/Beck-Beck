import React, { useState } from 'react';

interface InputProps {
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  disabled?: boolean;
  active?: boolean;
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
    fontWeight: 400,
    lineHeight: 1.2,
    paddingLeft: '17px',
    color: 'var(--dark-grey)',
  },

  input: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
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
    borderColor: 'var(--light-grey)',
  },

  inputDisabled: {
    backgroundColor: '#f5f5f5',
    color: '#999',
    cursor: 'not-allowed',
    borderColor: '#D6D6DD',
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
      height: '50px',
      width: '330px',
      fontSize: '18px',
      padding: '0 16px',
    },
  },
};

/** Basic input component for user data entry */
export const Input: React.FC<InputProps> = ({
  size = 'medium',
  placeholder = '',
  disabled = false,
  active = false,
  error = false,
  type = 'text',
  value = '',
  onChange,
  label,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    ...(active || isFocused ? styles.inputActive : {}),
    ...(error && styles.inputError),
    ...(disabled && styles.inputDisabled),
    ...(String(value).trim() !== '' && { fontWeight: 600 }),
  };

  return (
    <div style={styles.wrapper}>
      {label && String(value).trim() !=='' && (
        <label style={styles.label}>
          {label}
        </label>
      )}

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
      
      {type === "password" && (
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


