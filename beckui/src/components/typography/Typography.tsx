import React from 'react';

export interface TypographyProps {
  variant?: 'title' | 'subtitle' | 'sectionTitle' | 'leftLabel';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

const styles: Record<NonNullable<TypographyProps['variant']>, React.CSSProperties> = {
  title: {
    fontSize: '28px',
    fontWeight: 600,
    color: 'var(--primary-color)',
    lineHeight: 1.2,
  },
  subtitle: {
    width: '482px',
    fontSize: '16px',
    paddingTop: '20px',
    fontWeight: 400,
    color: 'var(--middle-grey)',
    alignItems: 'center',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '26px',
    fontWeight: 500,
    color: 'var(--dark-grey)',
    margin: 0,
  },
  leftLabel: {
    fontSize: '16px',
    fontWeight: 500,
    color: 'var(--dark-grey)',
  },
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'title',
  children,
  className = '',
  style = {},
  color,
}) => {
  const combinedStyle = {
    ...styles[variant],
    ...style, 
    ...(color && { color}),
  };

  return (
    <span className={className} style={combinedStyle}>
      {children}
    </span>
  );
};