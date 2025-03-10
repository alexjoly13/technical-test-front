import '../styles/globals.css'
import {GlobalProvider} from "../state/global-context";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../theme/theme';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';


const clientSideEmotionCache = createCache({ key: 'css', prepend: true })

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp
