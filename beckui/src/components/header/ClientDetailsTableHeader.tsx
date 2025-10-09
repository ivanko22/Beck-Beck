import React from 'react';
import { Typography } from '../typography/Typography';
import { Button } from '../button/Button';
import { Checkbox } from '../checkbox/Checkbox';
import { Wrapper } from '../wrapper/PageWrapper';

export interface ClientDetailsTableHeaderProps {
  type?: 'insurance' | 'relative' | 'medical' | 'liability';
  title: string;
  subtitle?: string;
  showButtons?: boolean;
  smallSectionTitle?: string;
  buttonLabel?: string[];
  buttonIcon?: React.ReactNode[];
  onButtonClick?: () => void;
  borderBottom?: boolean;
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
  } as React.CSSProperties,
  
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  } as React.CSSProperties,
  
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,
};

export const ClientDetailsTableHeader: React.FC<ClientDetailsTableHeaderProps> = ({
  title,
  subtitle,
  smallSectionTitle,
  buttonLabel,
  buttonIcon,
  onButtonClick,
  borderBottom = true,
  style,
  type,
}) => {
  return (
    <>
    <Wrapper type="pageWrapper">
      <div style={{ position: 'relative', top: '22px'}}>
        {type === 'medical' && (
          <Typography variant="sectionTitleSmall">
            {smallSectionTitle}
          </Typography>
        )}
      </div>
  
      <div style={{ 
        ...styles.container, 
        ...style,
        borderBottom: borderBottom ? '1px solid var(--light-grey)' : 'none',
        marginBottom: type === 'medical' ? '-10px' : '20px',
      }}>
        <div style={styles.titleContainer}>
          <Typography variant={type === 'medical' ? 'leftLabel' : 'sectionTitle'} >
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="subtitle" style={{marginTop: '-18px'}}>
              {subtitle}
            </Typography>
          )}
        </div>
        
        <div style={styles.buttonContainer}>
          {buttonLabel?.map((label, index) => (
            <Button
              key={index}
              label={label}
              icon={buttonIcon?.[index]}
              iconPosition="left"
              onClick={onButtonClick}
              size="medium"
            />
          ))}
        </div>
      </div>

      <div>
        {(type === 'relative' || type === 'liability') && (
          <Checkbox
            label={type === "relative" ? "No Resident Relative Ins. Co" : "No Liability Insurance Co"}
            checked={false}
            onChange={() => {}}
          />
        )}
      </div>

      </Wrapper>
    </>
  );
};
  