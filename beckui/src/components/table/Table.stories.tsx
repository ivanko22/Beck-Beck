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
  { label: "Email / Fax Template Name", style: { paddingLeft: "30px" } },
  { label: "Email", style: { paddingLeft: "26px" } },
  { label: "Text", style: { paddingLeft: "32px" } },
  { label: "PDF for eFax / Mail", style: { position: "relative", right: "26px" } },
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
