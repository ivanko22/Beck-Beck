import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AuthForm, AuthFormProps } from './SSOPages';

const meta: Meta<typeof AuthForm> = {
  title: 'Pages/SSO',
  component: AuthForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

const AuthFormWrapper: React.FC<
  Omit<AuthFormProps, "email" | "password" | "onChange" | "onSubmit" | "error">
> = (props) => {

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(undefined);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (props.type === "resetPass") {
      if (!formData.email) {
        setError("Please enter your email");
      } else {
        alert(`Password reset email sent to: ${formData.email}`);
      }
      return;
    }

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
    } else {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <AuthForm
      {...props}
      onSubmit={handleSubmit}
      email={formData.email}
      password={formData.password}
      onChange={handleChange}
      error={error}
    />
  );
};

export const SignIn: Story = {
  render: () => <AuthFormWrapper type="signIn" title="Sign In" subtitle='' />,
};

export const SignUp: Story = {
  render: () => <AuthFormWrapper type="signUp" title='Sign Up' subtitle='' />,
};

export const ResetPassword: Story = {
  render: () => <AuthFormWrapper type="resetPass" title="Reset Password" subtitle='' />,
};

export const CheckYourEmail: Story = {
  render: () => <AuthFormWrapper 
    type="checkEmail" 
    title="Check Your Email" 
    subtitle="We've sent you a link to reset your password. Please check your inbox (and spam folder just in case)." />,
};
