import type { Meta, StoryObj } from '@storybook/react';
import { MessageCard } from './MessageCard';

const meta: Meta<typeof MessageCard> = {
  title: 'Components/Card/MessageCard',
  component: MessageCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The message content',
    },
    isReceived: {
      control: 'boolean',
      description: 'Whether this is a received message (left-aligned) or sent message (right-aligned)',
    },
    senderName: {
      control: 'text',
      description: 'Name of the message sender',
    },
    senderPhone: {
      control: 'text',
      description: 'Phone number of the message sender',
    },
    timestamp: {
      control: 'text',
      description: 'Message timestamp',
    },
    isRead: {
      control: 'boolean',
      description: 'Whether the message has been read',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MessageCard>;

export const ReceivedMessage: Story = {
  args: {
    children: 'Hi Morgan, just checking in — did you receive the MedPay check from Progressive yet?',
    isReceived: true,
    senderName: 'Ivan Kordonets',
    senderPhone: '201 229 2416',
    timestamp: '14:20',
    isRead: true,
  },
};

export const SentMessage: Story = {
  args: {
    children: 'Hi Ivan. Yes, I received it yesterday. It was for $1,500.',
    isReceived: false,
    senderName: 'Morgan Jeff',
    senderPhone: '245 675 77 55',
    timestamp: '14:22',
    isRead: true,
  },
};

export const ConversationExample: Story = {
  render: () => (

      <>
        <MessageCard
          isReceived={true}
          senderName="Ivan Kordonets"
          senderPhone="201 229 2416"
          timestamp="14:20"
          isRead={true}
        >
          Hi Morgan, just checking in — did you receive the MedPay check from Progressive yet?
        </MessageCard>

        <MessageCard
          isReceived={false}
          senderName="Morgan Jeff"
          senderPhone="245 675 77 55"
          timestamp="14:22"
          isRead={true}
        >
          Hi Ivan. Yes, I received it yesterday. It was for $1,500.
        </MessageCard>
      
        <MessageCard
          senderName="John Doe"
          senderPhone="555 123 4567"
          timestamp="15:30"
          isRead={false}
        >
          This is a longer message that demonstrates how the MessageCard component handles text wrapping and maintains proper spacing within the conversation interface. The component should gracefully handle both short and long messages while maintaining consistent styling.
        </MessageCard>

      </>
  ),
};

export const LongMessage: Story = {
  args: {
    children: 'This is a longer message that demonstrates how the MessageCard component handles text wrapping and maintains proper spacing within the conversation interface. The component should gracefully handle both short and long messages while maintaining consistent styling.',
    isReceived: true,
    senderName: 'John Doe',
    senderPhone: '555 123 4567',
    timestamp: '15:30',
    isRead: false,
  },
};

export const UnreadMessage: Story = {
  args: {
    children: 'This message has not been read yet.',
    isReceived: true,
    senderName: 'Jane Smith',
    senderPhone: '555 987 6543',
    timestamp: '16:45',
    isRead: false,
  },
};
