import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const DropdownIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.09938 0.367188H8.90066C9.60212 0.367188 9.95285 1.21615 9.45789 1.7111L5.55725 5.61174C5.24914 5.91986 4.7509 5.91986 4.44606 5.61174L0.542149 1.7111C0.0471942 1.21615 0.397924 0.367188 1.09938 0.367188Z"
        fill={color}
      />
    </svg>
  );
};
