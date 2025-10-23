import type { Meta, StoryObj } from '@storybook/react';
import { AutoText } from './AutoText';

const meta: Meta<typeof AutoText> = {
  title: 'Pages/AutoText',
  component: AutoText,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    autoTexts: {
      control: { type: 'object' } as const,
      options: [
        {
          id: '1',
          state: 'edit',
          dropdownValue: 'Select an event',
          triggeringEvent: '',
          textMessage: '',
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AutoText>;

export const Empty: Story = {
  args: {
    autoTexts: [
      {
        id: '1',
        state: 'adding',
        triggeringEvent: '',
        textMessage: '',
      },
    ],
  },
};

export const WithTriggeringEvent: Story = {
  args: {
    
    autoTexts: [
      {
        id: '1',
        state: 'edit',
        dropdownValue: 'Case Opened',
        triggeringEvent: 'Case Opened',
        textMessage: '',
      },
    ],
  },
};

export const Saved: Story = {
  args: {

    state: 'saved',
    autoTexts: [
      {
        id: '1',
        state: 'saved',
        dropdownValue: 'Case Opened',
        triggeringEvent: 'Case Opened',
        textMessage: 'Hello [Client Name], we’ve officially opened your case file. Our team will keep you updated every step of the way.',
      },
    ],
  },
};

export const SeveralEvents: Story = {
  args: {

    state: 'saved',
    autoTexts: [
      {
        id: '1',
        state: 'saved',
        dropdownValue: 'Case Opened',
        triggeringEvent: 'Case Opened',
        textMessage: 'Hello [Client Name], we’ve officially opened your case file. Our team will keep you updated every step of the way.',
      },
      {
        id: '2',
        state: 'saved',
        dropdownValue: 'Medical Records Requested',
        triggeringEvent: 'Medical Records Requested',
        textMessage: 'We’ve requested your medical records from your doctor. We’ll keep you updated once we receive them.',
      },
      {
        id: '3',
        state: 'saved',
        dropdownValue: 'Medical Records Received',
        triggeringEvent: 'Medical Records Received',
        textMessage: 'We’ve received your medical records from your doctor. We’ll keep you updated once we receive them.',
      },
    ],
  },
};

