import React, { useState } from 'react';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const styles = {
  button: {
    display: 'inline-block',
    cursor: 'pointer',
    border: 0,
    borderRadius: '3em',
    fontWeight: 700,
    lineHeight: 1,
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    transition: 'all 0.2s ease',
  },

  primary: {
    backgroundColor: 'var(--secondary-color)',
    color: 'white',
    height: '60px',
    width: '332px',
    fontWeight: 600,
  },

  primaryHover: {
    backgroundColor: 'var(--secondary-color-hover)',
  },

  primaryDisabled: {
    color: 'var(--light-grey)',
    backgroundColor: 'transparent',
    border: '1px solid var(--light-grey)',
    borderRadius: '40px',
    cursor: 'not-allowed',
  },

  secondary: {
    backgroundColor: 'var(--white)',
    color: 'var(--secondary-color)',
    fontWeight: 600,
  },

  secondaryDisabled: {
    color: 'var(--light-grey)',
    cursor: 'not-allowed',
  },

  small: {
    padding: '10px 16px',
    fontSize: '12px',
  },

  medium: {
    padding: '11px 20px',
    fontSize: '18px',
  },

  large: {
    padding: '12px 24px',
    fontSize: '21px',
  },

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
};

/** Primary UI component for user interaction */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'large',
  backgroundColor = null,
  label,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    ...styles.button,
    ...styles[size],
    ...(primary ? styles.primary : styles.secondary),
    ...(primary && isHovered && styles.primaryHover),
    ...(disabled && (primary ? styles.primaryDisabled : styles.secondaryDisabled)),
    ...(backgroundColor && { backgroundColor }),
  };

  // ...(disabled && (primary ? styles.primaryDisabled : styles.secondaryDisabled)),
  console.log('buttonStyle', buttonStyle);

  return (
    <button
      type={type}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {label}
    </button>
  );
};
