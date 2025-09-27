import type { Meta, StoryObj } from '@storybook/react';
import { TemplateLibraryPage } from './TemplateLibraryPage';

const meta: Meta<typeof TemplateLibraryPage> = {
  title: 'Pages/Template Library',
  component: TemplateLibraryPage,
  parameters: { layout: 'fullscreen' },
};

const rows = [
  { id: '1', name: 'Email Client Button on Client Detail Page', email: true },
  { id: '2', name: 'Send Medical Records Request to Provider',   pdf: true },
  { id: '3', name: 'Send Wage Loss Form to Employer',             text: true },
  { id: '4', name: 'Fax Authorization Form to Hospital' },
  { id: '5', name: 'Email Case Status Update on Client Detail Page', email: true, pdf: true },
  { id: '6', name: 'Send Follow-Up Reminder to Medical Provider' },
];

const textareaText = 'This template is used to request medical records from a provider. It ensures we have complete documentation of the client\'s treatment history, which is necessary for case evaluation and settlement negotiations. Use this request whenever medical records are needed to support the client\'s claim.';


export default meta;
type Story = StoryObj<typeof TemplateLibraryPage>;

export const Empty: Story = {
  args: {
    disabledButton: true,
  },
};


export const WithSomeSelections: Story = {
  args: {
    rows,
    textareaText,
  },
};

export const Saved: Story = {
  args: {
    rows,
    disabledButton: true,
    saved: true,
    textareaText,
    disabled: true,
  },
};