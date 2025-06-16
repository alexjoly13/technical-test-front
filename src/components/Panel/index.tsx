import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DeleteIcon from '@mui/icons-material/Delete'
import { Typography, Button, Grid, Card, IconButton, CardMedia } from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

import type { ReactElement } from 'react'

import { useCart } from '~/contexts/list-context'
import { PANEL_ACTIONS, usePanelContext } from '~/contexts/panel-context'

import styles from './panel.module.css'

const Panel = (): ReactElement => {
  /** Local state */

  const { items: cartItems, removeItem: removeProductFromCard } = useCart()

  const { dispatch, state } = usePanelContext()

  /** Handlers */

  const handlePanelState = (isOpen: boolean) => () => {
    dispatch({ type: isOpen ? PANEL_ACTIONS.PANEL_OPEN : PANEL_ACTIONS.PANEL_CLOSE })
  }

  const handleRemoveProduct = (id: number) => () => removeProductFromCard(id)

  const getTotalPrice = () => {
    let totalPrice = 0
    cartItems.map(({ price }) => {
      totalPrice += price
    })
    return totalPrice
  }

  /** Render */

  return (
    <SwipeableDrawer
      anchor={'right'}
      onClose={handlePanelState(false)}
      onOpen={handlePanelState(true)}
      open={state.panel}
    >
      <div className={styles['panel-component']}>
        <Grid alignItems="center" className={styles['product-list-container']} container>
          <Grid>
            <IconButton onClick={handlePanelState(false)} size="large">
              <ArrowBackIcon sx={{ color: '#283149' }} />
            </IconButton>
          </Grid>
          <Grid>
            <Typography variant="h5">Mon panier</Typography>
          </Grid>
        </Grid>

        <Grid className={styles['product-list-container']} container spacing={2}>
          <Grid size={12}>
            <Typography>
              {cartItems.length > 1 ? `${cartItems.length} produits` : `${cartItems.length} produit`}
            </Typography>
          </Grid>

          {cartItems.map(({ id, image, price, title }, index) => (
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
