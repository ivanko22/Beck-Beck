import React, { useState } from 'react';

interface NavigationMenuItemProps {
  icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const styles = {
  navItem: {
    display: 'flex',
    height: '50px',
    paddingLeft: '14px',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: 'var(--middle-grey)',
    fontSize: '16px',
    fontWeight: 500,
    borderBottom: '1px solid var(--primary-color)',
  },

  navItemHover: {
    backgroundColor: 'var(--primary-color-hover)',
    color: 'var(--light-grey)',
  },

  navItemActive: {
    backgroundColor: 'rgba(var(primary-color-hover), 0.2)',
    color: 'var(--light-grey)',
    borderBottom: '1px solid var(--secondary-color)',
  },

  navIcon: {
    marginRight: '12px',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
  icon: IconComponent,
  label,
  active = false,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemStyle = {
    ...styles.navItem,
    ...(active ? styles.navItemActive : {}),
    ...(isHovered ? styles.navItemHover : {}),
  };

  return (
    <div
      style={itemStyle}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.navIcon}>
        <IconComponent 
          size={24} 
          color={
            active
            ? 'var(--light-grey)'
            : isHovered
            ? 'var(--light-grey)'
            : 'var(--middle-grey)'
          }
        />

      </div>
      <span>{label}</span>
    </div>
  );
};
