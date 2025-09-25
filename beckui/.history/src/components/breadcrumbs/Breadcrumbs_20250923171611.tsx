import React from "react";

export interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  separator?: string;
  style?: React.CSSProperties;
}

const styles: Record<string, React.CSSProperties> = {
  breadcrumbTitle: {
    fontWeight: 600,
    color: "var(--primary-color)",
    textDecoration: "none",
  },
  item: {
    display: "flex",
    alignItems: "center",
  },
  separator: {
    margin: "0 8px",
    color: "var(--middle-grey)",
  },
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = "/",
  style,
}) => {
  return (
    <nav style={{ display: "flex", alignItems: "center", ...style }}>
      {items.map((item, index) => (
        <span key={index} style={{ display: "flex", alignItems: "center" }}>
          {index > 0 && (
            <span style={{ margin: "0 8px", color: "var(--middle-grey)" }}>
              {separator}
            </span>
          )}
          {item.href ? (
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
            style={styles.breadcrumbTitle}
          >
              {item.label}
            </a>
          ) : (
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
      ))}
    </nav>
  );
};
