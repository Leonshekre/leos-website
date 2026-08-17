import styles from "./Navbar.module.css"

import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.navBarList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/aboutMe">About Me</Link></li>
      </ul>
    </nav>
  )
}
