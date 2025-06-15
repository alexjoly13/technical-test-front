'use client'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material'
import Link from 'next/link'

import type { ReactElement } from 'react'

import Panel from '~/components/Panel'
import { PANEL_ACTIONS, usePanelContext } from '~/contexts/panel-context'

import styles from './header.module.css'

const Header = (): ReactElement => {
  /** Local state */

  const { dispatch } = usePanelContext()

  /** Handlers */

  const toggleDrawer = () =>
    // if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return
    // }
    dispatch({ type: PANEL_ACTIONS.PANEL_OPEN })

  /** Render */

  return (
    <>
      <header className={styles['header-component']}>
        <AppBar elevation={0} position="static" sx={{ backgroundColor: '#283149' }}>
          <Container maxWidth="lg">
            <Toolbar className={styles.toolbar}>
              <Link href="/" passHref>
                <Typography variant="h4">SuperShop</Typography>
              </Link>
              <IconButton onClick={toggleDrawer} size="large">
                <ShoppingBasketIcon className={styles['cart-icon']} />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <Panel />
    </>
  )
}

export default Header
