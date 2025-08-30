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
    fontSize: '21px',
  },
  primaryHover: {
    backgroundColor: 'var(--secondary-color-hover)',
  },
  secondary: {
    boxShadow: 'var(--secondary-color)',
    backgroundColor: 'transparent',
    color: '#333',
  },
  small: {
    padding: '10px 16px',
    fontSize: '12px',
  },
  medium: {
    padding: '11px 20px',
    fontSize: '14px',
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
    ...(primary ? styles.primary : styles.secondary),
    ...(primary && isHovered && styles.primaryHover),
    ...(disabled && styles.disabled),
    ...(backgroundColor && { backgroundColor }),
  };

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
