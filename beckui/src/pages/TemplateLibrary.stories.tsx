import type { Meta, StoryObj } from '@storybook/react';
import React, { useMemo, useState } from 'react';

import { Navigation } from '../components/navigation/Navigation';
import { Header } from '../components/header/Header';
import { TableHeader } from '../components/table/TableHeader';
import { Button } from '../components/button/Button';
import { TemplateRowItem } from '../components/table/TemplateLibTableRow';
import { TemplateRow, TemplateLibraryProps, defaultRows } from '../components/table/Types';

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

  actions: {
    display: 'flex',
    gap: 12,
    marginTop: 32,
    justifyContent: 'flex-start',
  } as React.CSSProperties,
};

const TemplateLibraryPage: React.FC<TemplateLibraryProps> = ({ rows, onSave, onCancel, disabledButton }) => {
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
                onChange={(next) => setData(prev => prev.map(r => (r.id === next.id ? next : r)))}
              />
            ))}
          </tbody>
        </table>

        <div style={L.actions}>
          <Button
            type="button"
            size="medium"
            disabled={disabledButton}
            primary
            label="Save"
            onClick={() => onSave?.(data)}
          />
          <Button type="button" size="medium" label="Cancel" onClick={() => onCancel?.()} />
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof TemplateLibraryPage> = {
  title: 'Pages/Template Library',
  component: TemplateLibraryPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof TemplateLibraryPage>;

export const Empty: Story = {
  args: {
    disabledButton: true,
  },
};

export const WithSomeSelections: Story = {
  args: {
    rows: [
      { id: '1', name: 'Email Client Button on Client Detail Page', email: true },
      { id: '2', name: 'Send Medical Records Request to Provider',   pdf: true },
      { id: '3', name: 'Send Wage Loss Form to Employer',             text: true },
      { id: '4', name: 'Fax Authorization Form to Hospital' },
      { id: '5', name: 'Email Case Status Update on Client Detail Page', email: true, pdf: true },
      { id: '6', name: 'Send Follow-Up Reminder to Medical Provider' },
    ],
  },
};