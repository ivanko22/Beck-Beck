import React, { useState } from 'react';
import { AttachIcon } from '../icons';

interface UploadProps {
  label?: string;
  placeholder?: string;
  onFileSelect?: (files: FileList) => void;
  multiple?: boolean;
  accept?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Upload: React.FC<UploadProps> = ({
  label = "Drop files here to attach and add files",
  placeholder = "Drop files here to attach and add files",
  onFileSelect,
  multiple = false,
  accept,
  disabled = false,
  style,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (disabled) return;

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFiles(files);
      onFileSelect?.(files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(files);
      onFileSelect?.(files);
    }
  };

  const styles = {
    uploadContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    } as React.CSSProperties,
    
    icon: {
      flexShrink: 0,
    } as React.CSSProperties,
    
    text: {
      color: isDragOver ? 'var(--secondary-color)' : 'var(--middle-grey)',
      fontSize: '14px',
      fontWeight: 500,
      width: '128px',
      userSelect: 'none' as const,
    } as React.CSSProperties,
    
    hiddenInput: {
      display: 'none',
    } as React.CSSProperties,
  };

  const displayText = selectedFiles && selectedFiles.length > 0 
    ? `${selectedFiles.length} file(s) selected`
    : label;

  return (
    <div
      style={{ ...styles.uploadContainer, ...style }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => {
        if (!disabled) {
          document.getElementById('file-input')?.click();
        }
      }}
    >
      <AttachIcon 
        size={26} 
        color={isDragOver ? 'var(--secondary-color)' : 'var(--middle-grey)'}
        style={styles.icon}
      />
      <span style={styles.text}>
        {displayText}
      </span>
      
      <input
        id="file-input"
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={handleFileInput}
        disabled={disabled}
        style={styles.hiddenInput}
      />
    </div>
  );
};
