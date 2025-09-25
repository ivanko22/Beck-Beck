import React from "react";

export interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  separator?: string;
  style?: React.CSSProperties;
}

const styles: Record<string, React.CSSProperties> = {
  breadcrumbTitle: {
    display: "flex",
    alignItems: "center",
    /* Adjuster Database */

width: 152px;
height: 81px;

/* HeaderTittle */
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 81px;
/* identical to box height, or 289% */
display: flex;
align-items: center;

/* Secondary */
color: #0F1136;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

  },
  item: {
    display: "flex",
    alignItems: "center",
  },
  separator: {
    margin: "0 8px",
    color: "var(--middle-grey)",
  },

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
            <a
              href={item.href}
              style={{
                textDecoration: "none",
                color: index === items.length - 1 ? "var(--middle-grey)" : "var(--primary-color)",
                fontWeight: index === 0 ? 600 : 400,
              }}
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
