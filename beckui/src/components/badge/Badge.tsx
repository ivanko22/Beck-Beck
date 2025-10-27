import React from 'react';
import { Wrapper } from '../wrapper/PageWrapper';
import { Typography } from '../typography/Typography';

export interface BadgeProps {
  label: string;
  badgeLabel?: string;
  color?: string;
  style?: React.CSSProperties;
}

const styles = {
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 22,
    height: 22,
    borderRadius: '50%',
    fontWeight: 500,
    fontSize: 14,
    border: '1px solid var(--light-grey)',
    transition: 'all 0.2s ease',
  },
  label: {
    marginLeft: '8px',
    fontWeight: 400,
    color: 'var(--dark-grey)',
    fontSize: '14px',
    lineHeight: 1.4,
  },

};

export const Badge: React.FC<BadgeProps> = ({
  label,
  badgeLabel,
  color = 'var(--light-grey)',
  style,
}) => {
  const badgeStyle = {
    ...styles.badge,
    borderColor: color,
    color,
    ...style,
  };

  return (
    <Wrapper type="row" style={{ alignItems: 'center', gap: 6 }}>
      
      <Wrapper type="row" style={{ width: 24 }}>
        <Typography variant="titleSmall" style={badgeStyle}>
          {badgeLabel}
        </Typography>
      </Wrapper>
 
      <span style={styles.label}>
        {label}
      </span>
    </Wrapper>
  );
};
