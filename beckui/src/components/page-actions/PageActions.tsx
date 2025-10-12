import React from 'react';
import { Button } from '../button/Button';
import { Footer } from '../footer/Footer';
import { Wrapper } from '../wrapper/PageWrapper';
import { EditIcon, RemoveIcon } from '../icons';
export interface PageActionsProps {
  state: 'save' | 'saved' | 'edit' | 'adding';
  type: 'button' | 'iconButton';
  noLabel?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
  saveLabel?: string;
  cancelLabel?: string;
  leftLabel?: string;
  rightLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  cancelIcon?: React.ReactNode;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

export const PageActions: React.FC<PageActionsProps> = ({
  state,
  type,
  onSave,
  onCancel,
  onEdit,
  onRemove,
  saveLabel = 'Save',
  cancelLabel = 'Cancel',
  rightLabel = 'Edit',
  leftLabel = 'Remove',
  leftIcon = <RemoveIcon size={24} />,
  rightIcon = <EditIcon size={24} />,
  onLeftClick,
  onRightClick,
}) => {
  console.log(state, type);

  if (type === 'button') {
    if (state === 'saved') {
      return (
        <Footer
          onEdit={onRightClick || onEdit}
          onRemove={onLeftClick || onRemove}
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          style={{ marginTop: '30px' }}
        />
      );
    }
    
    return (
      <Wrapper type="row">
        <Button
          type="submit"
          size="medium"
          customSize="200px"
          primary
          disabled={state === 'adding'}
          label={saveLabel}
          icon={''}
          onClick={onSave}
        />
        <Button 
          type="reset" 
          size="medium"
          customSize="140px" 
          label={cancelLabel}
          icon={''}
          onClick={onCancel}
        />
      </Wrapper>
    );
  } else if (type === 'iconButton') {
    return (
      <Wrapper type="row" style={{ alignItems: 'center' }}>
        <Button
          label=""
          size="medium"
          onClick={() => {}}
          icon={leftIcon}
        />

        <Button
          label=""
          size="medium"
          onClick={() => {}}
          icon={rightIcon}
          noLabel={state === 'edit'}
        />
      </Wrapper>
    );
  } 

  return (
    <>
      <Footer
        onEdit={onRightClick || onEdit}
        onRemove={onLeftClick || onRemove}
        leftLabel={leftLabel}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        rightLabel={rightLabel}
        style={{ marginTop: '30px' }}
      />
    </>

  );
};
