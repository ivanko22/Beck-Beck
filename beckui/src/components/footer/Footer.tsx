import React, { useState } from 'react';
import { EditIcon, RemoveIcon } from '../icons';
import { Button } from '../button/Button';

export interface FooterProps {
  onEdit?: () => void;
  onRemove?: () => void;
  editLabel?: string;
  removeLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const S = {
  wrap: {
    minWidth: '1000px',
    borderTop: '1px solid var(--light-grey)',
    marginTop: 40,
    paddingTop: 11,
    paddingBottom: 22,
    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,

};

export const Footer: React.FC<FooterProps> = ({
  onEdit,
  onRemove,
  editLabel = 'Edit',
  removeLabel = 'Remove',
  className,
  style,
}) => {

  return (
    <div style={{ ...S.wrap, ...style }} className={className}>
      <Button
        color='var(--middle-grey)'
        size='small'
        label={editLabel}
        onClick={() => onEdit?.()}
        icon={<EditIcon size={32} />}
        iconPosition="left"
      />

      <Button
        color='var(--middle-grey)'
        size='small'
        label={removeLabel}
        onClick={() => onRemove?.()}
        icon={<RemoveIcon size={35}  />}
        iconPosition="left"
      />

    </div>
  );
};
