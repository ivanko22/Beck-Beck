/** @type { import('@storybook/react-vite').Preview } */

import '../src/index.css'; 
// import 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;