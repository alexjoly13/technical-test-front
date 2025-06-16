import { Grid } from '@mui/material'

import type { ReactElement } from 'react'
import type { IProduct } from '~/types/product'

import ProductCard from '~/components/ProductCard'

interface Props {
  products: IProduct[]
}

const ProductsList = ({ products }: Props): ReactElement => {
  /** Render */

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} size={{ md: 4, xs: 6 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductsList
