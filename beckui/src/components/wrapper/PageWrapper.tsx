import React from 'react';

interface WrapperProps {
  type?: 'contentWrapper' | 'pageWrapper' | 'mainWrapper' | 'pageWrapperContentRow' | 'pageWrapperContentColumn';
  background?: 'white' | 'gray' | 'darkBlue' | 'custom';
  customBackgroundColor?: string;
  padding?: string;
  center?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const pageWrapperStyle: React.CSSProperties = {
  display: 'block',
};

const pageWrapperContentRow: React.CSSProperties = {
  display: 'flex',
};

const pageWrapperContentColumn: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const mainWrapperStyle: React.CSSProperties = {
  display: 'flex',
  width: 'calc(100vw - 300px)',
  height: '100vh',
  flexDirection: 'column',
  marginLeft: 300,
  boxSizing: 'border-box',
  overflow: 'auto',
};

const contentWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '80px',
  padding: '28px 32px',
};

const backgroundMap: Record<string, string> = {
  white: '#ffffff',
  gray: '#f5f5f5',
  darkBlue: 'var(--primary-color)',
};

export const Wrapper: React.FC<WrapperProps> = ({
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
    type === 'pageWrapper' ? (
      <div style={{...pageWrapperStyle, ...style}}>
        {children}
      </div>
    ) : type === 'contentWrapper' ? (
      <div style={{...contentWrapperStyle, ...style}}>
        {children}
      </div>
    ) : type === 'mainWrapper' ? (
      <div style={{...mainWrapperStyle, ...style}}>
        {children}
      </div>
    ) : type === 'pageWrapperContentRow' ? (
      <div style={{...pageWrapperContentRow, ...style}}>
        {children}
      </div>
    ) : type === 'pageWrapperContentColumn' ? (
      <div style={{...pageWrapperContentColumn, ...style}}>
        {children}
      </div>
    ) : (
      <div style={wrapperStyle}>
        {children}
      </div>
    )
  );
};