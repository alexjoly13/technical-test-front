'use client'

import { Container, Grid, Typography } from '@mui/material'

import type { ReactElement } from 'react'

import ProductCard from '~/components/boutique/ProductCard'
import { useWishlist } from '~/contexts/list-context'

import styles from './wishlist.module.css'

const Wishlist = (): ReactElement => {
  /** Local state */

  const { items: wishlistItems } = useWishlist()

  /** Render */

  return (
    <div className={styles['wishlist-page']}>
      <Container>
        <Grid container justifyContent={'center'}>
          <Grid>
            <Typography className={styles['main-title']} component="h1" variant="h3">
              SuperShop
            </Typography>
          </Grid>
        </Grid>
        <Grid size={{ md: 9, xs: 12 }}>
          <Grid container spacing={2}>
            {wishlistItems.length > 0 ? (
              wishlistItems.map((product) => (
                <Grid key={product.id} size={{ md: 4, xs: 6 }}>
                  <ProductCard product={product} />
                </Grid>
              ))
            ) : (
              <div>No items in your wishlist</div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Wishlist
