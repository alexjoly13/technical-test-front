'use client'

import { Grid, Typography } from '@mui/material'

import type { ReactElement } from 'react'

import ProductCard from '~/components/ProductCard'
import { useWishlist } from '~/contexts/list-context'

const WishlistView = (): ReactElement => {
  /** Local state */

  const { items: wishlistItems } = useWishlist()

  /** Render */

  return (
    <Grid size={{ md: 9, xs: 12 }}>
      <Grid container spacing={2}>
        {wishlistItems.length > 0 ? (
          wishlistItems.map((product) => (
            <Grid key={product.id} size={{ md: 4, xs: 6 }}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Typography>Pas d&apos;articles sauvegardés</Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default WishlistView
