import type { Meta, StoryObj } from '@storybook/react';
import { RowManualTexting } from './RowManualTexting';

const meta: Meta<typeof RowManualTexting> = {
  title: 'Components/Row/RowManualTexting',
  component: RowManualTexting,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onViewConversation: { action: 'viewConversation' },
    onRefreshClient: { action: 'refreshClient' },
  },
};

export default meta;
type Story = StoryObj<typeof RowManualTexting>;

export const Responsed: Story = {
  args: {
    client: {
      id: '1',
      name: 'Morgan Jeff',
      mostRecentText: 'Just checking if you\'re still in treatment?',
      cellphone: '(202) 555-0147',
      spouseCellphone: '(202) 555-0149',
      dateAdded: 'May 5, 2025',
      conversationStatus: 'Responsed',
      hasSpousePhone: true,
    },
  },
};

export const Pending: Story = {
  args: {
    client: {
      id: '2',
      name: 'Lenora Medina',
      mostRecentText: 'We received the police report and will review it today',
      cellphone: '(718) 555-0044',
      spouseCellphone: '(305) 555-0192',
      dateAdded: 'May 4, 2025',
      conversationStatus: 'Pending',
      hasSpousePhone: true,
    },
  },
};

export const Removed: Story = {
  args: {
    client: {
      id: '3',
      name: 'Bob Sterling',
      mostRecentText: 'No response',
      cellphone: '(702) 555-0936',
      spouseCellphone: '',
      dateAdded: 'May 1, 2025',
      conversationStatus: 'Removed',
      hasSpousePhone: false,
    },
  },
};

export const WithoutSpousePhone: Story = {
  args: {
    client: {
      id: '4',
      name: 'John Doe',
      mostRecentText: 'Please provide your medical records',
      cellphone: '(555) 123-4567',
      spouseCellphone: '',
      dateAdded: 'May 2, 2025',
      conversationStatus: 'Pending',
      hasSpousePhone: false,
    },
  },
};

export const LongTextMessage: Story = {
  args: {
    client: {
      id: '5',
      name: 'Sarah Johnson',
      mostRecentText: 'We have received your medical records and are currently reviewing them. Our team will contact you within the next 2-3 business days with an update on your case status.',
      cellphone: '(555) 987-6543',
      spouseCellphone: '(555) 987-6544',
      dateAdded: 'May 6, 2025',
      conversationStatus: 'Responsed',
      hasSpousePhone: true,
    },
  },
};

export const Unanswered: Story = {
  args: {
    client: {
      id: '6',
      name: 'John Doe',
      mostRecentText: 'No response',
      cellphone: '(555) 123-4567',
      spouseCellphone: '',
      dateAdded: 'May 2, 2025',
      conversationStatus: 'Unanswered',
      hasSpousePhone: true,
    },
  },
};
