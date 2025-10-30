import React from 'react';
import { Typography } from '../typography/Typography';
import { Alert2Icon } from '../icons/Alert2Icon';

export interface BannerProps {
  message: string;
  variant?: 'warning' | 'info' | 'success' | 'error';
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'flex-start',
    gap: 12,
    padding: '16px',
    backgroundColor: 'var(--white)',
    border: '1px solid var(--light-grey)',
    borderRadius: '6px',
    width: '100%',
  } as React.CSSProperties,

  warningBorder: {
    borderColor: 'var(--warning)',
  } as React.CSSProperties,

  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
  } as React.CSSProperties,
};

export const Banner: React.FC<BannerProps> = ({
  message,
  variant = 'warning',
  icon,
  style,
}) => {
  const getBorderStyle = () => {
    switch (variant) {
      case 'warning':
        return styles.warningBorder;
      case 'error':
        return { borderColor: 'var(--warning)' };
      case 'success':
        return { borderColor: 'var(--success)' };
      case 'info':
        return { borderColor: 'var(--blue)' };
      default:
        return {};
    }
  };

  const getDefaultIcon = () => {
    if (icon) return icon;
    
    switch (variant) {
      case 'warning':
      case 'error':
        return <Alert2Icon size={24} color="var(--warning)" />;
      default:
        return null;
    }
  };

  const containerStyle = {
    ...styles.container,
    ...getBorderStyle(),
    ...style,
  };

  return (
    <div style={containerStyle}>
      {getDefaultIcon()}
      
      <div style={styles.content}>
        <Typography variant="title15" style={{ lineHeight: 1.5 }}>
          {message}
        </Typography>
      </div>
    </div>
  );
};
