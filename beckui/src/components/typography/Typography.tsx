import React from 'react';
// import { color } from 'storybook/internal/theming';

export interface TypographyProps {
  variant?: 'title' | 'subtitle' ;
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
    fontSize: '18px',
    fontWeight: 500,
    color: 'var(--middle-grey)',
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