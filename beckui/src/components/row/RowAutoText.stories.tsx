import type { Meta, StoryObj } from '@storybook/react';
import { RowAutoText } from './RowAutoText';


const meta: Meta<typeof RowAutoText> = {
  title: 'Components/Row/RowAutoText',
  component: RowAutoText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RowAutoText>;

export const Empty: Story = {
  args: {
    row: {
      id: '1',
      state: 'edit' as const,
      triggeringEvent: '',
      textMessage: '',
    },
  },
};

export const WithTriggeringEvent: Story = {
  args: {
    row: {
      id: '1',
      state: 'edit' as const,
      dropdownValue: 'Case Opened',
      textMessage: '',
    },
  },
};

export const Saved: Story = {
  args: {
    row: {
      id: '1',
      state: 'saved' as const,
      dropdownValue: 'Case Opened',
      triggeringEvent: 'Case Opened',
      textMessage:
        'Hello [Client Name], we’ve officially opened your case file. Our team will keep you updated every step of the way.',
    },
  },
};
