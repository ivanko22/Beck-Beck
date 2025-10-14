import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface IconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const PhoneIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  style = {},
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <BaseIcon
      size={size}
      viewBox="0 0 23 23"
      color={color}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path d="M21.7846 1.98734L17.3159 0.956219C16.8297 0.844028 16.3328 1.09595 16.1361 1.55482L14.0736 6.36719C13.9855 6.57276 13.9666 6.8014 14.0198 7.01864C14.073 7.23588 14.1954 7.42994 14.3685 7.57156L16.9731 9.70264C15.4274 12.9973 12.7219 15.7401 9.35695 17.3188L7.22587 14.7142C7.08424 14.5411 6.89018 14.4187 6.67294 14.3655C6.45571 14.3123 6.22707 14.3312 6.0215 14.4193L1.20912 16.4818C0.750386 16.6784 0.498288 17.1753 0.610522 17.6616L1.64164 22.1303C1.74881 22.5947 2.16298 22.9297 2.64647 22.9297C13.6502 22.9297 22.584 14.0123 22.584 2.99217C22.584 2.51195 22.2525 2.09528 21.7846 1.98734Z" fill={color}/>
    </BaseIcon>
  );
};
