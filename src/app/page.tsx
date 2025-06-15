import { Button, Container, Grid, Typography } from '@mui/material'

import type { ReactElement } from 'react'

import { slot1, slot2, slot3 } from '~/__mocks__/home-card'
import HomeCard from '~/components/HomeCard'

import styles from './page.module.css'

const Home = (): ReactElement => {
  /** Render */

  return (
    <div className={styles['home-page']}>
      <Container maxWidth="sm">
        <Typography align="center" color="textPrimary" component="h1" gutterBottom variant="h2">
          SuperShop
        </Typography>
        <Typography align="center" color="textSecondary" paragraph variant="h5">
          Something short and leading about the collection below—its contents, the creator, etc. Make it short and
          sweet, but not too short so folks don&apos;t simply skip over it entirely.
        </Typography>
        <HomeCard
          className={styles['home-card']}
          pictureUrl="/static/images/homepage-box-image.jpg"
          slot1={slot1}
          slot2={slot2}
          slot3={slot3}
        />
        <div>
          <Grid container justifyContent="center" spacing={2}>
            <Grid>
              <Button href="/boutique" sx={{ backgroundColor: '#283149' }} variant="contained">
                La Boutique
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Home
