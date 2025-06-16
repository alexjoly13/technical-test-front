'use client'

import { FavoriteBorder } from '@mui/icons-material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material'
import Link from 'next/link'

import type { ReactElement } from 'react'

import Panel from '~/components/Panel'
import Tag from '~/components/Tag'
import { useCart, useWishlist } from '~/contexts/list-context'
import { PANEL_ACTIONS, usePanelContext } from '~/contexts/panel-context'

import styles from './header.module.css'

const Header = (): ReactElement => {
  /** Local state */

  const { dispatch } = usePanelContext()

  const { items: cart } = useCart()

  const { items: wishlistItems } = useWishlist()

  /** Handlers */

  const toggleDrawer = () => dispatch({ type: PANEL_ACTIONS.PANEL_OPEN })

  /** Render */

  return (
    <>
      <header className={styles['header-component']}>
        <AppBar elevation={0} position="static" sx={{ backgroundColor: '#283149' }}>
          <Container maxWidth="lg">
            <Toolbar className={styles.toolbar}>
              <div className={styles['menu-container']}>
                <Link href="/" passHref>
                  <Typography variant="h4">SuperShop</Typography>
                </Link>
                <Link href="/boutique">
                  <Typography>Boutique</Typography>
                </Link>
              </div>
              <div>
                <IconButton onClick={toggleDrawer} size="large">
                  {cart.length > 0 ? <Tag className={styles['cart-count-tag']}>{cart.length}</Tag> : null}
                  <ShoppingBasketIcon className={styles['cart-icon']} />
                </IconButton>
                <IconButton href="/wishlist">
                  {wishlistItems.length > 0 ? (
                    <Tag className={styles['wishlist-count-tag']}>{wishlistItems.length}</Tag>
                  ) : null}
                  <FavoriteBorder className={styles['heart-icon']} />
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <Panel />
    </>
  )
}

export default Header
