import React from 'react';

export interface TypographyProps {
  variant?: 'title' | 'subtitle' | 'sectionTitle' | 'leftLabel' | 'titleSmall' | 'sectionTitleSmall' | 'secondaryTitle' | 'title16' | 'title15' | 'title17' | 'title12' | 'title18' | 'title13';
  children: React.ReactNode;
  style?: React.CSSProperties;
  color?: string;
}

const base = {
  default: { fontWeight: 500, color: 'var(--dark-grey)' },
  primary: { color: 'var(--primary-color)' },
};

const styles = {
  title:       { ...base.primary, fontSize: '28px', lineHeight: 1.2, fontWeight: 600 },
  subtitle:    { ...base.primary, fontSize: '16px', paddingTop: '20px', fontWeight: 400, color: 'var(--middle-grey)', minWidth: '482px', textAlign: 'left', alignItems: 'center' },
  sectionTitle:{ ...base.default, fontSize: '26px', margin: 0 },
  sectionTitleSmall: { ...base.default, fontSize: '18px', margin: 0 },
  leftLabel:   { ...base.default, fontSize: '16px', textAlign: 'right' },
  secondaryTitle:{ ...base.primary, fontSize: '20px', fontWeight: 600 },
  title16:     { ...base.default, fontSize: '16px' },
  title18:     { ...base.default, fontSize: '18px' },
  title17:     { ...base.default, fontSize: '17px' },
  title15:     { ...base.default, fontSize: '15px' },
  titleSmall:  { ...base.default, fontSize: '14px' },
  title13:     { ...base.default, fontSize: '13px' },
  title12:     { ...base.default, fontSize: '12px' },
} as const;


export const Typography: React.FC<TypographyProps> = ({
  variant = 'title',
  children,
  style,
  color,
}) => {
  const combinedStyle = {
    ...styles[variant],
    ...(color && { color}),
    ...style, 
  };

  return (
    <span style={combinedStyle}>
      {children}
    </span>
  );
};