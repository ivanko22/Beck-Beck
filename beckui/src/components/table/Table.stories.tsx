import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { TableHeader } from "./TableHeader";
import { TemplateRowItem } from "../row/insurance/TemplateLibTableRow";
import { InsuranceRow } from "../row/insurance/InsuranceRow";
import { defaultRows, TemplateRow } from "../table/Types";

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
