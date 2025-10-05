import React from 'react';

interface BorderProps {
  width?: string;
  color?: string;
  weight?: string;
}

export const Border: React.FC<BorderProps> = ({
  width = '100%',
  color = 'var(--light-grey)',
  weight = '1px',
}) => {
  return (
    <div
      style={{
        width: width,
        height: '0px',
        borderBottom: `${weight} solid ${color}`,
      }}
    />
  );
};
