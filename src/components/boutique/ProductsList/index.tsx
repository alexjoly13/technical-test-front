'use client'

import { Grid, Typography } from '@mui/material'

import type { ReactElement } from 'react'

import { mockProducts } from '~/__mocks__/products'
import ProductCard from '~/components/boutique/ProductCard'
import { useGlobalContext } from '~/contexts/global-context'

import styles from './product-list.module.css'

const ProductsList = (): ReactElement => {
  /** Local state */

  const { cart } = useGlobalContext()

  /** Render */

  return (
    <div className={styles['product-list-component']}>
      <Typography className={styles.title}>Products in cart : {cart.length}</Typography>
      <Grid container spacing={2}>
        {mockProducts.map((product) => (
          <Grid key={product.id} size={{ md: 4, xs: 6 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductsList
