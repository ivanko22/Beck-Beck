import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radiobutton";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { label: "Option A", name: "group1", checked: false },
};

export const Checked: Story = {
  args: { label: "Option B", name: "group2", checked: true },
};

export const Disabled: Story = {
  args: { label: "Disabled", name: "group3", disabled: true },
};


export const ThreeOptions: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Radio
          label="Option 1"
          name="group1"
          checked={selected === "option1"}
          onChange={() => setSelected("option1")}
        />
        <Radio
          label="Option 2"
          name="group1"
          checked={selected === "option2"}
          onChange={() => setSelected("option2")}
        />
        <Radio
          label="Option 3"
          name="group1"
          checked={selected === "option3"}
          onChange={() => setSelected("option3")}
        />
      </div>
    );
  },
};
