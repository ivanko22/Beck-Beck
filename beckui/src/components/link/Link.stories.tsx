import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUp: Story = {
  args: {
    href: '#',
    text: "Don't have an Account? Sign Up",
    variant: 'SignUp',
  },
};
