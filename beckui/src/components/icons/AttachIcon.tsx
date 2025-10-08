import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface IconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const AttachIcon: React.FC<IconProps> = ({ 
  size = 13, 
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
      viewBox="0 0 13 26"
    >
      <path
        d="M11.3454 6.51432V19.2422C11.3454 21.6882 9.36426 23.6693 6.91829 23.6693C4.47233 23.6693 2.49121 21.6882 2.49121 19.2422V5.40755C2.49121 3.88021 3.73079 2.64062 5.25814 2.64062C6.78548 2.64062 8.02507 3.88021 8.02507 5.40755V17.0286C8.02507 17.6374 7.53255 18.1354 6.91829 18.1354C6.30404 18.1354 5.81152 17.6374 5.81152 17.0286V6.51432H4.15137V17.0286C4.15137 18.556 5.39095 19.7956 6.91829 19.7956C8.44564 19.7956 9.68522 18.556 9.68522 17.0286V5.40755C9.68522 2.96159 7.7041 0.980469 5.25814 0.980469C2.81217 0.980469 0.831055 2.96159 0.831055 5.40755V19.2422C0.831055 22.6068 3.55924 25.3294 6.91829 25.3294C10.2773 25.3294 13.0055 22.6068 13.0055 19.2422V6.51432H11.3454Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};
