import React, { useState } from 'react';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  color?: string | null;
  size?: 'small' | 'medium' | 'large' ;
  customSize?: string;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const styles = {
  button: {
    display: 'inline-block',
    cursor: 'pointer',
    border: 0,
    borderRadius: '3em',
    fontWeight: 700,
    lineHeight: 1,
    fontFamily: 'var(--font-family-base)',
    transition: 'all 0.2s ease',
  },

  primary: {
    backgroundColor: 'var(--secondary-color)',
    color: 'white',
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
    color: 'var(--middle-grey)',
    fontWeight: 500,
  },

  secondaryHover: {
    color: 'var(--secondary-color)',
  },

  secondaryDisabled: {
    color: 'var(--light-grey)',
    cursor: 'not-allowed',
  },

  small: {
    padding: '10px 16px',
    fontSize: '14px',
  },

  medium: {
    height: '48px',
    fontSize: '16px',
  },

  large: {
    padding: '20px 24px',
    fontSize: '21px',
    width: '280px',
  },

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    pointerEvents: 'none' as const,
  },

  iconLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    pointerEvents: 'none' as const,
  },

  iconRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexDirection: 'row-reverse' as const,
    pointerEvents: 'none' as const,
  },
};

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'large',
  backgroundColor = null,
  color = null,
  customSize,
  label,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    ...styles.button,
    ...styles[size],
    ...(primary ? styles.primary : styles.secondary),
    ...(backgroundColor && { backgroundColor }),
    ...(color && { color }),
    ...(primary && isHovered && styles.primaryHover),
    ...(!primary && isHovered && styles.secondaryHover),
    ...(disabled && (primary ? styles.primaryDisabled : styles.secondaryDisabled)),
    ...(customSize && { width: customSize }),
  };

  const renderContent = () => {
    if (!icon) {
      return label;
    }

    const iconStyle = iconPosition === 'left' ? styles.iconLeft : styles.iconRight;
    
    return (
      <div style={iconStyle}>
        <div style={{ color: 'inherit', pointerEvents: 'none' as const }}>
          {icon}
        </div>
        <span>{label}</span>
      </div>
    );
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
      {renderContent()}
    </button>
  );
};
