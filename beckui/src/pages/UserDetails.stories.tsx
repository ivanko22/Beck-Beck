import type { Meta, StoryObj } from '@storybook/react';
import { UserDetailsPage, UserDetailsPageProps } from './UserDetailsPage';

const meta: Meta<typeof UserDetailsPage> = {
  title: 'Pages/Admin/User Details',
  component: UserDetailsPage,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof UserDetailsPage>;

export const Empty: Story = {
  args: {
    saved: false,
    noBorder: false,
    defaultUser: 'Select User',
    defaultRole: 'Select User Role',
    defaultFirstLast: '',
    defaultEmail: '',
    defaultPassword: '',
    defaultStillWorking: false,
    disabledButton: true,
    defaultTeamFiles: {
      intake: false,
      medical: false,
      litigation: false,
      settlement: false,
    },
  } satisfies UserDetailsPageProps,
};

export const Filled: Story = {
  args: {
    saved: false,
    defaultUser: 'Cooper Jane',
    defaultRole: 'Admin',
    defaultFirstLast: 'Cooper Jane',
    defaultEmail: 'cooper.jane@example.com',
    defaultPassword: 'password123',
    defaultStillWorking: true,
    defaultTeamFiles: {
      intake: true,
      medical: false,
      litigation: true,
      settlement: true,
    },
  } satisfies UserDetailsPageProps,
};

export const Saved: Story = {
  args: {
    saved: true,
    noBorder: true,
    defaultUser: 'Cooper Jane',
    defaultRole: 'Admin',
    defaultFirstLast: 'Cooper Jane',
    defaultEmail: 'cooper.jane@example.com',
    defaultPassword: 'password123',
    defaultStillWorking: true,
    defaultTeamFiles: {
      intake: true,
      medical: true,
      litigation: true,
      settlement: true,
    },
  } satisfies UserDetailsPageProps,
};

