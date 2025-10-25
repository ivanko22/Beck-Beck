import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { PlusIcon } from "../icons";
import { ClientDetailsTableHeader } from "./ClientDetailsTableHeader";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    section: { control: "text", description: "Breadcrumbs section title" },
    current: { control: "text", description: "Breadcrumbs current item" },
    subtitle: { control: "text", description: "Subtitle text under the header" },
    onClose: { action: "closed", description: "Triggered when close icon is clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const UserDetails: Story = {
  args: {
    section: "User Details",
    current: "Cooper Jane",
    subtitle: "Here you can manage internal user",
    width: "1000px",
    isFixed: false,
  },
};

export const ClientDetails: Story = {
  args: {
    section: "Client Details",
    current: "Case #2025-0001",
    width: "1200px",
    type: "clientDetails",
    isFixed: false,
  },
};

export const ClientDetailsTableHeaderStory: Story = {
  render: () => {
    return(
      <div style={{width: "1000px"}}>
        <ClientDetailsTableHeader 
          title="Client Insurance Company #1"
          buttonLabel={["Add Another Client Insurance Co Section"]}
          buttonIcon={[<PlusIcon size={16} />]}
        />
      </div>
    )
  }
};

export const ClientDetailsTableHeaderWithCheckboxStory: Story = {
  render: () => {
    return(
      <div style={{width: "1000px"}}>
        <ClientDetailsTableHeader 
          type="relative"
          title="Client Insurance Company #1"
          buttonLabel={["Add Another Client Insurance Co Section"]}
          buttonIcon={[<PlusIcon size={16} />]}
          smallSectionTitle="Client Insurance Company #1"
        />
      </div>
    )
  }
};

export const withButtonIcon: Story = {
  args: {
    section: "Manual Texting",
    width: "1200px",
    rightButtonLabel: "Add Client",
    buttonIcon: <PlusIcon size={16} />,
    isFixed: false,
  },
};