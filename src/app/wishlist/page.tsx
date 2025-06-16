import { Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'

import type { ReactElement } from 'react'

import styles from './wishlist.module.css'
import WishlistView from './WishlistView'

const Wishlist = (): ReactElement => {
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
        <Grid container>
          <Grid>
            <Typography className={styles['main-title']} component="h2" fontWeight={600} variant="h5">
              Mes articles
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ md: 3, xs: 12 }}>
            <Typography className={styles['filter-title']} variant="h6">
              Catégories
            </Typography>
            <div>
              <List>
                <ListItem className={styles['filter-list-item']}>
                  <ListItemText primary="Maquillage" />
                </ListItem>
                <ListItem className={styles['filter-list-item']}>
                  <ListItemText primary="Soins visage" />
                </ListItem>
                <ListItem className={styles['filter-list-item']}>
                  <ListItemText primary="Parfums" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <WishlistView />
        </Grid>
      </Container>
    </div>
  )
}

export default Wishlist
