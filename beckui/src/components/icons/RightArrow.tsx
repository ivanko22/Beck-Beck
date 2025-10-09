import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface IconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const RightArrowIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color,
  hoverColor,
  style = {},
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <BaseIcon
      size={size}
      color={color}
      hoverColor={hoverColor}
      style={style}
      viewBox="0 0 19 18"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path d="M9.23414 0.881051C9.68491 0.430274 10.4156 0.430274 10.8664 0.881051L18.2122 8.22685C18.6629 8.67763 18.6629 9.40831 18.2122 9.85908L10.8664 17.2049C10.4156 17.6557 9.68491 17.6557 9.23414 17.2049C8.78336 16.7541 8.78336 16.0234 9.23414 15.5727L14.6095 10.1973L1.56444 10.1973C0.926949 10.1973 0.410157 9.68046 0.410157 9.04297C0.410157 8.40547 0.926949 7.88868 1.56444 7.88868L14.6095 7.88868L9.23414 2.51328C8.78336 2.06251 8.78336 1.33183 9.23414 0.881051Z" fill="currentColor"/>
    </BaseIcon>
  );
};
