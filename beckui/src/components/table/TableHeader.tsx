import React from "react";
import { ArrowIcon } from "../icons";

interface TableHeaderProps {
  columns: { label: string; style?: React.CSSProperties }[];
}

const styles = {
    th: {
        textAlign: 'left' as const,
        fontWeight: 400,
        fontSize: '14px',
        padding: '14px 30px',
        borderBottom: '1px solid var(--light-grey)',
        color: 'var(--middle-grey)',
      }
};

export const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <span style={{ position: "relative", top: "43px", left: "6px" }}>
        <ArrowIcon size={18} color={"var(--secondary-color)"} />
      </span>

      <tr>
        {columns.map((col, i) => (
          <th key={i} style={{ ...styles.th, ...col.style }}>
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

