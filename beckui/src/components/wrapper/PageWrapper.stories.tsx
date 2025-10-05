import { Wrapper } from './PageWrapper';

export default {
  title: 'Components/PageWrapper',
  component: Wrapper,
};

export const White = () => (
  <Wrapper 
    background="white" 
    center
  />
);

export const DarkBlue = () => (
  <Wrapper 
    background="darkBlue" 
    center
  />
);

export const GrayBackground = () => (
  <Wrapper 
    background="gray" 
    center
  />
);

export const CustomBackground = () => (
  <Wrapper 
    background="custom" 
    customBackgroundColor='black'
    center
  />
);

