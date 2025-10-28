import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from './Chips';
import { CloseIcon } from '../icons';
import { Button } from '../button/Button';
import { Wrapper } from '../wrapper/PageWrapper';

const meta: Meta<typeof Chips> = {
  title: 'Components/Chips',
  component: Chips,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Chips>;

export const Blue: Story = {
  args: {
    label: 'BP Received',
    color: 'blue' as const,
  },
};

export const Purple: Story = {
  args: {
    label: 'Ordered/Waiting on Old Medical',
    color: 'purple' as const,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Ordered/Waiting on Old Medical',
    color: 'secondary',
  },
};

export const Orange: Story = {
  args: {
    label: 'Awaiting Mediation',
    color: 'orange',
  },
};

export const Green: Story = {
  args: {
    label: 'Final Offer Received, waiting on lien sheet',
    color: 'green',
  },
};

export const Yellow: Story = {
  args: {
    label: 'Treating & No medical ordered yet',
    color: 'yellow',
  },
};

export const MultipleChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Chips label="Ordered/Waiting on Old Medical" color="purple" onClose={() => {}} />
      <Chips label="Awaiting Mediation" color="orange" onClose={() => {}} />
      <Chips label="Final Offer Received, waiting on lien sheet" color="green" onClose={() => {}} />
      <Chips label="Treating & No medical ordered yet" color="yellow" onClose={() => {}} />
    </div>
  ),
};

export const WithClearAll: Story = {
  render: () => {
    const chips = [
      { id: 1, label: "BP Received", color: "blue" as const },
      { id: 2, label: "Treating & No medical ordered yet", color: "yellow" as const },
      { id: 3, label: "Ordered/Waiting on Old Medical", color: "secondary" as const },
      { id: 4, label: "UIM Demand Sent", color: "purple" as const },
      { id: 5, label: "Awaiting Mediation", color: "orange" as const },
      { id: 6, label: "Final Offer Received, waiting on lien sheet", color: "green" as const },
    ];

    return (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        {chips.map((chip) => (
          <Chips 
            key={chip.id} 
            label={chip.label} 
            color={chip.color} 
            onClose={() => console.log(`Removed: ${chip.label}`)} 
          />
        ))}
   
        <Wrapper type='row' style={{ marginLeft: -8 }}>
          <Button
            label='Clear All'
            size='small'
            onClick={() => console.log('Clear All')}
            icon={<CloseIcon size={14} />}
            iconPosition='left'
          />
        </Wrapper>

      </div>
    );
  },
};

