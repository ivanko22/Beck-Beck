import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { TableHeader } from "./TableHeader";
import { ClientDetailsTableHeader } from "../header/ClientDetailsTableHeader";
import { TemplateRowItem } from "../row/insurance/TemplateLibTableRow";
import { defaultRows, TemplateRow } from "../table/Types";
import { PlusIcon } from "../icons";
import { LienTableRow } from "./LienTableRow";

const meta: Meta = {
  title: "Components/Table",
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof meta>;

const columns= [
  {label: "Email / Fax Template Name"},
  {label: "Email", style: { left: "6px" }},
  {label: "Text", style: { left: "6px" }}, 
  { label: "PDF for eFax / Mail", style: { right: "36px" } }
];

const autoTextColumns = [
    "Triggering Event",
    "Text Message"
];

const TablePreview: React.FC = () => {
  const [data, setData] = useState<TemplateRow[]>(defaultRows);

  return (
    <table style={{ borderCollapse: "collapse", width: "1000px" }}>
      <TableHeader columns={columns} template="4fr 1fr 1fr 1fr"/>
      <tbody>
        {data.map((row) => (
          <TemplateRowItem
            key={row.id}
            row={row}
            onChange={(updated) =>
              setData((prev) =>
                prev.map((r) => (r.id === updated.id ? updated : r))
              )
            }
          />
        ))}
      </tbody>
    </table>
  );
};

export const TemplateLibrayTable: Story = {
  render: () => <TablePreview />,
};

export const TableHeaderWithActiveColumn: Story = {
    render: () => {
        return(
            <table style={{width: "1000px"}}>
                <TableHeader columns={autoTextColumns} activeColumn={1} />
            </table>
        )
    }
}

export const LienTableRowStory: Story = {
  render: () => {
    const sampleFormData = {
      medicalProvider: 'StriveWell Insurance',
      lienAmount: '5000',
      finalBalance: '4500',
      insurancePaid: '500',
      notes: 'Initial lien amount',
      accountNumber: 'ACC-001',
      lienholderPhone: '(555) 123-4567',
      lienholderEmail: 'contact@strivewell.com',
      howToSend: 'email' as const,
      productionRequestPercent: '10',
      dateSent: '2024-01-15',
      reducedToAmount: '4000',
      state: 'rowEdit' as const,
    };

    return (
      <div style={{ width: "100%", maxWidth: "1400px" }}>
        <LienTableRow
          state="edit"
          type="iconButton"
          formData={sampleFormData}
          onDelete={() => console.log('Delete row')}
          onSave={() => console.log('Save row')}
          disabled={false}
        />
      </div>
    );
  }
};

export const LienTableRowEmptyStory: Story = {
  render: () => {
    return (
      <div style={{ width: "100%", maxWidth: "1400px" }}>
        <LienTableRow
          state="edit"
          type="iconButton"
          formData={{}}
          onDelete={() => console.log('Delete row')}
          onSave={() => console.log('Save row')}
          disabled={false}
        />
      </div>
    );
  }
};

export const LienTableRowDisabledStory: Story = {
  render: () => {
    const sampleFormData = {
      medicalProvider: 'StriveWell Insurance',
      lienAmount: '5000',
      finalBalance: '4500',
      insurancePaid: '500',
      notes: 'Initial lien amount',
      accountNumber: 'ACC-001',
      lienholderPhone: '(555) 123-4567',
      lienholderEmail: 'contact@strivewell.com',
      howToSend: 'email' as const,
      productionRequestPercent: '10',
      dateSent: '2024-01-15',
      reducedToAmount: '4000',
    };

    return (
      <div style={{ width: "100%", maxWidth: "1400px" }}>
        <LienTableRow
          state="saved"
          type="iconButton"
          formData={sampleFormData}
          onDelete={() => console.log('Delete row')}
          onSave={() => console.log('Save row')}
          disabled={true}
        />
      </div>
    );
  }
};