import React from 'react';
import { AttachIcon } from '../icons';
import { Wrapper } from '../wrapper/PageWrapper';
import { Typography } from '../typography/Typography';

interface UploadProps {
  label?: string;
  placeholder?: string;
  withBorder?: boolean;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  vertical?: boolean;
}

export const Upload: React.FC<UploadProps> = ({
  label = "Drop files here to attach and add files",
  style = {},
  withBorder = false,
  vertical = false,
}) => {

  const styles = {
    wrapper: {
      gap: 8,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--middle-grey)',
    } as React.CSSProperties,
    hiddenInput: {
      display: 'none',
    } as React.CSSProperties,
  };

  return (
    <>
      {!withBorder && (
        <Wrapper type="row" style={{ ...styles.wrapper, ...style }}>
          <AttachIcon 
            size={30} 
            color="var(--middle-grey)"
          />
          <Typography variant="title15">
            {label}
          </Typography>
          
          <input
            id="file-input"
            type="file"
            style={styles.hiddenInput}
          />
        </Wrapper>
      )}

      {withBorder && !vertical && (
        <Wrapper type="row" 
          style={{ 
            ...styles.wrapper,
            border: '2px dashed var(--light-grey)',
            borderRadius: '2px',
            ...style,
          }}>
          <AttachIcon 
            size={36} 
            color="var(--middle-grey)"
          />
          <Typography variant="title16">
            {label}
          </Typography>
          
          <input
            id="file-input"
            type="file"
            style={styles.hiddenInput}
          />
        </Wrapper>
      )}
      
      {vertical && (
        <>
          <Wrapper type="column" 
            style={{ 
              ...styles.wrapper, 
              height: 90,
              width: 90,
              gap: 0,
              textAlign: 'center',
              border: '2px dashed var(--light-grey)',
              borderRadius: '2px',
              ...style,
            }}
          >
            <AttachIcon size={26} color="var(--middle-grey)" />
            <Typography color="var(--middle-grey)" variant="title12" style={{ width: '114px' }}>{label}</Typography>
          </Wrapper>

          <input
            id="file-input"
            type="file"
            style={styles.hiddenInput}
          />
        </>
      )}
    </>
  );
};
