import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 16,
    border: '1px solid var(--light-grey)',
    borderRadius: '6px',
    padding: '25px',
    backgroundColor: 'var(--white)',
  } as React.CSSProperties,
};

export const Card: React.FC<CardProps> = ({ children, style, ...rest }) => {
  return (
    <div style={{ ...styles.container, ...style }} {...rest}>
      {children}
    </div>
  );
};
