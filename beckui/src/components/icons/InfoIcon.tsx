import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface IconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const InfoIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  style = {},
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <BaseIcon
      size={size}
      viewBox="0 0 20 20"
      color={color}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path d="M9.66211 1.93239C13.9242 1.93239 17.3918 5.39979 17.3918 9.66211C17.3918 13.9244 13.9242 17.3918 9.66211 17.3918C5.40002 17.3918 1.93239 13.9244 1.93239 9.66211C1.93239 5.39983 5.40002 1.93239 9.66211 1.93239ZM9.66211 0C4.32585 0 0 4.32585 0 9.66211C0 14.9984 4.32585 19.3242 9.66211 19.3242C14.9984 19.3242 19.3242 14.9984 19.3242 9.66211C19.3242 4.32585 14.9984 0 9.66211 0ZM10.6283 14.4932H11.5945V13.5269H10.6283V8.69589V7.72968H8.69589H7.72968V8.69589H8.69589V13.5269H7.72968V14.4932H8.69589H10.6283ZM10.6283 4.83104H8.69589V6.76347H10.6283V4.83104Z" fill={color}/>
    </BaseIcon>
  );
};

