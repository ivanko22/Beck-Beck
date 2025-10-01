import React from "react";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { CloseIcon, PlusIcon, EmailIcon } from "../icons";
import { Button } from "../button/Button";

export interface HeaderProps {
  section: string;
  current?: string;
  type?: 'default' | 'clientDetails';
  subtitle?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
  width?: string;
}

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    borderBottom: "1px solid var(--light-grey)",
    paddingBottom: "10px",
    marginBottom: "20px",
  } as React.CSSProperties,

  left: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  } as React.CSSProperties,

  subtitle: {
    fontSize: "16px",
    color: "var(--middle-grey)",
  } as React.CSSProperties,

  close: {
    cursor: "pointer",
    position: "relative",
    top: 16,
    color: "var(--middle-grey)",
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
  style,
  width,
}) => {
  return (
    <div style={{ ...styles.container, ...(width && { width }), ...style }}>
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
          <CloseIcon size={20} />
        </div>
      )}
    </div>
  );
};
