import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface IconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const PlusIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color,
  hoverColor,
  className = '',
  style = {},
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <BaseIcon
      size={size}
      color={color}
      hoverColor={hoverColor}
      className={className}
      style={style}
      viewBox="0 0 21 21"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
    <path d="M0.530664 11.8752V8.43888C0.530664 7.84068 1.01193 7.35942 1.61013 7.35942H7.80805V1.1615C7.80805 0.563292 8.28931 0.0820312 8.88752 0.0820312H12.3238C12.922 0.0820312 13.4033 0.563292 13.4033 1.1615V7.35942H19.6012C20.1994 7.35942 20.6807 7.84068 20.6807 8.43888V11.8752C20.6807 12.4734 20.1994 12.9546 19.6012 12.9546H13.4033V19.1526C13.4033 19.7508 12.922 20.232 12.3238 20.232H8.88752C8.28931 20.232 7.80805 19.7508 7.80805 19.1526V12.9546H1.61013C1.01193 12.9546 0.530664 12.4734 0.530664 11.8752Z" fill="currentColor"/>
  </BaseIcon>
  );
};
