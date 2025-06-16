'use client'

import { Grid } from '@mui/material'

import type { ReactElement } from 'react'

import ProductsList from '~/components/ProductList'
import { useWishlist } from '~/contexts/list-context'

const WishlistView = (): ReactElement => {
  /** Local state */

  const { items: wishlistItems } = useWishlist()

  /** Render */

  return (
    <Grid size={{ md: 9, xs: 12 }}>
      <ProductsList products={wishlistItems} />
    </Grid>
  )
}

export default WishlistView
