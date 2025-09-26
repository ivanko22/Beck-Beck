import React, { useState } from 'react';
import { AvaIcon, DropdownIcon, SignOutIcon } from '../icons';
import { UserDropdownItem } from './DropdownItem';

export type MenuState = 'default' | 'hover' | 'selected';
export interface MenuItem {
  label: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  state?: MenuState;
}

interface UserDropdownProps {
  type: string;
  state?: 'default' | 'hover' | 'selected';
  value: string;
  label?: string;
  disabled?: boolean;
  noBorder?: boolean;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  menuItems?: MenuItem[];
  onSelect?: (item: string) => void;
  onLogout?: () => void;
  style?: React.CSSProperties;
}

export const BaseDropdown: React.FC<UserDropdownProps> = ({
  type,
  state,
  value,
  label,
  disabled = false,
  noBorder = false,
  isOpen,
  defaultOpen = false,
  onOpenChange,
  menuItems,
  style,
  onSelect,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const controlled = isOpen !== undefined;
  const open = controlled ? !!isOpen : internalOpen;
  const [hover, setHover] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(value);
  const [hasSelected, setHasSelected] = React.useState(false);

  const effectiveState: MenuState = state ?? (hasSelected ? "selected" : "default");

  React.useEffect(() => {
    setDropdownValue(value);
    if (value && value.trim() !== "" && value !== "Select User") {
      setHasSelected(true);
    }
  }, [value]);

  const setOpen = (nextState: boolean) => {
    if (!controlled) setInternalOpen(nextState);
      onOpenChange?.(nextState);
    };

  const toggle = () => {
    if (!disabled) {
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
    width: '228px',
    height: '46px',
    gap: 8,
    fontSize: 18,
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: (disabled) ? 'var(--dark-grey)' : (hover ? 'var(--light-grey)' : 'var(--primary-color)'),
    ...(noBorder ? { border: 'none' } : { border: '1px solid var(--light-grey)', borderRadius: '2px' }),
    padding: '0 16px',

    ...style,
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
    boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
    zIndex: 10,
    overflow: 'hidden',
  };

  const BaseDropdownStyle: React.CSSProperties = {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    width: '262px',
    height: 'auto',
    backgroundColor: 'var(--white)',
    border: '1px solid var(--light-grey)',
    borderRadius: 6,
    boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
    zIndex: 10,
    overflow: 'hidden',
    marginTop: '-55px',
    padding: '10px 0',
    fontWeight: 400,
    color: 'var(--middle-grey)',
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: effectiveState === "selected" ? 500 : 400,
    color: effectiveState === "selected" ? "var(--dark-grey)" : "var(--middle-grey)",
  };

  const dropdownContainer: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    left: '26px',
  };

  return (
    <>
      <div style={dropdownContainer}>

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

      <div>
        {type === 'BaseDropdown' && (
          <>
            {label && effectiveState === 'selected' && (
              <div style={{
                fontSize: '14px',
                fontWeight: 400,
                color: disabled ? 'var(--middle-grey)' : 'var(--dark-grey)',
                marginBottom: '8px',
                paddingLeft: '16px',
              }}>
                {label}
              </div>
            )}

          <div style={BaseDropdownContainer} onClick={disabled ? undefined : toggle} aria-expanded={open} role="button">
            <span style={labelStyle}>{dropdownValue}</span>

            {!noBorder && (
              <DropdownIcon 
                size={11} 
                color={(!noBorder) ? 'var(--middle-grey)' : (hover ? 'var(--light-grey)' : 'var(--middle-grey)')}
              />
            )}
          </div>
          </>
        )}

        {open && menuItems && type === 'BaseDropdown' && (
            <div style={BaseDropdownStyle} role="menu">
              {menuItems.map((item, index) => (
              
              <UserDropdownItem
                type='base'
                key={index}
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
