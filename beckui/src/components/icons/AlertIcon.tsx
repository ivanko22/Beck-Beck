import React from 'react';
import { BaseIcon } from './BaseIcon';

interface AlertIconProps {
  size?: number;
  color?: string;
}

export const AlertIcon: React.FC<AlertIconProps> = ({ 
  size = 20, 
  color = '#F06161',
  ...props
}) => {
  return (
    <BaseIcon 
      size={size} 
      color={color} 
      viewBox="0 0 19 22"
      {...props}
    >
      <path 
        d="M7.51549 19.7395C7.51549 20.8804 8.43855 21.8034 9.5794 21.8034C10.7203 21.8034 11.6433 20.8804 11.6433 19.7395H7.51549ZM16.7149 15.3939V9.35772C16.7149 5.98701 14.3814 3.16598 11.2285 2.41924V1.67249C11.2285 0.759809 10.4921 0.0234375 9.5794 0.0234375C8.66672 0.0234375 7.93035 0.759809 7.93035 1.67249V2.41924C4.77743 3.16598 2.44386 5.98701 2.44386 9.35772V15.3939L0.245117 17.5926V18.692H18.9137V17.5926L16.7149 15.3939ZM13.728 11.4372H10.6165V14.5486H8.54226V11.4372H5.43083V9.35772H8.54226V6.24629H10.6165V9.35772H13.728V11.4372Z" 
        fill="currentColor"
      />
    </BaseIcon>
  );
};
