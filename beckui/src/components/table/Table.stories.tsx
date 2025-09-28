import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { TableHeader } from "./TableHeader";
import { TemplateRowItem } from "./TemplateLibTableRow";
import { defaultRows, TemplateRow } from "../table/Types";

const meta: Meta = {
  title: "Components/Table",
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof meta>;

const columns: Array<{ label: string; style?: React.CSSProperties }>  = [
  { label: "Email / Fax Template Name"},
  { label: "Email"},
  { label: "Text"},
  { label: "PDF for eFax / Mail", style: { position: "relative", right: "26px" }},
];

const autoTextColumns: Array<{label: string; style?: React.CSSProperties}> = [
    {label: "Triggering Event"},
    {label: "Text Message"},
];

const TablePreview: React.FC = () => {
  const [data, setData] = useState<TemplateRow[]>(defaultRows);

  return (
    <table style={{ borderCollapse: "collapse", width: "1000px" }}>
      <TableHeader columns={columns} />
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

export const Default: Story = {
  render: () => <TablePreview />,
};

export const AutoText: Story = {
    render: () => {

        return(
            <table style={{width: "1000px"}}>
                <TableHeader columns={autoTextColumns} />
            </table>
        )
    }
}
