import React from 'react';
import { Button } from '../button/Button';
import { Footer } from '../footer/Footer';
import { Wrapper } from '../wrapper/PageWrapper';
export interface PageActionsProps {
  type: 'save' | 'saved' | 'edit';
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
  if (type === 'save') {
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
  } else if (type === 'edit') {
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
