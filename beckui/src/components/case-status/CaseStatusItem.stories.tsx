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
      width: '300px', 
      border: '1px solid #eee', 
      padding: '16px', 
      borderRadius: '8px',
      backgroundColor: 'white'
    }}>
      <StatusItem
        statusText="Offer Accepted"
        identifier="#2025-001"
      />
      
      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />      

      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Signed Release"
        identifier="#2025-004"
      />
      
      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Blank Release"
        identifier="#2025-005"
      />
      
      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Check Pending"
        identifier="#2025-006"
      />
      
      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Respond"
        identifier="#2025-007"
      />
      
      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
      
      <StatusItem
        statusText="No Offer 30+"
        identifier="#2025-008"
      />
      
      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Blank Release"
        identifier="#2025-005"
      />
      
      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Check Pending"
        identifier="#2025-006"
      />
      
      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Respond"
        identifier="#2025-007"
      />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 0, 
      width: '300px', 
      border: '1px solid #eee', 
      padding: '16px', 
      borderRadius: '8px',
      backgroundColor: 'white'
    }}>
      <StatusItem
        statusText="Offer Accepted"
        identifier="#2025-001"
        onClick={() => console.log('Status clicked: #2025-001')}
      />
      
      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
      
      <StatusItem
        statusText="Signed Release"
        identifier="#2025-004"
        onClick={() => console.log('Status clicked: #2025-004')}
      />
      
      <div style={{ borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
      
      <StatusItem
        statusText="No Offer 30+"
        identifier="#2025-008"
        onClick={() => console.log('Status clicked: #2025-008')}
      />
    </div>
  ),
};
