import React from "react";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { CloseIcon } from "../icons";

export interface HeaderProps {
  section: string;
  current: string;
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
    color: "var(--middle-grey)",
  } as React.CSSProperties,
};

export const Header: React.FC<HeaderProps> = ({
  section,
  current,
  subtitle,
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

      {onClose && (
        <div style={styles.close} onClick={onClose}>
          <CloseIcon size={20} />
        </div>
      )}
    </div>
  );
};
