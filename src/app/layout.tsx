import { Roboto } from 'next/font/google'

import type { Metadata } from 'next'
import type { ReactElement, ReactNode } from 'react'

import Footer from '~/components/Footer'
import Header from '~/components/Header'

import styles from './layout.module.css'
import Providers from './providers'

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
        <Providers>
          <div className={styles.layout}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
