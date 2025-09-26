import type { Meta, StoryObj } from '@storybook/react';
import { TemplateLibraryPage } from './TemplateLibraryPage';

const meta: Meta<typeof TemplateLibraryPage> = {
  title: 'Pages/Template Library',
  component: TemplateLibraryPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof TemplateLibraryPage>;

export const Empty: Story = {
  args: {
    disabledButton: true,
  },
};

export const WithSomeSelections: Story = {
  args: {
    rows: [
      { id: '1', name: 'Email Client Button on Client Detail Page', email: true },
      { id: '2', name: 'Send Medical Records Request to Provider',   pdf: true },
      { id: '3', name: 'Send Wage Loss Form to Employer',             text: true },
      { id: '4', name: 'Fax Authorization Form to Hospital' },
      { id: '5', name: 'Email Case Status Update on Client Detail Page', email: true, pdf: true },
      { id: '6', name: 'Send Follow-Up Reminder to Medical Provider' },
    ],
  },
};

export const Saved: Story = {
  args: {
    rows: [
      { id: '1', name: 'Email Client Button on Client Detail Page', email: true },
      { id: '2', name: 'Send Medical Records Request to Provider',   pdf: true },
      { id: '3', name: 'Send Wage Loss Form to Employer',             text: true },
      { id: '4', name: 'Fax Authorization Form to Hospital' },
      { id: '5', name: 'Email Case Status Update on Client Detail Page', email: true, pdf: true },
      { id: '6', name: 'Send Follow-Up Reminder to Medical Provider' },
    ],
    disabledButton: true,
    saved: true,
  },
};