import React from 'react'
import styles from './ProjectCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard() {
  return (
    <ul className={styles.projectCardHolder}>
      <div>
        <h1>Header 1</h1>
        <p>Test2</p>
        <Image 
          src="/images/leos_hs_photo.png"
          alt="Picture of Leonardo Paredes"
          className="my-8 w-32 h-32 rounded-full"
          width={100}
          height={100}
        />
        <Link href="https://github.com/hcp-uw/Unhoused-resources-app" className={styles.link}>Unhoused Resources App Github</Link>
      </div>
    </ul>
  )
}
