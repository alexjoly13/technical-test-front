import { Favorite, FavoriteBorder, ShoppingBasket } from '@mui/icons-material'
import { Card, CardContent, CardActions, CardMedia, Typography, IconButton } from '@mui/material'

import type { ReactElement } from 'react'
import type { IProduct } from '~/types/product'

import { useCart, useWishlist } from '~/contexts/list-context'
import { PANEL_ACTIONS, usePanelContext } from '~/contexts/panel-context'

import styles from './product-card.module.css'

interface Props {
  product: IProduct
}

const ProductCard = ({ product }: Props): ReactElement => {
  /** Local state */

  const { addItem: addToCart } = useCart()

  const { addItem: addToWishlist, items: wishlistItems, removeItem: removeFromWishlist } = useWishlist()

  const { dispatch } = usePanelContext()

  const { image, price, title } = product

  const isProductWishlisted = wishlistItems.some((item) => item.id === product.id)

  /** Handlers */

  const handleAddToCart = (product: IProduct) => () => {
    addToCart(product)
    dispatch({ type: PANEL_ACTIONS.PANEL_OPEN })
  }

  const handleWishlistClick = (product: IProduct) => () =>
    isProductWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)

  /** Render */

  return (
    <Card className={styles['product-card-component']}>
      <CardContent className={styles.content}>
        <IconButton className={styles['favorite-icon']} onClick={handleWishlistClick(product)}>
          {isProductWishlisted ? <Favorite sx={{ color: '#283149' }} /> : <FavoriteBorder />}
        </IconButton>
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
          {price} €
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleAddToCart(product)} size="large">
          <ShoppingBasket sx={{ color: '#283149' }} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard
