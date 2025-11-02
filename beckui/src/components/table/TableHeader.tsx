import React, { useState } from "react";
import { ArrowIcon, FilterIcon } from "../icons";
import { filtersData } from '../../data/filtersData';
import { FiltersModal } from '../filters/FiltersModal';
import { FilterCheckboxes } from '../filters/FilterCheckboxes';
import { Wrapper } from "../wrapper/PageWrapper";

type TableHeaderProps = {
  columns: (string | { label: React.ReactNode; width?: string; style?: React.CSSProperties })[];
  template?: string;
  activeColumn?: number;
  noBorder?: boolean;
  useSpecificWidths?: boolean;
  columnWidths?: string[];
  style?: React.CSSProperties;
  useSpaceBetween?: boolean;  filterType?: 'clientDashboard' | 'settlementNegotiations';
  showFiltersModal?: boolean;
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
  filterType,
  showFiltersModal = false,
}) => {

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

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
    <Wrapper type="pageWrapper" style={{ width: '100%' }}>
      <div style={{...container, ...style}}>
        
        {(filterType === 'clientDashboard' || filterType === 'settlementNegotiations') && (
          <>
            <div onClick={() => setIsFiltersModalOpen(true)}
              style={{ 
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                cursor: 'pointer'
              }}>
              <FilterIcon size={20}  />
            </div>
            
            {(isFiltersModalOpen && filterType === 'clientDashboard'|| showFiltersModal && filterType === 'clientDashboard') && (
              <Wrapper type="pageWrapper" style={{ position: 'absolute', top: -80, left: -40, zIndex: 101 }}>
                <FiltersModal
                  onClose={() => setIsFiltersModalOpen(false)}
                  initialFilters={filtersData}
                />
              </Wrapper>
            )}

          {(isFiltersModalOpen && filterType === 'settlementNegotiations' || showFiltersModal && filterType === 'settlementNegotiations') && (
            <Wrapper type="pageWrapper" style={{ position: 'absolute', top: 30, left: -10, zIndex: 101 }}>
              <FilterCheckboxes
                onClose={() => setIsFiltersModalOpen(false)}
                options={[
                  { label: 'No Offer 30+', checked: false },
                  { label: 'Offer Accepted', checked: false },
                  { label: 'Respond', checked: false },
                  { label: 'Waiting on Signed Release', checked: false },
                  { label: 'Waiting on Blank Release', checked: false },
                  { label: 'Check Pending', checked: false },
                ]}
              />
            </Wrapper>
          )}
          </>
        )}

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
                fontWeight: 500,
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
    </Wrapper>
  );
};
