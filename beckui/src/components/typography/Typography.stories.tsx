import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
};

export const TitleSso = () => <Typography variant="titleSso" color='var(--primary-color)'>Sign In</Typography>;

export const Subtitle = () => <Typography variant="subtitle">Welcome back</Typography>;
