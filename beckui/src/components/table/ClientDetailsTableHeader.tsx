import React from 'react';
import { Typography } from '../typography/Typography';
import { Button } from '../button/Button';

export interface ClientDetailsTableHeaderProps {
  title: string;
  buttonLabel: string;
  buttonIcon?: React.ReactNode;
  onButtonClick?: () => void;
  style?: React.CSSProperties;
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    marginBottom: 20,
    paddingBottom: '4px',
    borderBottom: '1px solid var(--light-grey)',
  } as React.CSSProperties,
  
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,
  
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,
};

export const ClientDetailsTableHeader: React.FC<ClientDetailsTableHeaderProps> = ({
  title,
  buttonLabel,
  buttonIcon,
  onButtonClick,
  style,
}) => {
  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={styles.titleContainer}>
        <Typography 
          variant="sectionTitle" 
        >
          {title}
        </Typography>
      </div>
      
      <div style={styles.buttonContainer}>
        <Button
          label={buttonLabel}
          size="medium"
          icon={buttonIcon}
          iconPosition="left"
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};
