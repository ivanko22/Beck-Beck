import React from 'react';
import { EditIcon, RemoveIcon } from '../icons';
import { Button } from '../button/Button';
import { Wrapper } from '../wrapper/PageWrapper';
import { Border } from '../border/Border';

export interface FooterProps {
  onEdit?: () => void;
  onRemove?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftLabel?: string;
  rightLabel?: string;
  style?: React.CSSProperties;
}

export const Footer: React.FC<FooterProps> = ({
  leftIcon,
  rightIcon,
  leftLabel,
  rightLabel,
  onEdit,
  onRemove,
}) => {

  return (
    <Wrapper type="column" style={{ alignItems: 'center', marginTop: '30px' }}>
      <Border />

      <Wrapper type="row">
        <Button
          size='medium'
          label={leftLabel}
          onClick={onRemove}
          icon={leftIcon || <EditIcon size={26} />}
          iconPosition="left"
        />

        <Button
          size='medium'
          label={rightLabel}
          onClick={onEdit}
          icon={rightIcon || <RemoveIcon size={24} />}
          iconPosition="left"
        />
      </Wrapper>

    </Wrapper>
  );
};
