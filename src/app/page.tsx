import dbConnect from '@/lib/mongodb'
import Technology, { ITechnology } from '@/models/Technology'

import Footer from './components/Footer'
import Header from './components/Header'
import styles from './page.module.scss'

export default async function Home() {
  await dbConnect()

  const technologies = await Technology.find({})
  return (
    <div className={styles.body}>
      <Header />
      {technologies.map((technology: ITechnology, index) => (
        <div key={index}>{technology.name}</div>
      ))}
      <Footer />
    </div>
  )
}
