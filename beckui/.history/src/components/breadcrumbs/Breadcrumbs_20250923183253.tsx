import React from "react";

export interface BreadcrumbsProps {
  section: string;
  current?: string;
  style?: React.CSSProperties;
}

const styles: Record<string, React.CSSProperties> = {
  section: {
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
  current = "/",
  style,
}) => {
  return (
    <nav style={{ display: "flex", alignItems: "center", ...style }}>
        <span style={{ display: "flex", alignItems: "center" }}>
     
            <span style={{ margin: "0 8px", color: "var(--middle-grey)" }}>
              {separator}
            </span>
          )}

            // <a
            //   href={item.href}
            //   style={{
            //     textDecoration: "none",
            //     color: index === items.length - 1 ? "var(--middle-grey)" : "var(--primary-color)",
            //     fontWeight: index === 0 ? 600 : 400,
            //   }}
            // >
            <a
              href={item.href}
              style={index === items.length - 1 ? styles.breadcrumbTitleFirst : undefined}
            >
            </a>
            <span
              style={{
                color: index === items.length - 1 ? "var(--middle-grey)" : "var(--primary-color)",
                fontWeight: index === 0 ? 600 : 400,
              }}
            >
              {item.label}
            </span>
          )}
        </span>
    </nav>
  );
};
