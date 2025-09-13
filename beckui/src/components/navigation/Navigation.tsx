import React, { useState } from 'react';
import { Logo } from '../logo/Logo';
import { NavigationMenuItem } from './NavigationMenuItem';
import {
  ClientDetailIcon,
  DocumentIcon,
  MedicalIcon,
  CarIcon,
  BookIcon,
  EmailIcon,
  ClipboardIcon,
  CheckIcon,
  HandshakeIcon,
  ScaleIcon,
} from '../icons';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
  active?: boolean;
}

interface NavigationProps {
  userEmail?: string;
  onItemClick?: (itemId: string) => void;
  onSearch?: (query: string) => void;
  className?: string;
  customWidth?: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'client-detail', label: 'Client Detail Page', icon: ClientDetailIcon },
  { id: 'client-docs', label: 'Client Docs & Misc', icon: DocumentIcon },
  { id: 'medical', label: 'Medical & Med Auth.', icon: MedicalIcon },
  { id: 'policies', label: 'Policies Report & Pictures', icon: CarIcon },
  { id: 'big-packet', label: 'Big Packet', icon: BookIcon },
  { id: 'correspondence', label: 'Correspondence', icon: EmailIcon },
  { id: 'demand-package', label: 'Demand Package as Sent', icon: ClipboardIcon },
  { id: 'settlement-statement', label: 'Settlement Statement', icon: CheckIcon },
  { id: 'settlement-negotiations', label: 'Settlement Negotiations', icon: HandshakeIcon },
  { id: 'lien', label: 'Lien', icon: ScaleIcon },
];

const styles = {
  sidebar: {
    height: '100vh',
    width: '320px',
    backgroundColor: 'var(--primary-color)',
    color: 'var(--white)',
    display: 'flex',
    flexDirection: 'column' as const,
    fontFamily: 'var(--font-family-base)',
    position: 'fixed' as const,
    left: 0,
    top: 0,
    zIndex: 1000,
  },

  navigationContainer: {
    overflowY: 'auto' as const,
    marginTop: '48px',
  },

  separator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 0',
    margin: '8px 0',
  },

  separatorLine: {
    flex: 1,
    height: '1px',
    backgroundColor: 'rgba(var(--white), 0.2)',
  },

  scrollButton: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: 'rgba(var(--white), 0.1)',
    border: 'none',
    color: 'var(--white)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 8px',
    fontSize: '12px',
  },

};

export const Navigation: React.FC<NavigationProps> = ({
  onItemClick,
}) => {
  const [activeItem, setActiveItem] = useState<string>('client-detail');

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return (
    <div style={styles.sidebar}>
    <Logo size='200px' style={{ paddingTop: '32px' }}/>

      <div style={styles.navigationContainer}>
        {navigationItems.map((item) => (
          <NavigationMenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.id}
            onClick={() => handleItemClick(item.id)}
          />
        ))}

        {/* Separator with scroll indicator */}
        {/* <div style={styles.separator}>
          <div style={styles.separatorLine}></div>
          <button style={styles.scrollButton}>▼</button>
          <div style={styles.separatorLine}></div>
        </div> */}

      </div>

    </div>
  );
};
