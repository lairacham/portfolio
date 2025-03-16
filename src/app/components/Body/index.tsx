'use client'

import { ReactNode } from 'react'

import { useThemeContext } from '@/app/contexts/useTheme'

import styles from './body.module.scss'

interface IProps {
  children: ReactNode
  className?: string
}

const Body = ({ children, className }: IProps) => {
  const themeContext = useThemeContext()
  const { theme } = themeContext ?? {}

  return (
    <body
      className={`${theme === 'dark' ? styles.dark : styles.light} ${className}`}
    >
      {children}
    </body>
  )
}

export default Body
