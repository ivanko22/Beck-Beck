import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface DownloadBillsIconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const DownloadBillsIcon: React.FC<DownloadBillsIconProps> = ({ 
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
      viewBox="0 0 31 31"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
    <path d="M24.2057 9.86363H19.8225V7.67205L17.6309 5.48047H13.2478L11.0562 7.67205V9.86363H6.67302C5.46218 9.86363 4.4924 10.8444 4.4924 12.0552L4.48145 24.1089C4.48145 25.3197 5.46218 26.3005 6.67302 26.3005H24.2057C25.4165 26.3005 26.3972 25.3197 26.3972 24.1089V12.0552C26.3972 10.8444 25.4165 9.86363 24.2057 9.86363ZM13.2478 7.67205H17.6309V9.86363H13.2478V7.67205ZM15.4393 24.1089L9.96039 18.6299H13.2478V14.2468H17.6309V18.6299H20.9183L15.4393 24.1089Z" fill="currentColor"/>
  </BaseIcon>
  );
};

