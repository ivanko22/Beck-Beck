import React from 'react';
import { Button } from '../button/Button';
import { Footer } from '../footer/Footer';
import { Wrapper } from '../wrapper/PageWrapper';
import { CheckmarkIcon, CloseIcon, EditIcon, RemoveIcon } from '../icons';
export interface PageActionsProps {
  state: 'save' | 'saved' | 'edit';
  type: 'button' | 'iconButton';
  noLabel?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
  saveLabel?: string;
  cancelLabel?: string;
  editLabel?: string;
  removeLabel?: string;
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
  editLabel = 'Edit',
  removeLabel = 'Remove',
}) => {
  if (state === 'save' && type === 'button') {
    return (
      <Wrapper type="pageWrapperContentRow">
        <Button
          type="submit"
          size="medium"
          customSize="200px"
          primary
          disabled={true}
          label={saveLabel}
          onClick={onSave}
        />
        <Button 
          type="reset" 
          size="medium"
          customSize="140px" 
          label={cancelLabel} 
          onClick={onCancel} 
        />
      </Wrapper>
    );
  } else if (state === 'edit' && type === 'button') {
    return (
      <Wrapper type="pageWrapperContentRow">
        <Button
          type="submit"
          size="medium"
          customSize="200px"
          primary
          disabled={false}
          label={saveLabel}
          onClick={onSave}
        />
        <Button 
          type="reset" 
          size="medium"
          customSize="140px" 
          label={cancelLabel} 
          onClick={onCancel} 
        />
      </Wrapper>
    );
  } else if (type === 'iconButton') {
    return (
      <Wrapper type="pageWrapperContentRow" style={{ alignItems: 'center' }}>
        <Button
          label=""
          size="medium"
          onClick={() => {}}
          icon={state === 'edit' ? <CloseIcon size={20} /> : <RemoveIcon size={33} />}
          disabled={state === 'edit'}
        />

        <Button
          label=""
          size="medium"
          onClick={() => {}}
          icon={state == 'edit' ? <CheckmarkIcon size={20} /> : <EditIcon size={30} />}
          noLabel={state === 'edit'}
        />
      </Wrapper>
    );
  } 

  return (
    <>
      <Footer
        onEdit={onEdit}
        onRemove={onRemove}
        editLabel={editLabel}
        removeLabel={removeLabel}
        style={{ marginTop: '30px'}}
      />
    </>

  );
};
