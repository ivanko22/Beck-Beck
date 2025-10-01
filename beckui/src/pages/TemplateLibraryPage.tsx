import React, { useMemo, useState } from 'react';

import { Navigation } from '../components/navigation/Navigation';
import { Header } from '../components/header/Header';
import { TableHeader } from '../components/table/TableHeader';
import { TemplateRowItem } from '../components/row/insurance/TemplateLibTableRow';
import { TemplateRow, TemplateLibraryProps, defaultRows } from '../components/table/Types';
import { PageActions } from '../components/page-actions/PageActions';
import { Input } from '../components/input/Inputs';

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
    borderCollapse: 'collapse' as const,
    marginTop: 8,
    marginBottom: 40,
  },

};

export const TemplateLibraryPage: React.FC<TemplateLibraryProps> = ({ 
    rows, 
    onSave, 
    onCancel, 
    pageActionsState = 'save', 
    textareaText = '',
}) => {
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
            template="4fr 1fr 1fr 1fr"

            columns={[
              {label: "Email / Fax Template Name"},
              {label: "Email", style: { left: "6px" }},
              {label: "Text", style: { left: "6px" }}, 
              { label: "PDF for eFax / Mail", style: { right: "36px" } }
            ]}
          />

          <tbody>
            {data.map(row => (
              <TemplateRowItem
                key={row.id}
                row={row}
                disabled={pageActionsState === 'saved'}
                saved={pageActionsState === 'saved'}
                onChange={(next) => setData(prev => prev.map(r => (r.id === next.id ? next : r)))}
              />
            ))}
          </tbody>
        </table>

        <Input
          inputType="textarea"
          placeholder="Send Medical Records Request to Provider"
          label="Send Medical Records Request to Provider"
          value={textareaText}
          disabled={pageActionsState === 'save'}
          customSize={{
            width: '100%',
            height: '100px',
          }}
        />

        <PageActions
          type={pageActionsState}
          onSave={() => onSave?.(data)}
          onCancel={onCancel}
          onEdit={() => console.log('Edit templates')}
          onRemove={() => console.log('Remove templates')}
        />
        
      </div>
    </div>
  );
};
