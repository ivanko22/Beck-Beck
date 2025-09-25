import React, { useState } from 'react';
import { Logo } from '../logo/Logo';
import { NavigationMenuItem } from './NavigationMenuItem';
import { SearchBox } from '../search/SearchBox';
import { BaseDropdown } from '../dropdown/Dropdown';

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

interface dropdownMenuItems {
  label: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
}
interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
  active?: boolean;
};

interface NavigationProps {
  userEmail: string;
  onItemClick?: (itemId: string) => void;
  onSearch?: (query: string) => void;
  className?: string;
  customWidth?: string;
  dropdownMenuItems?: dropdownMenuItems[];
};

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

type Style = React.CSSProperties;

const styles: {
  sidebar: Style;
  navigationContainer: Style;
} = {
  sidebar: {
    height: '100vh',
    width: '300px',
    backgroundColor: 'var(--primary-color)',
    color: 'var(--white)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'var(--font-family-base)',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 1000,
  },

  navigationContainer: {
    overflowY: 'auto',
    marginTop: '28px',
    width: '280px'
  },
};

export default styles;

export const Navigation: React.FC<NavigationProps> = ({
  onItemClick, userEmail, dropdownMenuItems,
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

      <SearchBox style={{ marginTop: '30px'}} />

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

        <BaseDropdown 
          type="userDropdown"
          value={userEmail} 
          menuItems={dropdownMenuItems}
          onSelect= {(item) => console.log('Clicked:', item)}
        />

      </div>

    </div>
  );
};
