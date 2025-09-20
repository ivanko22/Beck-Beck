import React from 'react';

interface PageWrapperProps {
  background?: 'white' | 'gray' | 'darkBlue' | 'custom';
  customBackgroundColor?: string;
  padding?: string;
  center?: boolean;
  children?: React.ReactNode;
}

const backgroundMap: Record<string, string> = {
  white: '#ffffff',
  gray: '#f5f5f5',
  darkBlue: 'var(--primary-color)',
};

export const PageWrapper: React.FC<PageWrapperProps> = ({
  background = 'white',
  customBackgroundColor,
  padding = 0,
  center = true,
  children,
}) => {
  const backgroundColor = background === 'custom' ? customBackgroundColor : backgroundMap[background];

  const wrapperStyle: React.CSSProperties = {
    backgroundColor,
    padding,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: center ? 'center' : undefined,
    alignItems: center ? 'center' : undefined,
    width: '100vw',
    height: '100vh',
  };

  return (
    <div
      style={wrapperStyle}
    >
        {children}
    </div>
  );
};
