// ESTILOS TAILWIND CSS
// import '@vers/uiv2/dist/style.css';
import '@vers/uiv2/dist/assets/index-38b9129e.css';
import '@vers/uiv2/src/index.css';
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
