import React, { useState } from 'react';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  color?: string | null;
  size?: 'small' | 'medium' | 'large' ;
  customSize?: string;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  noLabel?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'center';
}

const styles = {
  button: {
    display: 'inline-block',
    cursor: 'pointer',
    border: 0,
    borderRadius: '3em',
    fontWeight: 700,
    transition: 'all 0.2s ease',
    outline: 'none',
  },

  primary: {
    backgroundColor: 'var(--secondary-color)',
    color: 'white',
    fontWeight: 600,
  },

  noLabelButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '40px',
    height: '48px',
    width: '48px',
    color: 'var(--white)',
    backgroundColor: 'var(--secondary-color)',
    fontWeight: 600,
    marginTop: '-10px',
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
    backgroundColor: '#ffffff00',
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
    gap: '13px',
    pointerEvents: 'none' as const,
  },

  iconRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexDirection: 'row-reverse' as const,
    pointerEvents: 'none' as const,
  },
  iconCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none' as const,
  },
};

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'large',
  noLabel = false,
  backgroundColor = null,
  color = null,
  customSize,
  label,
  onClick,
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

    if (noLabel === true) {
      return(   
        <div style={{...styles.noLabelButton}}>
            {icon}
        </div>)
    } 

    const iconStyle = iconPosition === 'left' ? styles.iconLeft : iconPosition === 'right' ? styles.iconRight : styles.iconCenter;
    
    return (
      <div style={iconStyle}>
        <div style={{display: 'flex', alignItems: 'center', color: 'inherit', pointerEvents: 'none' as const }}>
          {icon}
        </div>
        <span style={{ width: '100%' }}>{label}</span>
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
