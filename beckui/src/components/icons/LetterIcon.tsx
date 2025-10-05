import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface IconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const LetterIcon: React.FC<IconProps> = ({ 
  size = 22, 
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
      viewBox="0 0 22 18"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path
        d="M0.812368 17.6837L21.0327 9.01374L0.812368 0.34375L0.802734 7.08708L15.2527 9.01374L0.802734 10.9404L0.812368 17.6837Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};
