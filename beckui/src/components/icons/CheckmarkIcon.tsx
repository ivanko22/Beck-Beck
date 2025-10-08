import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface IconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const CheckmarkIcon: React.FC<IconProps> = ({ 
  size = 18, 
  style = {},
  color,
  hoverColor,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <BaseIcon
      size={size}
      color={color}
      hoverColor={hoverColor}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      viewBox="0 0 18 14"
    >
      <path
        d="M15.6939 -0.00390625L17.5534 1.84766L6.1356 13.6513L0.443359 7.63402L2.30286 5.72466L6.1356 9.89043L15.6939 -0.00390625Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};