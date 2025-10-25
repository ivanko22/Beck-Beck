import React from 'react';
import { BaseIcon } from './BaseIcon';

export interface StethoscopeIconProps {
  size?: number;
  color?: string;
  hoverColor?: string;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const StethoscopeIcon: React.FC<StethoscopeIconProps> = ({
  size = 20,
  color = 'var(--middle-grey)',
  hoverColor,
  style,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <BaseIcon
      size={size}
      color={color}
      hoverColor={hoverColor}
      style={style}
      viewBox="0 0 20 20"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path 
        d="M11.5 20C9.7 20 8.16667 19.3667 6.9 18.1C5.63333 16.8333 5 15.3 5 13.5V12.925C3.56667 12.6917 2.375 12.0207 1.425 10.912C0.475 9.80333 0 8.49933 0 7V1H3V0H5V4H3V3H2V7C2 8.1 2.39167 9.04167 3.175 9.825C3.95833 10.6083 4.9 11 6 11C7.1 11 8.04167 10.6083 8.825 9.825C9.60833 9.04167 10 8.1 10 7V3H9V4H7V0H9V1H12V7C12 8.5 11.525 9.80433 10.575 10.913C9.625 12.0217 8.43333 12.6923 7 12.925V13.5C7 14.75 7.43767 15.8127 8.313 16.688C9.18833 17.5633 10.2507 18.0007 11.5 18C12.7493 17.9993 13.812 17.562 14.688 16.688C15.564 15.814 16.0013 14.7513 16 13.5V11.825C15.4167 11.625 14.9377 11.2667 14.563 10.75C14.1883 10.2333 14.0007 9.65 14 9C14 8.16667 14.2917 7.45833 14.875 6.875C15.4583 6.29167 16.1667 6 17 6C17.8333 6 18.5417 6.29167 19.125 6.875C19.7083 7.45833 20 8.16667 20 9C20 9.65 19.8127 10.2333 19.438 10.75C19.0633 11.2667 18.584 11.625 18 11.825V13.5C18 15.3 17.3667 16.8333 16.1 18.1C14.8333 19.3667 13.3 20 11.5 20Z" 
        fill="currentColor"
      />
    </BaseIcon>
  );
};
