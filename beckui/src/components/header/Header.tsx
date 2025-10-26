import React, { useState } from "react";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { CloseIcon, PlusIcon, EmailIcon } from "../icons";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { Wrapper } from "../wrapper/PageWrapper";
import { SearchBox } from "../search/SearchBox";
import { FiltersModal } from "../modal/FiltersModal";
import { filtersData } from '../../data/filtersData';
export interface HeaderProps {
  section: string;
  current?: string;
  type?: 'default' | 'clientDetails' | 'clientDashboard';
  showButtons?: boolean;
  subtitle?: string;
  rightButtonLabel?: string;
  buttonIcon?: React.ReactNode;
  borderBottom?: boolean;
  onClose?: () => void;
  width?: string;
  isFixed?: boolean;
  teams?: string[];
  onFiltersClick?: () => void;
  showFilters?: boolean;
}

const styles = {
  container: {
    display: "flex",
    position: "fixed",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "space-between",
    width: "calc(100vw - 300px)",
    height: "80px",
    backgroundColor: "var(--white)",
    marginBottom: "20px",
    paddingLeft: "30px",
    paddingRight: "30px",
    boxSizing: "border-box",
  } as React.CSSProperties,

  borderBottomStyle: {
    borderBottom: "1px solid var(--light-grey)",
  } as React.CSSProperties,

  left: {
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,

  subtitle: {
    fontSize: "15px",
    color: "var(--middle-grey)",
  } as React.CSSProperties,

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,

  buttonsWrapper: {
    display: "flex",
  } as React.CSSProperties,
};

export const Header: React.FC<HeaderProps> = ({
  section,
  teams,
  current,
  subtitle,
  type = 'default',
  onClose,
  buttonIcon,
  rightButtonLabel,
  width,
  borderBottom = true,
  isFixed = true,
  showFilters = false,
}) => {
  const containerStyle = {
    ...styles.container,
    ...(width && { width }),
    ...(isFixed ? {} : { position: 'relative' as const, zIndex: 0 })
  };

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(showFilters);

  return (
    <div style={{...containerStyle, ...(borderBottom && styles.borderBottomStyle)}}>
      <Wrapper type="column" style={{ position: 'absolute', top: -50 }}>
        {isFiltersModalOpen && (
          <FiltersModal
            onClose={() => setIsFiltersModalOpen(false)}
            initialFilters={filtersData}
            onApplyFilters={() => {}}
          />
        )}
      </Wrapper>

      <div style={styles.left}>
        <Breadcrumbs section={section} current={current} />
        {subtitle && <span style={styles.subtitle}>{subtitle}</span>}
      </div>
      
      {type === 'clientDetails' && (
        <div style={styles.buttonsWrapper}>
          <Button 
            icon={<PlusIcon size={20} />}
            iconPosition="left"
            size="medium"
            label="Jump to Auto Insurance" 
          />

          <Button 
            icon={<EmailIcon size={20} />}
            iconPosition="left"
            size="medium"
            label="Sent Message" 
          />
        </div>
      )}

      {type === 'clientDashboard' && (
        <Wrapper type="row" style={{ gap: 30 }}>
          {teams?.map((team) => (
            <Checkbox
              label={team}
              onChange={() => {}}
            />
          ))}

          <SearchBox
            placeholder="Search by Case Number"
            onChange={() => {}}
            onFiltersClick={() => {
              console.log('filters clicked');
              setIsFiltersModalOpen(true)
            }}
            type="primary"
          />

        </Wrapper>
       )}
      

      {!rightButtonLabel ? (
        <div style={styles.close} onClick={onClose}>
          <CloseIcon size={20} color="var(--middle-grey)" hoverColor="var(--secondary-color-hover)" />
        </div>
      ) : (
        <Button
          primary
          size="medium"
          label={rightButtonLabel}
          icon={buttonIcon}
          customSize="200px"
        />
      )}
    </div>
  );
};
