'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { useIsMobile } from '@/app/hooks/useIsMobile'

import styles from './header.module.scss'

const Header = () => {
  const isMobile = useIsMobile()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (isMobile && isMenuOpen) {
    return (
      <div className={styles.mobileHeaderItems}>
        <X className={styles.closeIcon} onClick={handleMenuClick} />
        <Link href='/about'>About</Link>
        <Link href='/works'>Works</Link>
        <Link href='/contact-me'>Contact Me</Link>
      </div>
    )
  }

  return (
    <div className={styles.headerContainer}>
      <Link href='/'>Home</Link>
      {isMobile ? (
        <Menu
          className={isMenuOpen ? styles.displayNone : styles.icon}
          onClick={handleMenuClick}
        />
      ) : (
        <div className={styles.headerItems}>
          <Link href='/about'>About</Link>
          <Link href='/works'>Works</Link>
          <Link href='/contact-me'>Contact Me</Link>
        </div>
      )}
    </div>
  )
}

export default Header
