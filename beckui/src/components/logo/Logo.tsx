import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | string;
  style?: React.CSSProperties;
}

const styles = {
  logo: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export const Logo: React.FC<LogoProps> = ({
  size = 'lg',
  style={}
}) => {
  const dimensions = {
    sm: 90,
    md: 160,
    lg: 294,
  };

  const getWidth = () => {
    if (typeof size === 'string' && !['sm', 'md', 'lg'].includes(size)) {
      return size;
    }
    return dimensions[size as keyof typeof dimensions];
  };

  return (
    <div style={{ ...styles.logo, ...style }}>
      <img
        src='./logoWhite.png'
        width={getWidth()}
        height="auto"
      >
      </img>
    </div>
  );
};
