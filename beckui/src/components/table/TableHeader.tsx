import React from "react";
import { ArrowIcon } from "../icons";

type TableHeaderProps = {
  columns: (string | { label: string; style?: React.CSSProperties })[];
  template?: string;
  activeColumn?: number;
  noBorder?: boolean;
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  template = '2fr 2.5fr 1fr 2.5fr 40px',
  activeColumn = 0,
  noBorder = false,
}) => {
  const container: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: template,
    columnGap: 24,
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: noBorder ? 'none' : '1px solid var(--light-grey)',
    color: 'var(--middle-grey)',
    fontSize: 14,
    fontWeight: 400,
    position: 'relative',
    top: noBorder ? '12px' : 'none',
  };

  return (
    <div style={container}>
        {columns.map((column, i) => {
          const label = typeof column === 'string' ? column : column.label;
          const customStyle = typeof column === 'object' ? column.style : {};
          
          return (
            <div 
              key={i} 
              style={{ 
                padding: '6px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                ...customStyle
              }}
            >
              {i === activeColumn && (
                <div style={{ marginLeft: '8px' }}>
                  <ArrowIcon 
                    size={18} 
                    color={"var(--secondary-color)"} 
                  />
                </div>
              )}
              
              {label}

            </div>
          );
        })}
    </div>
  );
};

