import React, { useState } from 'react';
import { AvaIcon, DropdownIcon, SignOutIcon } from '../icons';
import { UserDropdownItem } from './DropdownItem';
import { Typography } from '../typography/Typography';
import { StatusItem } from '../caseStatus/CaseStatusItem';
interface UserDropdownProps {
  type: string;
  state?: 'default' | 'hover' | 'selected';
  openHeight?: string;
  openDirection?: 'up' | 'down';
  value: string;
  label?: string;
  leftLabel?: boolean;
  disabled?: boolean;
  noBorder?: boolean;
  width?: string;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  menuItems?: { label: string; icon?: React.ComponentType<any>; state?: 'default' | 'hover' | 'selected' }[];
  caseNumber?: string;
  onSelect?: (item: string) => void;
  onLogout?: () => void;
  style?: React.CSSProperties;
}

export const BaseDropdown: React.FC<UserDropdownProps> = ({
  type,
  state,
  value,
  openHeight,
  openDirection,
  label,
  width,
  leftLabel,
  disabled = false,
  noBorder = false,
  isOpen,
  defaultOpen = false,
  onOpenChange,
  menuItems,
  style,
  onSelect,
  caseNumber,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const controlled = isOpen !== undefined;
  const open = controlled ? !!isOpen : internalOpen;
  const [hover, setHover] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(value);
  const [hasSelected, setHasSelected] = React.useState(false);

  const effectiveState: 'default' | 'hover' | 'selected' = state ?? (hasSelected ? "selected" : "default");

  const setOpen = (nextState: boolean) => {
    if (!controlled) setInternalOpen(nextState);
      onOpenChange?.(nextState);
    };

  const toggle = () => {
    if (!disabled) {
      console.log('toggle', open);
      setOpen(!open);
    }
  };

  const UserDropdownContainer: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    color: hover ? 'var(--light-grey)' : 'var(--middle-grey)',
    ...style,
  };

  const BaseDropdownContainer: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width || (noBorder ? 'auto' : '228px'),
    height: '46px',
    gap: 8,
    fontSize: 18,
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: 
      (disabled) ? 'var(--dark-grey)' : (hover ? 'var(--light-grey)' : 
      (effectiveState === 'selected' ? 'var(--dark-grey)' : 'var(--primary-color)')),
    ...(noBorder ? { border: 'none' } : { border: '1px solid var(--light-grey)', borderRadius: '2px' }),
    padding: '0 16px',

    ...style,
  };

  const statusDropdownContainer: React.CSSProperties = {
    display: 'flex',
    cursor: 'pointer',
    gap: 4,
    paddingTop: '6px',
  };

  const userDropdownStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '165px',
    height: '170px',
    position: 'absolute',
    top: '-180px',
    right: '20px',
    marginTop: 8,
    backgroundColor: 'var(--primary-color)',
    border: '1px solid var(--primary-color-hover)',
    borderRadius: 6,
    zIndex: 10,
    overflow: 'hidden',
  };

  const BaseDropdownStyle: React.CSSProperties = {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    width: '262px',
    maxHeight: openHeight || '400px',
    backgroundColor: 'var(--white)',
    border: '1px solid var(--light-grey)',
    borderRadius: 6,
    zIndex: 100,
    overflow: 'scroll',
    // marginTop: openDirection === 'up' ? '-55px' : '0',
    top: openDirection === 'down' ? '10px' : '',

    padding: '10px 0',
    fontWeight: 400,
    color: 'var(--middle-grey)',
  };

  const dropdownValueStyle: React.CSSProperties = {
    fontWeight: effectiveState === "selected" ? 500 : 400,
    color: effectiveState === "selected" ? "var(--dark-grey)" : "var(--middle-grey)",
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 400,
    color: 'var(--middle-grey)',
    paddingLeft: '16px',
    paddingBottom: '8px',
  };

  const leftLabelWrapper: React.CSSProperties = {
    position: 'relative',
    right: '167px',
    bottom: '-34px',
  };

  const userDropdownContainer: React.CSSProperties = {
    position: 'absolute',
    display: 'flex',
    bottom: '20px',
    left: '26px',
  };

  const baseDropdownContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: '80px',
  };

  return (
    <>
      <div style={userDropdownContainer}>
        {type === 'userDropdown' && (
          <>
            <div 
              style={UserDropdownContainer} 
              onClick={toggle} 
              aria-expanded={open} 
              role="button"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <AvaIcon 
                size={32} 
                color={hover ? 'var(--light-grey)' : 'var(--middle-grey)'}
              />
                <span>{dropdownValue}</span>
              
              <DropdownIcon 
                size={8} 
                color={hover ? 'var(--light-grey)' : 'var(--middle-grey)'}
              />
            </div>

            {open && menuItems && (
              <div style={userDropdownStyle} role="menu">
                <UserDropdownItem type='user' label='Profile' />
                <UserDropdownItem type='user' label='Settings' hovered={state === 'hover'} />
                <UserDropdownItem
                  type='user'
                  label='Sign out'
                  icon={SignOutIcon}
                  style={{ borderBottom: 'none' }}
                />
              </div>
            )}
          </>
        )}
      </div>

      <div style={baseDropdownContainer}>
        {type === 'BaseDropdown' && (
          <>
            {effectiveState === 'selected' && !leftLabel && (
              <div style={labelStyle}>
                {label}
              </div>
            )}
            {leftLabel && (
              <div style={leftLabelWrapper}>
                <Typography variant="leftLabel">{label}</Typography>
              </div>
            )}

          <div style={BaseDropdownContainer} onClick={disabled ? undefined : toggle} aria-expanded={open} role="button">
            <span style={dropdownValueStyle}>{dropdownValue}</span>
            <div>
              <DropdownIcon 
                size={11} 
                color={(hover ? 'var(--light-grey)' : 'var(--middle-grey)')}
              />
            </div>
          </div>
          </>
        )}

        {open && menuItems && type === 'BaseDropdown' && (
            <div style={{ ...BaseDropdownStyle, maxHeight: openHeight || '400px' }} role="menu">
              {menuItems.map((item, index) => (
              
              <UserDropdownItem
                type='base'
                key={`base-${item.label}-${index}`}
                label={item.label}
                icon={item.icon}
                hovered={item.state === 'hover'}
                onClick={() => {
                  setDropdownValue(item.label);
                  setHasSelected(true);
                  onSelect?.(item.label);
                  toggle();
                }}
              />
            ))}
            </div>
        )}
      </div>
      
      <div style={{ ...baseDropdownContainer, height: 'auto' }}>
        {type === 'statusDropdown' && (
          <>
            <div style={statusDropdownContainer} onClick={disabled ? undefined : toggle} aria-expanded={open} role="button">
              <StatusItem statusText={dropdownValue} identifier={caseNumber || ''} />

              <div>
                <DropdownIcon 
                  size={11} 
                  color={(hover ? 'var(--light-grey)' : 'var(--middle-grey)')}
                />
              </div>
            </div>
          </>
        )}

        {open && menuItems && type === 'statusDropdown' && (
            <div style={{ ...BaseDropdownStyle, top: 80 }} role="menu">
              {menuItems.map((item, index) => (
              
              <UserDropdownItem
                type='base'
                key={`status-${item.label}-${index}`}
                label={item.label}
                icon={item.icon}
                hovered={item.state === 'hover'}
                onClick={() => {
                  setDropdownValue(item.label);
                  setHasSelected(true);
                  onSelect?.(item.label);
                  toggle();
                }}
              />
            ))}
            </div>
        )}
      </div>
      
    </>
      
  );
};
