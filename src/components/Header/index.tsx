'use client'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material'
import Link from 'next/link'

import type { ReactElement } from 'react'

import Panel from '~/components/Panel'
import { useGlobalContext } from '~/contexts/global-context'

import styles from './header.module.css'

// import Interstitial from '../Interstitial'

// const useStyles = (theme) => ({
//   cartIcon: {
//     color: theme.palette.light,
//   },
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: 0,
//   },
// })

const Header = (): ReactElement => {
  /** Local state */

  const { pushObject } = useGlobalContext()

  /** Handlers */

  const toggleDrawer = () =>
    // if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return
    // }
    pushObject('open_interstitial', true)

  /** Render */

  return (
    <>
      <header className={styles['header-component']}>
        <AppBar elevation={0} position="static" sx={{ backgroundColor: '#283149' }}>
          <Container maxWidth="lg">
            <Toolbar className={styles.toolbar}>
              <Link href="/" passHref>
                {/* <Typography className={classes.title} variant="h4"> */}
                {/* <Typography className={classes.title} variant="h4"> */}
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
