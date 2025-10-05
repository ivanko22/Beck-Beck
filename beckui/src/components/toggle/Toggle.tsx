import React, { useState } from 'react';
import { Typography } from '../typography/Typography';

export interface ToggleProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column' as const,
    gap: '18px',
  },

  label: {
    fontWeight: '500',
    fontSize: '16px',
    color: 'var(--dark-grey)',
  },

  toggleWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },

  toggle: {
    position: 'relative' as const,
    display: 'inline-block',
    borderRadius: '15px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    width: '56px',
    height: '24px',
  },

  toggleTrack: {
    width: '100%',
    height: '100%',
    borderRadius: '15px',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
  },

  toggleTrackOff: {
    backgroundColor: 'var(--middle-grey)',
  },

  toggleTrackOn: {
    backgroundColor: 'var(--secondary-color)',
  },

  toggleHandle: {
    position: 'absolute' as const,
    top: '2px',
    borderRadius: '50%',
    backgroundColor: 'var(--white)',
    transition: 'all 0.3s ease',
    width: '20px',
    height: '20px',
    left: '2px',
  },

  handle: {
    width: '19px',
    height: '19px',
    left: '2px',
  },

  handleOn: {
    transform: 'translateX(32px)',
  },

  toggleText: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--white)',
    position: 'absolute' as const,
    top: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none' as const,
    userSelect: 'none' as const,
  },

  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  labelDisabled: {
    color: 'var(--middle-grey)',
  },
};

export const Toggle: React.FC<ToggleProps> = ({
  label,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  style,
}) => {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState<boolean>(defaultChecked);
  const value = isControlled ? !!checked : internal;

  const handleChange = () => {
    if (disabled) return;
    
    const next = !value;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };


  return (
    <div style={{ ...styles.container, ...style }}>
      {label && (
        <Typography variant="titleSmall">
          {label}
        </Typography>
      )}
      
      <div
        style={{
          ...styles.toggleWrapper,
          ...(disabled ? styles.disabled : {}),
        }}
        onClick={handleChange}
      >
        <div
          style={{
            ...styles.toggle,
            ...(disabled ? styles.disabled : {}),
          }}
        >
          <div
            style={{
              ...styles.toggleTrack,
              ...(value ? styles.toggleTrackOn : styles.toggleTrackOff),
            }}
          >
            <div
              style={{
                ...styles.toggleHandle,
                ...(value ? styles.handleOn : {}),
              }}
            />
            <span style={{
              ...styles.toggleText,
              left: value ? '33%' : '65%'
            }}>
              {value ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
