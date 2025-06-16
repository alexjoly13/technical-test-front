import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import type { ReactElement, ReactNode } from 'react'

import { CartProvider, WishlistProvider } from '~/contexts/list-context'
import { PanelContextProvider } from '~/contexts/panel-context'

const Providers = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <AppRouterCacheProvider>
      <CartProvider>
        <WishlistProvider>
          <PanelContextProvider>{children}</PanelContextProvider>
        </WishlistProvider>
      </CartProvider>
    </AppRouterCacheProvider>
  )
}

export default Providers
