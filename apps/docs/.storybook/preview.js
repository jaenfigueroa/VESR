// ESTILOS TAILWIND CSS
import '@vers/uiv2/dist/style.css';
//ICONOS AWESOME
import '@fortawesome/fontawesome-svg-core/styles.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
