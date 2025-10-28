import React from 'react';
import { CloseIcon } from '../icons';
import { Typography } from '../typography/Typography';

export interface ChipsProps {
  label: string;
  color?: 'purple' | 'secondary' | 'orange' | 'green' | 'yellow' | 'blue' | 'red' | 'gray';
  onClose?: () => void;
}

const chipsStyles = {
  purple: {
    background: 'rgba(137, 64, 211, 0.1)',
    borderColor: 'var(--purple)',
    color: 'var(--white)',
  },
  secondary: {
    background: '#F3F0FF',
    borderColor: 'var(--secondary-color)',
    color: 'var(--dark-grey)',
  },
  orange: {
    background: 'var(--orange-light, #FFF4E6)',
    borderColor: 'var(--orange)',
    color: 'var(--dark-grey)',
  },
  green: {
    background: 'rgba(75, 201, 149, 0.1)',
    borderColor: 'var(--success)',
    color: 'var(--dark-grey)',
  },
  yellow: {
    background: 'var(--yellow-light, rgba(228, 203, 111, 0.1))',
    borderColor: 'var(--yellow)',
    color: 'var(--dark-grey)',
  },
  blue: {
    background: 'var(--blue-light, #DBEAFE)',
    borderColor: 'var(--blue)',
    color: 'var(--dark-grey)',
  },
  red: {
    background: 'var(--red-light, #FEE2E2)',
    borderColor: 'var(--red)',
    color: 'var(--dark-grey)',
  },
  gray: {
    background: 'var(--light-grey)',
    borderColor: 'var(--middle-grey)',
    color: 'var(--dark-grey)',
  },
};

const containerStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: '20px',
  border: '2px solid',
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',
};

const closeIconStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  paddingLeft: 10,
  transition: 'opacity 0.2s ease',
};

export const Chips: React.FC<ChipsProps> = ({ 
  label, 
  color, 
  onClose,
}) => {
  const colors = chipsStyles[color as keyof typeof chipsStyles];

  const chipsStyle: React.CSSProperties = {
    ...containerStyle,
    backgroundColor: colors.background,
    borderColor: colors.borderColor,
    color: colors.color,
  };

  return (
    <div style={chipsStyle} onClick={onClose}>
      <Typography variant='title13' color='var(--dark-grey)'>{label}</Typography>
    
      <div style={{ ...closeIconStyle }}>
        <CloseIcon size={8} color='var(--middle-grey)'/>
      </div>
    </div>
  );
};
