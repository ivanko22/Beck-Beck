import React from 'react';
import { EditIcon, RemoveIcon } from '../icons';
import { Button } from '../button/Button';
import { Wrapper } from '../wrapper/PageWrapper';
import { Border } from '../border/Border';

export interface FooterProps {
  onEdit?: () => void;
  onRemove?: () => void;
  editLabel?: string;
  removeLabel?: string;
  style?: React.CSSProperties;
}

export const Footer: React.FC<FooterProps> = ({
  onEdit,
  onRemove,
  editLabel = 'Edit',
  removeLabel = 'Remove',
}) => {

  return (
    <Wrapper type="pageWrapperContentColumn" style={{ alignItems: 'center', marginTop: '30px' }}>
      <Border />

      <Wrapper type="pageWrapperContentRow">
        <Button
          color='var(--middle-grey)'
          size='medium'
          label={editLabel}
          onClick={() => onEdit?.()}
          icon={<EditIcon size={26} />}
          iconPosition="left"
        />

        <Button
          color='var(--middle-grey)'
          size='medium'
          label={removeLabel}
          onClick={() => onRemove?.()}
          icon={<RemoveIcon size={24}  />}
          iconPosition="left"
        />
      </Wrapper>

    </Wrapper>
  );
};
