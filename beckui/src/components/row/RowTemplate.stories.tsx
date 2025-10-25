import { Meta, StoryObj } from "@storybook/react";
import { TemplateRowItem } from "./TemplateLibTableRow";

const meta: Meta<typeof TemplateRowItem> = {
  title: 'Components/Row/TemplateLibraryRow',
  component: TemplateRowItem,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TemplateRowItem>;

export const TemplateLibraryRow: Story = { 
    args: {
        type: 'template',
        row: {
            id: '1',
            name: 'Email Client Button on Client Detail Page',
            email: true,
            text: true,
            pdf: false,
        },
    },
};
