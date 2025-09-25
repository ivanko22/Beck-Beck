import React from "react";

export interface BreadcrumbsProps {
  section: string;
  current?: string;
  href?: string;
  onSectionClick?: () => void;
  style?: React.CSSProperties;
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    fontSize: '28px',
    fontWeight: 600,
    color: "var(--primary-color)",
    textDecoration: "none",
    paddingBottom: "6px",
    cursor
  },
  current: {
    fontSize: '20px',
    fontWeight: 500,
    color: "var(--middle-grey)",},
  separator: {
    margin: "0 8px",
    color: "var(--middle-grey)",
  },
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  section,
  current,
  href,
  style,
}) => {
  return (
    <nav style={{ display: "flex", alignItems: "center", ...style }}>
      <span style={styles.section}>{section}</span>

      <span style={styles.separator}>/</span>

      <a href={href} style={styles.section}></a>
      
      <span style={styles.current}>
        {current}
      </span>
    </nav>
  );
};
