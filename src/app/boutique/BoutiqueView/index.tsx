'use client'

import { Grid, Typography } from '@mui/material'

import type { ReactElement } from 'react'

import { mockProducts } from '~/__mocks__/products'
import ProductsList from '~/components/ProductList'
import { useCart } from '~/contexts/list-context'

import styles from './boutique-view.module.css'

const BoutiqueView = (): ReactElement => {
  /** Local state */

  const { items: cartItems } = useCart()

  /** Render */

  return (
    <Grid size={{ md: 9, xs: 12 }}>
      <div className={styles['boutique-view']}>
        <Typography className={styles['boutique-view-title']}>Products in cart : {cartItems.length}</Typography>
        <ProductsList products={mockProducts} />
      </div>
    </Grid>
  )
}

export default BoutiqueView
