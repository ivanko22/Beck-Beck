import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface IconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const AccordionIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  style = {},
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <BaseIcon
      size={size}
      viewBox="0 0 31 31"
      color={color}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path d="M14.9179 23.3104L3.84004 12.232C3.30593 11.6979 3.30593 10.8314 3.84004 10.2973L5.13228 9.00507C5.66582 8.47153 6.52997 8.47096 7.06465 9.00279L15.8852 17.7828L24.7063 9.00336C25.241 8.47096 26.1051 8.4721 26.6387 9.00564L27.9309 10.2979C28.465 10.832 28.465 11.6984 27.9309 12.2325L16.8525 23.3104C16.3184 23.8445 15.452 23.8445 14.9179 23.3104Z" fill={color}/>
    </BaseIcon>
  );
};

