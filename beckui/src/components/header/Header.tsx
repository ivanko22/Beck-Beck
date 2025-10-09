import React from "react";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { CloseIcon, PlusIcon, EmailIcon } from "../icons";
import { Button } from "../button/Button";

export interface HeaderProps {
  section: string;
  current?: string;
  type?: 'default' | 'clientDetails';
  showButtons?: boolean;
  subtitle?: string;
  onClose?: () => void;
  width?: string;
  isFixed?: boolean;
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
    borderBottom: "1px solid var(--light-grey)",
    marginBottom: "20px",
    paddingLeft: "30px",
    paddingRight: "30px",
    boxSizing: "border-box",
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
  current,
  subtitle,
  type = 'default',
  onClose,
  width,
  isFixed = true,
}) => {
  const containerStyle = {
    ...styles.container,
    ...(width && { width }),
    ...(isFixed ? {} : { position: 'relative' as const })
  };

  return (
    <div style={containerStyle}>
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
      
      {onClose && (
        <div style={styles.close} onClick={onClose}>
          <CloseIcon size={20} color="var(--middle-grey)" hoverColor="var(--secondary-color-hover)" />
        </div>
      )}
    </div>
  );
};
