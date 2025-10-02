import React from 'react';
import { Typography } from '../typography/Typography';
import { Button } from '../button/Button';
import { Checkbox } from '../checkbox/Checkbox';

export interface ClientDetailsTableHeaderProps {
  type?: 'insurance' | 'relative';
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
  type,
}) => {
  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={styles.titleContainer}>
        <Typography 
          variant="sectionTitle" 
        >
          {title}
        </Typography>

        <div style={{position: 'relative',top: '60px',right: '302px'}}>
          {type === 'relative' && (
            <Checkbox
              label='No Resident Relative Ins. Co'
              checked={false}
              onChange={() => {}}
            />
          )}
        </div>
 
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
