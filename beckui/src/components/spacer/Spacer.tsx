import React from 'react';

export interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  customSize?: number;
  horizontal?: boolean;
}

const sizeMap = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  customSize,
  horizontal = false,
}) => {
  const spacerSize = customSize ?? sizeMap[size];

  const spacerStyle: React.CSSProperties = {
    ...(horizontal ? { width: spacerSize } : { height: spacerSize }),
  };

  return <div style={spacerStyle} />;
};
