import React, { useState } from 'react';
type IconType = React.ComponentType<{ size?: number; color?: string; className?: string }>;

export interface UserDropdownItemProps {
  type: string;
  label: string;
  icon?: IconType;
  hovered?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const userDropdownstyles: Record<string, React.CSSProperties> = {
  item: {
    display: 'flex',
    alignItems: 'center',
    width: '130px',
    height: '48px',
    paddingLeft: '12px',
    userSelect: 'none' as const,
    cursor: 'pointer',
    color: 'var(--middle-grey)',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    borderBottom: '1px solid var(--primary-color-hover)',
    margin: '0 12px',
  },

  hover: {
    backgroundColor: 'var(--primary-color-hover)',
    color: 'var(--white)',
    borderBottom: '1px solid var(--secondary-color)',
  },

  icon: {
    position: 'relative',
    left: '14px',
    top: '3px',
  }
};

const BaseDropdownItemStyle: Record<string, React.CSSProperties> = {
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 18,
    fontWeight: 500,
    cursor: 'pointer',
    color: 'var(--primary-color)',
    width: '228px',
    height: '60px',
    margin: '0px 18px 0px 18px',
    borderBottom: '1px solid var(--light-grey)',
    padding: '0',
    paddingLeft: '12px',
  },

  hover: {
    backgroundColor: 'var(--ultra-light-grey)',
    borderBottom: '1px solid var(--secondary-color)',
  },
}

export const UserDropdownItem: React.FC<UserDropdownItemProps> = ({
    type,
    icon: Icon,
    label,
    hovered = false,
    onClick,
    className = '',
    style,
}) => {
  const [hover, setHover] = useState(false);

  const itemStyle = {
    ...style,
    ...(type === 'user' ? userDropdownstyles.item : BaseDropdownItemStyle.item),
    ...(hovered || hover
      ? type === 'user'
        ? userDropdownstyles.hover
        : BaseDropdownItemStyle.hover
      : {}),
  };

  const iconColor =
    hovered || hover ? 'var(--light-grey)' : 'var(--middle-grey)';

  return (
    <div
      role="menuitem"
      tabIndex={0}
      style={itemStyle}
      className={className}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

    <span>{label}</span>

    {Icon ? (
        <span style={userDropdownstyles.icon}>
          <Icon size={20} color={iconColor} className="dropdown-icon" />
        </span>
    ) : null}
      
    </div>
  );
};
