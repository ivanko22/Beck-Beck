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
  },
  current: {
    display: "flex",
    alignItems: "center",
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
  style,
}) => {
  return (
    <nav style={{ display: "flex", alignItems: "center", ...style }}>
            <span style={styles.section}>{section}</span>
     
            <span style={{ margin: "0 8px", color: "var(--middle-grey)" }}>
              /
            </span>

            <a href={href} style={styles.section}></a>
            
            <span
              // style={{
              //   color: index === items.length - 1 ? "var(--middle-grey)" : "var(--primary-color)",
              //   fontWeight: index === 0 ? 600 : 400,
              // }}
            >
              {current}
            </span>
    </nav>
  );
};
