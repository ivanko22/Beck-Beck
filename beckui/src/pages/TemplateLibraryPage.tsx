import React, { useMemo, useState } from 'react';

import { Navigation } from '../components/navigation/Navigation';
import { Header } from '../components/header/Header';
import { TableHeader } from '../components/table/TableHeader';
import { TemplateRowItem } from '../components/table/TemplateLibTableRow';
import { TemplateRow, TemplateLibraryProps, defaultRows } from '../components/table/Types';
import { PageActions } from '../components/page-actions/PageActions';

const L = {
  shell: {
    display: 'block',
    fontFamily: 'var(--font-family-base)',
    color: 'var(--primary-color)',
    height: '100vh',
    background: '#fff',
  } as React.CSSProperties,

  main: {
    display: 'flex',
    width: 'calc(100vw - 300px)',
    height: '100vh',
    flexDirection: 'column',
    padding: '28px 32px',
    marginLeft: 300,
    flex: 1,
    minWidth: 0,
    boxSizing: 'border-box',
    overflow: 'auto',
  } as React.CSSProperties,

  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginTop: 8,
  },

};

export const TemplateLibraryPage: React.FC<TemplateLibraryProps> = ({ rows, onSave, onCancel, disabledButton, saved = false }) => {
  const seeded = useMemo(
    () =>
      (rows ?? defaultRows).map(r => ({
        email: false, text: false, pdf: false, ...r,
      })) as TemplateRow[],
    [rows]
  );

  const [data, setData] = useState<TemplateRow[]>(seeded);

  return (
    <div style={L.shell}>
      <Navigation
        userEmail="ivankordonets@gmail.com"
        dropdownMenuItems={[{ label: 'Profile' }, { label: 'Settings' }, { label: 'Sign out' }]}
      />

      <div style={L.main}>
        <Header
          section="Template Library"
          current=""
          subtitle=""
          onClose={() => onCancel?.()}
        />

        <table style={L.table}>
          <TableHeader
            columns={[
              { label: "Email / Fax Template Name", style: {  paddingLeft: "30px" } },
              { label: "Email", style: { paddingLeft: "26px" } },
              { label: "Text", style: { paddingLeft: "32px" } },
              { label: "PDF for eFax / Mail", style: {  position: "relative", right: "26px" } },
            ]}
          />

          <tbody>
            {data.map(row => (
              <TemplateRowItem
                key={row.id}
                row={row}
                disabled={saved}
                saved={saved}
                onChange={(next) => setData(prev => prev.map(r => (r.id === next.id ? next : r)))}
              />
            ))}
          </tbody>
        </table>

        <PageActions
          saved={saved}
          disabledButton={disabledButton}
          onSave={() => onSave?.(data)}
          onCancel={onCancel}
          onEdit={() => console.log('Edit templates')}
          onRemove={() => console.log('Remove templates')}
        />
        
      </div>
    </div>
  );
};
