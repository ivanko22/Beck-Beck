import type { Meta, StoryObj } from '@storybook/react';
import { StatusItem } from './CaseStatusItem';

const meta: Meta<typeof StatusItem> = {
  title: 'Components/Status Item',
  component: StatusItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    statusText: {
      control: 'text',
      description: 'The status text to display',
    },
    identifier: {
      control: 'text',
      description: 'The identifier to display (e.g., case number, ID)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusItem>;

export const AllStatuses: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 0, 
      width: '200px', 
      border: '1px solid #eee', 
      padding: '16px', 
      borderRadius: '8px',
      backgroundColor: 'white'
    }}>
      {/* Green/Teal statuses */}
      <StatusItem
        statusText="Offer Accepted"
        identifier="#2025-001"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Final Offer Received, waiting on lien sheet"
        identifier="#2025-002"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Final Offer Received, lien sheet complete"
        identifier="#2025-003"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Awaiting Settlement Hearing"
        identifier="#2025-004"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Finished Case (Archive It)"
        identifier="#2025-005"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />

      {/* Blue statuses */}
      <StatusItem
        statusText="BP Received"
        identifier="#2025-006"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="BP Sent Via Mail"
        identifier="#2025-007"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Blank Release"
        identifier="#2025-008"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />

      {/* Dark Blue statuses */}
      <StatusItem
        statusText="Ordered/Waiting on Old Medical"
        identifier="#2025-009"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />

      {/* Red statuses */}
      <StatusItem
        statusText="No Offer 30+"
        identifier="#2025-010"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />

      {/* Orange statuses */}
      <StatusItem
        statusText="Awaiting Mediation"
        identifier="#2025-011"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Referred Case"
        identifier="#2025-012"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Respond"
        identifier="#2025-013"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />

      {/* Yellow statuses */}
      <StatusItem
        statusText="Treating & No medical ordered yet"
        identifier="#2025-014"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Finished Treating/ RTS & Awaiting"
        identifier="#2025-015"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Finished Treating/ RTS & All Medical"
        identifier="#2025-016"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="RTS/All Medical Received"
        identifier="#2025-017"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />

      {/* Purple statuses */}
      <StatusItem
        statusText="Sent to Demand Writer"
        identifier="#2025-018"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Liability Demand Sent"
        identifier="#2025-019"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="UM Demand Sent"
        identifier="#2025-020"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="UIM Demand Sent"
        identifier="#2025-021"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="30 Day Extension Given to Adjuster"
        identifier="#2025-022"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Signed Release"
        identifier="#2025-023"
      />
      <div style={{ borderBottom: '1px solid var(--ultra-light-grey)', margin: '8px 0' }} />

      {/* Black statuses */}
      <StatusItem
        statusText="Check Pending"
        identifier="#2025-024"
      />
      
    </div>
  ),
};

