import React from 'react';

interface PageWrapperProps {
  type?: 'contentWrapper' | 'content';
  background?: 'white' | 'gray' | 'darkBlue' | 'custom';
  customBackgroundColor?: string;
  padding?: string;
  center?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const contentWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '80px',
  padding: '28px 32px',
};

const backgroundMap: Record<string, string> = {
  white: '#ffffff',
  gray: '#f5f5f5',
  darkBlue: 'var(--primary-color)',
};

export const PageWrapper: React.FC<PageWrapperProps> = ({
  type,
  background = 'white',
  customBackgroundColor,
  padding = 0,
  center = true,
  children,
  style,
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
    ...style,
  };

  return (
    <div
      style={type === 'contentWrapper' ? contentWrapperStyle : wrapperStyle}
    >
        {children}
    </div>
  );
};
