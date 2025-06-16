import { Container, Grid, Typography, List, ListItem, ListItemText } from '@mui/material'

import type { ReactElement } from 'react'

import styles from './boutique.module.css'
import BoutiqueView from './BoutiqueView'

const Boutique = (): ReactElement => {
  /** Render */

  return (
    <Container className={styles['boutique-page']} maxWidth="lg">
      <Grid container justifyContent={'center'}>
        <Grid>
          <Typography className={styles['main-title']} component="h1" variant="h3">
            SuperShop
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
        <BoutiqueView />
      </Grid>
    </Container>
  )
}
export default Boutique
