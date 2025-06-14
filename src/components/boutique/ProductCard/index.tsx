import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Card, CardContent, CardActions, CardMedia, Typography, IconButton } from '@mui/material'

import type { ReactElement } from 'react'
import type { IProduct } from '~/types/product'

import { useGlobalContext } from '~/contexts/global-context'

import styles from './product-card.module.css'

interface Props {
  product: IProduct
}

const ProductCard = ({ product }: Props): ReactElement => {
  /** Local state */

  const { addProductToCart, pushObject } = useGlobalContext()

  const { description, image, price, title } = product

  /** Handlers */

  //@ts-expect-error callback typing to be fixed
  const handleAddToCart = (product: IProduct) => () => addProductToCart(product, pushObject('open_interstitial', true))

  /** Render */

  return (
    <Card className={styles['product-card-component']}>
      <CardContent className={styles.content}>
        <div className={styles['thumbnail-wrapper']}>
          <CardMedia
            alt={title}
            className={styles.thumbnail}
            component="img"
            image={image}
            title="Contemplative Reptile"
          />
        </div>
        <Typography className={styles['product-name']} component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary" component="p" variant="body2">
          {description}
        </Typography>
        <Typography color="textSecondary" component="p" variant="body2">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleAddToCart(product)} size="large">
          <ShoppingBasketIcon sx={{ color: '#283149' }} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard
