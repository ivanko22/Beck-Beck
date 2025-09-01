import React from 'react';
import { PageWrapper } from './PageWrapper';

export default {
  title: 'Components/PageWrapper',
  component: PageWrapper,
};

export const White = () => (
  <PageWrapper 
    background="white" 
    center
  />
);

export const DarkBlue = () => (
  <PageWrapper 
    background="darkBlue" 
    center
  />
);

export const GrayBackground = () => (
  <PageWrapper 
    background="gray" 
    center
  />
);

export const CustomBackground = () => (
  <PageWrapper 
    background="custom" 
    customBackgroundColor='red'
    center
  />
);

