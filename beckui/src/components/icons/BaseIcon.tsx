import React from 'react';

export interface BaseIconProps {
  size?: number;
  color?: string;
  hoverColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  viewBox?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const BaseIcon: React.FC<BaseIconProps> = ({
  size = 20,
  color,
  hoverColor,
  className = '',
  style = {},
  children,
  viewBox = '0 0 24 24',
  onMouseEnter,
  onMouseLeave
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave?.();
  };

  const currentColor = isHovered && hoverColor ? hoverColor : color;

  return (
    <svg
      width={size}
      height={size}
      color={currentColor}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        display: 'block',
        flexShrink: 0,
        cursor: hoverColor ? 'pointer' : 'default',
        transition: hoverColor ? 'color 0.2s ease' : 'none',
        ...style
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </svg>
  );
};
