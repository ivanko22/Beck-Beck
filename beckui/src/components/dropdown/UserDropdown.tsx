import React, { useState } from 'react';
import { AvaIcon, DropdownIcon, SignOutIcon } from '../icons';
import { UserDropdownItem } from './userDropdownItem';

interface MenuItem {
  label: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
}

interface UserDropdownProps {
  email: string;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  menuItems?: MenuItem[];
  onSelect?: (item: string) => void;
  onLogout?: () => void;
  style?: React.CSSProperties;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({
  email,
  isOpen,
  defaultOpen = false,
  onOpenChange,
  menuItems,
  style,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const controlled = isOpen !== undefined;
  const open = controlled ? !!isOpen : internalOpen;
  const [hover, setHover] = useState(false)

  const setOpen = (nextState: boolean) => {
    console.log('setOpen, nextState', open, nextState);

    if (!controlled) setInternalOpen(nextState);
      console.log('!controlled controlled, internalOpen, nextState', controlled, internalOpen, nextState);

      onOpenChange?.(nextState);
    };

  const toggle = () => {
    setOpen(!open);
    console.log('toggle internalOpen, onOpenChange', internalOpen, onOpenChange);
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    color: hover ? 'var(--light-grey)' : 'var(--middle-grey)',
    ...style,
  };

  const dropdownStyle: React.CSSProperties = {
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

  const dropdownContainer: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    left: '26px',
  };

  return (
    <div style={dropdownContainer}>
      <div 
        style={containerStyle} 
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

        <span>{email}</span>
        <DropdownIcon 
          size={8} 
          color={hover ? 'var(--light-grey)' : 'var(--middle-grey)'}
        />
      </div>

      {open && menuItems && (
          <div style={dropdownStyle} role="menu">
              <UserDropdownItem label='Profile' />
              <UserDropdownItem label='Settings' />
              <UserDropdownItem
                label='Sign out'
                icon={SignOutIcon}
                style={{ borderBottom: 'none' }}
              />
          </div>
      )}
    </div>
  );
};
