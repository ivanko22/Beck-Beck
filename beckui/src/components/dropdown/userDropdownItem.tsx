import React, { useState } from 'react';
type IconType = React.ComponentType<{ size?: number; color?: string; className?: string }>;

export interface UserDropdownItemProps {
  label: string;
  icon?: IconType;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const styles: Record<string, React.CSSProperties> = {
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

  active: {
    backgroundColor: 'var(--primary-color-hover)',
    color: 'var(--white)',
  },

  icon: {
    position: 'relative',
    left: '14px',
    top: '3px',
  }
};

export const UserDropdownItem: React.FC<UserDropdownItemProps> = ({
    icon: Icon,
    label,
    active = false,
    onClick,
    className = '',
    style,
}) => {
  const [hover, setHover] = useState(false);

  const itemStyle = {
    ...styles.item,
    ...(active ? styles.active : {}),
    ...(hover ? styles.hover : {}),
    ...style,
  };

  const iconColor =
    active || hover ? 'var(--light-grey)' : 'var(--middle-grey)';

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
        <span style={styles.icon}>
          <Icon size={20} color={iconColor} className="dropdown-icon" />
        </span>
    ) : null}
      
    </div>
  );
};
