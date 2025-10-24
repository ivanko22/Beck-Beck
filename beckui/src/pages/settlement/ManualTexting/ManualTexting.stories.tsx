import type { Meta, StoryObj } from '@storybook/react';
import { ManualTexting } from './ManualTexting';

const meta: Meta<typeof ManualTexting> = {
  title: 'Pages/ManualTexting',
  component: ManualTexting,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    clients: {
      control: { type: 'object' } as const,
    },
    onAddClient: { action: 'addClient' },
    onViewConversation: { action: 'viewConversation' },
    onRefreshClient: { action: 'refreshClient' },
  },
};

export default meta;
type Story = StoryObj<typeof ManualTexting>;

const sampleClients = [
  {
    id: '1',
    name: 'Morgan Jeff',
    mostRecentText: 'Just checking if you\'re still in treatment?',
    cellphone: '(202) 555-0147',
    spouseCellphone: '(202) 555-0149',
    dateAdded: 'May 5, 2025',
    conversationStatus: 'Responsed' as const,
    messageHistory: [
      {
        id: '1',
        text: 'Just checking if you\'re still in treatment?',
        timestamp: '14:20',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: true,
        isReceived: true,
      },
      {
        id: '2',
        text: 'Yes, I\'m still seeing Dr. Smith twice a week. Should I continue?',
        timestamp: '14:25',
        sender: 'Morgan Jeff',
        senderPhone: '(202) 555-0147',
        agent: false,
        isRead: true,
        isReceived: false,
      },
      {
        id: '3',
        text: 'Yes, please continue with your treatment. We\'ll keep you updated on your case.',
        timestamp: '14:30',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: true,
        isReceived: true,
      },
    ],
  },
  {
    id: '2',
    name: 'Self (Ivan)',
    mostRecentText: 'Please confirm if you\'ve seen any new doctors recently',
    cellphone: '(314) 555-0198',
    spouseCellphone: '(314) 555-0199',
    dateAdded: 'May 4, 2025',
    conversationStatus: 'Responsed' as const,
    messageHistory: [
      {
        id: '1',
        text: 'Hi, how are you? Do you know when my insurance process will be completed?',
        timestamp: '14:20',
        sender: 'Self (Ivan)',
        senderPhone: '(314) 555-0198',
        agent: false,
        isReceived: true,
        isRead: true,
      },
      {
        id: '2',
        text: 'Hi Ivan, thanks for checking in. We\'re still waiting on a few updates.',
        timestamp: '14:22',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isReceived: false,
        isRead: true,
      },
      {
        id: '3',
        text: 'Please confirm if you\'ve seen any new doctors recently',
        timestamp: '14:25',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: false,
        isReceived: true,
      },
    ],
  },
  {
    id: '3',
    name: 'Lenora Medina',
    mostRecentText: 'We received the police report and will review it today',
    cellphone: '(718) 555-0044',
    spouseCellphone: '(305) 555-0192',
    dateAdded: 'May 4, 2025',
    conversationStatus: 'Pending' as const,
    messageHistory: [
      {
        id: '1',
        text: 'We received the police report and will review it today',
        timestamp: '10:30',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: true,
        isReceived: true,
      },
      {
        id: '2',
        text: 'Thank you for the update. When can I expect to hear back?',
        timestamp: '10:35',
        sender: 'Lenora Medina',
        senderPhone: '(314) 555-0198',
        agent: false,
        isRead: true,
        isReceived: false,
      },
      {
        id: '3',
        text: 'We should have an update for you by the end of the week.',
        timestamp: '10:40',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: false,
        isReceived: true,
      },
    ],
  },
  {
    id: '4',
    name: 'Bonnie Ross',
    mostRecentText: 'Let us know if your address or phone has changed',
    cellphone: '(404) 555-0655',
    spouseCellphone: '(213) 555-0179',
    dateAdded: 'May 3, 2025',
    conversationStatus: 'Pending' as const,
    messageHistory: [
      {
        id: '1',
        text: 'Let us know if your address or phone has changed',
        timestamp: '09:15',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: true,
        isReceived: true,
      },
      {
        id: '2',
        text: 'I moved to a new apartment last month. Should I send you the new address?',
        timestamp: '09:20',
        sender: 'Bonnie Ross',
        senderPhone: '(404) 555-0655',
        agent: false,
        isRead: false,
        isReceived: false,
      },
    ],
  },
  {
    id: '5',
    name: 'Patrick Rodriguez',
    mostRecentText: 'Can you send us any photos you took at the accident scene?',
    cellphone: '(913) 555-0203',
    spouseCellphone: '(503) 555-0222',
    dateAdded: 'May 3, 2025',
    conversationStatus: 'Unanswered' as const,
    messageHistory: [
      {
        id: '1',
        text: 'Can you send us any photos you took at the accident scene?',
        timestamp: '11:45',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: false,
        isReceived: true,
      },
    ],
  },
  {
    id: '6',
    name: 'Josh Bush',
    mostRecentText: 'Reminder: We\'re still waiting on your signed authorization form.',
    cellphone: '(702) 555-0933',
    spouseCellphone: '(702) 555-0936',
    dateAdded: 'May 1, 2025',
    conversationStatus: 'Unanswered' as const,
    messageHistory: [
      {
        id: '1',
        text: 'Reminder: We\'re still waiting on your signed authorization form.',
        timestamp: '2 day ago',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: false,
        isReceived: true,
      },
    ],
  },
  {
    id: '7',
    name: 'Bob Sterling',
    mostRecentText: 'No response',
    cellphone: '(702) 555-0936',
    spouseCellphone: '(702) 555-0937',
    dateAdded: 'May 1, 2025',
    conversationStatus: 'Unanswered' as const,
    messageHistory: [
      {
        id: '1',
        text: 'Hi Bob, we need to discuss your case status',
        timestamp: '1 day ago',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: false,
        isReceived: true,
      },
    ],
  },
  {
    id: '8',
    name: 'John Doe',
    mostRecentText: 'No response',
    cellphone: '(555) 123-4567',
    spouseCellphone: '(555) 123-4568',
    dateAdded: 'May 1, 2025',
    conversationStatus: 'Unanswered' as const,
    messageHistory: [
      {
        id: '1',
        text: 'Please provide your medical records',
        timestamp: '1 day ago',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: false,
        isReceived: true,
      },
    ],
  },
  {
    id: '9',
    name: 'Jane Doe',
    mostRecentText: 'No response',
    cellphone: '(555) 123-4567',
    spouseCellphone: '(555) 123-4568',
    dateAdded: 'May 1, 2025',
    conversationStatus: 'Removed' as const,
    messageHistory: [
      {
        id: '1',
        text: 'Your case has been closed',
        timestamp: '12:00 AM',
        sender: 'Josh Bell',
        senderPhone: '(201) 322-0197',
        agent: true,
        isRead: true,
        isReceived: true,
      },
    ],
  },
];

export const Empty: Story = {
  args: {
    clients: [],
  },
};

export const WithClients: Story = {
  args: {
    clients: sampleClients,
  },
};

export const Messaging: Story = {
  args: {
    clients: sampleClients,
    showMessaging: true,
  },
};
