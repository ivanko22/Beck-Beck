import React from 'react';
import { Button } from '../button/Button';
import { Footer } from '../footer/Footer';

export interface PageActionsProps {
  type: 'save' | 'saved' | 'edit';
  onSave?: () => void;
  onCancel?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
  saveLabel?: string;
  editLabel?: string;
  removeLabel?: string;
  style?: React.CSSProperties;
}

const L = {
  actions: {
    display: 'flex',
    gap: 12,
    marginTop: 32,
    justifyContent: 'flex-start',
  } as React.CSSProperties,
};

export const PageActions: React.FC<PageActionsProps> = ({
  type,
  onSave,
  onCancel,
  onEdit,
  onRemove,
  saveLabel = 'Save',
  editLabel = 'Edit',
  removeLabel = 'Remove',
  style,
}) => {
  if (type === 'save' || type === 'edit') {
    return (
      <div style={{ ...L.actions, ...style }}>
        <Button
          type="submit"
          size="medium"
          customSize="200px"
          primary
          disabled={type === 'save'}
          label={saveLabel}
          onClick={onSave}
        />
        <Button 
          type="reset" 
          size="medium"
          customSize="140px" 
          label={'Cancel'} 
          onClick={onCancel} 
        />
      </div>
    );
  }

  return (
    <Footer
      onEdit={onEdit}
      onRemove={onRemove}
      editLabel={editLabel}
      removeLabel={removeLabel}
    />
  );
};
