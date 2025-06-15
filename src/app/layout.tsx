import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'

import type { Metadata } from 'next'
import type { ReactElement, ReactNode } from 'react'

import Footer from '~/components/Footer'
import Header from '~/components/Header'
import { GlobalProvider } from '~/contexts/global-context'
import { PanelContextProvider } from '~/contexts/panel-context'

import styles from './layout.module.css'

import '../styles/globals.css'

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  description: 'The best of online shopping',
  title: 'Supershop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return (
    <html className={roboto.variable} lang="en">
      <meta content="#283149" name="theme-color" />
      <body id="root">
        <AppRouterCacheProvider>
          <GlobalProvider>
            <PanelContextProvider>
              <div className={styles.layout}>
                <Header />
                <main>{children}</main>
                <Footer />
              </div>
            </PanelContextProvider>
          </GlobalProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
