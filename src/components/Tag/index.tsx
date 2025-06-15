import classNames from 'classnames'

import type { PropsWithChildren, ReactElement } from 'react'

import styles from './tag.module.css'

interface Props {
  className?: string
}

const Tag = ({ children, className }: PropsWithChildren<Props>): ReactElement => (
  <div className={classNames(styles['tag-component'], className)}>{children}</div>
)

export default Tag
