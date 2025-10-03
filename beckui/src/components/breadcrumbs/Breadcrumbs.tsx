import React from "react";

export interface BreadcrumbsProps {
  section: string;
  current?: string;
  href?: string;
  onSectionClick?: () => void;
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    paddingTop: "6px",
    display: "flex", 
    alignItems: "center"
  },
  section: {
    fontSize: '28px',
    fontWeight: 500,
    color: "var(--primary-color)",
    textDecoration: "none",
    cursor: "pointer",
  },

  current: {
    fontSize: '20px',
    fontWeight: 500,
    color: "var(--middle-grey)",
  },
  
  separator: {
    margin: "0 8px",
    color: "var(--middle-grey)",
  },
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  section,
  current,
  href,
}) => {
  return (
    <nav style={{ ...styles.nav }}>
      <span style={styles.section}>{section}</span>

      {current && (
        <>
          <span style={styles.separator}>/</span>
          <a href={href} style={styles.section}></a>
          <span style={styles.current}>
            {current}
          </span>
        </>
      )}
    </nav>
  );
};
