import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';

const Header = {
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: '0',
    padding: '16px 24px',
    backgroundColor: '#FFFAFA',
    zIndex: '10',
  },
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'poppins, sans-serif',
        // padding: '24px',
        color: '#000000',
        backgroundColor: '#FFFAFA',
        letterSpacing: '0.25rem',
        lineHeight: '1.6',
      },

      html: {
        scrollBehavior: 'smooth',
      },

      h1: { padding: '16px 24px', fontSize: '3rem', fontWeight: '900', maxWidth: '70ch', letterSpacing: '0.5rem' },
      h2: { padding: '16px 24px', fontSize: '2rem', fontWeight: '800', maxWidth: '70ch', letterSpacing: '0.5rem' },
      h3: { padding: '16px 24px', fontSize: '1rem', fontWeight: '800', maxWidth: '70ch', letterSpacing: '0.5rem' },
      p: { padding: '16px 24px', fontSize: '1rem', fontWeight: '600', maxWidth: '70ch', letterSpacing: '0.25rem' },
      a: { textDecoration: 'none' },
    },
    '.chakra-box': {
      // borderColor: 'red !important',
      opacity: 1,
      paddingRight: '5em',
    },
  },

  components: { Header },
  colors: {
    brand: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },

  layerStyles: {
    scrollToBox: {
      paddingTop: '100px',
    },
  },
  textStyles: {
    Logo: {
      // ['0px', '480px',  '768px', '1024px']
      fontSize: ['1em', '1em', '1em', '2em'],
      fontWeight: 'bold',
      letterSpacing: '0.5rem',
    },
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
});

export default theme;

// Extra small devices (<768px): width: auto (or no width)
// Small Devices (≥576px): width: 540px
// Medium Devices (≥768px): width: 720px
// Larger Devices (≥992px): width: 960px
// XLarge Devices (≥1200px): width: 1140px
