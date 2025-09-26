import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ArrowIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M6.43066 12.8223L1.40625 7.79785M6.43066 12.8223L11.4551 7.79785M6.43066 12.8223L6.43066 1.09863" 
        stroke={color} stroke-width="1.6748" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
