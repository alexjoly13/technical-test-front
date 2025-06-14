import { Typography } from '@mui/material'

import type { ReactElement } from 'react'

import styles from './footer.module.css'

const Footer = (): ReactElement => {
  /** Render */

  return (
    <footer className={styles['footer-component']}>
      <Typography align="center" color="textSecondary" variant="body2">
        {'Copyright © '}SuperSite{new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  )
}

export default Footer
