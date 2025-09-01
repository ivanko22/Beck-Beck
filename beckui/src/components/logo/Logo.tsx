import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'lg',
  style={}
}) => {
  const dimensions = {
    sm: 90,
    md: 160,
    lg: 294,
  };

  return (
    <div style={{ display: 'flex', ...style }}>
      <img
        src='./logoWhite.png'
        width={dimensions[size]}
        height="auto"
      >
      </img>

    </div>
  );
};
