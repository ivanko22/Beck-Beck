import React from "react";
import { ArrowIcon } from "../icons";

type TableHeaderProps = {
  columns: (string | { label: React.ReactNode; width?: string; style?: React.CSSProperties })[];
  template?: string;
  activeColumn?: number;
  noBorder?: boolean;
  useSpecificWidths?: boolean;
  columnWidths?: string[];
  style?: React.CSSProperties;
  useSpaceBetween?: boolean;
};

export const  TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  template = '2fr 2.5fr 1fr 2.5fr 40px',
  activeColumn = 0,
  noBorder = false,
  useSpecificWidths = false,
  columnWidths = [],
  useSpaceBetween = false,
  style,
}) => {
  const container: React.CSSProperties = {
    display: useSpecificWidths || useSpaceBetween ? 'flex' : 'grid',
    ...(useSpecificWidths || useSpaceBetween ? {} : { gridTemplateColumns: template }),
    ...(useSpaceBetween ? { justifyContent: 'space-between' } : {}),
    columnGap: useSpecificWidths ? 0 : 24,
    gap: useSpecificWidths ? '24px' : undefined,
    alignItems: 'center',
    borderBottom: noBorder ? 'none' : '1px solid var(--light-grey)',
    color: 'var(--middle-grey)',
    fontSize: 14,
    fontWeight: 400,
    paddingBottom: '12px',
    position: 'relative',
    width: '100%',
    height: 40,
    top: noBorder ? '30px' : 'none',
  };

  return (
    <div style={{...container, ...style}}>
        {columns.map((column, i) => {
          const label = typeof column === 'string' ? column : column.label;
          const columnWidth = typeof column === 'object' && column.width ? column.width : undefined;
          const customStyle = typeof column === 'object' ? column.style : {};
          
          return (
            <div 
              key={`column-${i}-${label}`} 
              style={{ 
                padding: '6px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                ...(useSpecificWidths && columnWidths[i] ? { width: columnWidths[i] } : {}),
                ...(columnWidth ? { width: columnWidth } : {}),
                ...customStyle
              }}
            >
              {i === activeColumn && (
                <div style={{ marginLeft: '8px', paddingTop: '4px' }}>
                  <ArrowIcon 
                    size={28} 
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

