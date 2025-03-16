'use client'

import { Crown, Menu, Moon, Sun, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { useThemeContext } from '@/app/contexts/useTheme'
import { useIsMobile } from '@/app/hooks/useIsMobile'

import styles from './header.module.scss'

const Header = () => {
  const isMobile = useIsMobile()

  const themeContext = useThemeContext()
  const { theme, setTheme } = themeContext || {}

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleToggleTheme = () => {
    if (setTheme) {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  if (isMobile && isMenuOpen) {
    return (
      <header
        className={`${styles.mobileHeaderItems} ${theme === 'dark' ? styles.dark : styles.light}`}
      >
        <X className={styles.closeIcon} onClick={handleMenuClick} />
        <Link href='#about'>About</Link>
        <Link href='#works'>Works</Link>
        <Link href='#contact-me'>Contact Me</Link>
      </header>
    )
  }

  return (
    <header className={styles.headerContainer}>
      <Link href='/'>
        <Crown />
      </Link>
      {isMobile ? (
        <Menu
          className={isMenuOpen ? styles.displayNone : styles.icon}
          onClick={handleMenuClick}
        />
      ) : (
        <div className={styles.headerItems}>
          <Link href='#about'>About</Link>
          <Link href='#works'>Works</Link>
          <Link href='#contact-me'>Contact Me</Link>
          {theme === 'dark' ? (
            <Sun onClick={handleToggleTheme} />
          ) : (
            <Moon onClick={handleToggleTheme} />
          )}
        </div>
      )}
    </header>
  )
}

export default Header
