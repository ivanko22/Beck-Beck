import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface UploadIconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const UploadIcon: React.FC<UploadIconProps> = ({ 
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
      viewBox="0 0 14 18"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path d="M13.4808 6.4873H9.64811V0.738281H3.89909V6.4873H0.0664062L6.7736 13.1945L13.4808 6.4873ZM0.0664062 15.1108V17.0272H13.4808V15.1108H0.0664062Z" fill="currentColor"/>
    </BaseIcon>
  );
};
