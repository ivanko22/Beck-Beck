import React from "react";
import { ArrowIcon } from "../icons";

type TableHeaderProps = {
  columns: (string | { label: string; style?: React.CSSProperties })[];
  template?: string;
  activeColumn?: number;
  noBorder?: boolean;
  useSpecificWidths?: boolean;
  columnWidths?: string[];
  style?: React.CSSProperties;
};

export const  TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  template = '2fr 2.5fr 1fr 2.5fr 40px',
  activeColumn = 0,
  noBorder = false,
  useSpecificWidths = false,
  columnWidths = [],
  style,
}) => {
  const container: React.CSSProperties = {
    display: useSpecificWidths ? 'flex' : 'grid',
    ...(useSpecificWidths ? {} : { gridTemplateColumns: template }),
    columnGap: useSpecificWidths ? 0 : 24,
    gap: useSpecificWidths ? '24px' : undefined,
    alignItems: 'center',
    borderBottom: noBorder ? 'none' : '1px solid var(--light-grey)',
    color: 'var(--middle-grey)',
    fontSize: 14,
    fontWeight: 400,
    position: 'relative',
    top: noBorder ? '30px' : 'none',
  };

  return (
    <div style={{...container, ...style}}>
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
                ...(useSpecificWidths && columnWidths[i] ? { width: columnWidths[i] } : {}),
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

