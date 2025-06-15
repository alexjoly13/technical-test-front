import classNames from 'classnames'
import { Nunito_Sans } from 'next/font/google'
import Image from 'next/image'

import type { ReactElement } from 'react'

import styles from './home-card.module.css'

interface ICardDescription {
  text: string
  isBold: boolean
}

export interface ICardContent {
  description: ICardDescription[]
  iconUrl: string
  title: string
}

interface Props {
  className?: string
  pictureUrl: string
  slot1: ICardContent
  slot2: ICardContent
  slot3: ICardContent
}

const nunitoSans = Nunito_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

const HomeCard = ({ className, pictureUrl, slot1, slot2, slot3 }: Props): ReactElement => {
  return (
    <div className={classNames(styles['home-card-component'], className)}>
      <div className={styles['picture-wrapper']}>
        <Image alt="home-card-image" className={styles['picture']} fill priority src={pictureUrl} />
      </div>
      <div className={classNames(styles['content-container'], nunitoSans.className)}>
        <div className={styles.slot}>
          <Image alt="slot-1-icon" height={52} src={slot1.iconUrl} width={57} />
          <h3 className={styles.title}>{slot1.title}</h3>
          <span className={styles.description}>
            {slot1.description.map((el, index) =>
              el.isBold ? <strong key={index}>{el.text}</strong> : <span key={index}>{el.text}</span>
            )}
          </span>
        </div>
        <div className={styles.slot}>
          <Image alt="slot-2-icon" height={52} src={slot2.iconUrl} width={57} />
          <h3 className={styles.title}>{slot2.title}</h3>
          <span className={styles.description}>
            {slot2.description.map((el, index) =>
              el.isBold ? <strong key={index}>{el.text}</strong> : <span key={index}>{el.text}</span>
            )}
          </span>
        </div>
        <div className={styles.slot}>
          <Image alt="slot-3-icon" height={52} src={slot2.iconUrl} width={57} />
          <h3 className={styles.title}>{slot3.title}</h3>
          <span className={styles.description}>
            {slot3.description.map((el, index) =>
              el.isBold ? <strong key={index}>{el.text}</strong> : <span key={index}>{el.text}</span>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
