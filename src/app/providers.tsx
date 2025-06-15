import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import type { ReactElement, ReactNode } from 'react'

import { GlobalProvider } from '~/contexts/global-context'
import { PanelContextProvider } from '~/contexts/panel-context'

const Providers = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <AppRouterCacheProvider>
      <GlobalProvider>
        <PanelContextProvider>{children}</PanelContextProvider>
      </GlobalProvider>
    </AppRouterCacheProvider>
  )
}

export default Providers
