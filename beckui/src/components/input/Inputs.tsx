import React, { useState } from 'react';

interface InputProps {
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  disabled?: boolean;
  showLabel?: boolean;
  active?: boolean;
  error?: boolean | string;
  inputType?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea';
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label?: string;
  leftLabel?: boolean;
  className?: string;
  name?: string;
  showForgotPassword?: boolean;
  noBorder?: boolean;
  customSize?: {
    width?: string;
    height?: string;
  };
  coloredLabel?: {
    parts: Array<{
      text: string;
      color: string;
    }>;
  };
  style?: React.CSSProperties;
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '80px',
    flexDirection: 'column' as const,
    justifyContent: 'flex-end',
    gap: '8px',
    position: 'relative' as const,
  },

  label: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.2,
    padding: '0px 0px 5px 17px',
    color: 'var(--dark-grey)',
  },

  leftLabel: {
    fontSize: '16px',
    fontWeight: 500,
    color: 'var(--dark-grey)',
  },

  input: {
    fontFamily: 'var(--font-family-base)',
    fontWeight: 500,
    border: '1px solid var(--light-grey)',
    borderRadius: '2px',
    padding: '0 12px',
    fontSize: '16px',
    transition: 'all 0.2s ease',
    backgroundColor: 'var(--white)',
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
    color: 'var(--dark-grey)',
    cursor: 'not-allowed',
    borderColor: 'var(--light-grey)',
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
      height: '48px',
      width: '272px',
      fontSize: '18px',
      padding: '3px 0px 0px 16px',
    },
  },
};

export const Input: React.FC<InputProps> = ({
  size = 'large',
  placeholder,
  disabled = false,
  active = false,
  error = false,
  inputType = 'text',
  value,
  defaultValue,
  onChange,
  label,
  showLabel = false,
  className = '',
  name,
  showForgotPassword = false,
  noBorder = false,
  leftLabel = false,
  customSize,
  coloredLabel,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const currentValue = isControlled ? value! : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    ...(customSize && {
      ...(customSize.width && { width: customSize.width }),
      ...(customSize.height && { height: customSize.height }),
    }),
    ...(String(currentValue).trim() === '' && { fontWeight: 400 }),
  };

  return (
    <div style={{
      ...styles.container,
      ...(leftLabel && { flexDirection: 'row', alignItems: 'center', gap: '20px' }),
      ...style
    }}>

      <style>
      {`
        input::placeholder {
          color: var(--middle-grey);
        }
        textarea::placeholder {
          color: var(--middle-grey);
        }
      `}
      </style>
      
      {label && (showLabel || leftLabel || String(currentValue).trim() !== '') && (
        <label style={{
          ...styles.label,
          ...(leftLabel && { ...styles.leftLabel }),
          ...(error && { color: 'var(--warning)' })
        }}>
          {coloredLabel ? (
            <>
              {coloredLabel.parts.map((part, index) => (
                <span key={index} style={{ color: part.color }}>
                  {part.text}
                </span>
              ))}
            </>
          ) : (
            label
          )}
        </label>
      )}

    {inputType !== 'textarea' && 
      <input
        type={inputType}
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
      }
      
      {inputType === "password" && showForgotPassword && (
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

      {inputType === 'textarea' && (
        <textarea
          style={{
            ...inputStyle,
            padding: '12px',
            resize: (disabled) ? 'none' : 'vertical',
            ...(customSize && {
              ...(customSize.width && { width: customSize.width }),
              ...(customSize.height && { height: customSize.height }),
            }),
          }}
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled || noBorder}
          readOnly={noBorder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          {...props}
        />
      )}
    </div>
  );
};
