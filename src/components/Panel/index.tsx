import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DeleteIcon from '@mui/icons-material/Delete'
import { Typography, Button, Grid, Card, IconButton, CardMedia } from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

import type { ReactElement } from 'react'

import { useGlobalContext } from '~/contexts/global-context'

import styles from './panel.module.css'

const Panel = (): ReactElement => {
  /** Local state */

  const { cart, openInterstitial, pushObject, removeProductToCart } = useGlobalContext()

  /** Handlers */

  const handlePanelOpen = () => pushObject('open_interstitial', false)

  const handleRemoveProduct = (id: number) => () => removeProductToCart(id)

  const getTotalPrice = () => {
    let totalPrice = 0
    cart.map(({ price }) => {
      totalPrice += price
    })
    return totalPrice
  }

  /** Render */

  return (
    <SwipeableDrawer anchor={'right'} onClose={handlePanelOpen} onOpen={handlePanelOpen} open={openInterstitial}>
      <div className={styles['panel-component']}>
        <Grid alignItems="center" className={styles['product-list-container']} container>
          <Grid>
            <IconButton onClick={handlePanelOpen} size="large">
              <ArrowBackIcon sx={{ color: '#283149' }} />
            </IconButton>
          </Grid>
          <Grid>
            <Typography variant="h5">Mon panier</Typography>
          </Grid>
        </Grid>

        <Grid className={styles['product-list-container']} container spacing={2}>
          <Grid size={12}>
            <Typography>{cart.length > 1 ? `${cart.length} produits` : `${cart.length} produit`}</Typography>
          </Grid>

          {cart.map(({ id, image, price, title }, index) => (
            <Grid key={`${id}-${index}`} size={12}>
              <Card className={styles['product-card']}>
                <CardMedia alt={title} className={styles['product-image']} component="img" image={image} />
                <div>
                  <Typography>{title}</Typography>
                  <Typography>{price}euros</Typography>
                </div>
                <IconButton className={styles['delete-icon']} onClick={handleRemoveProduct(id)} size="large">
                  <DeleteIcon sx={{ color: '#283149' }} />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography gutterBottom>
          Prix total : {getTotalPrice()} {getTotalPrice() > 1 ? 'euros' : 'euro'}
        </Typography>
        <Button sx={{ backgroundColor: '#283149' }} variant="contained">
          Commander
        </Button>
      </div>
    </SwipeableDrawer>
  )
}

export default Panel
