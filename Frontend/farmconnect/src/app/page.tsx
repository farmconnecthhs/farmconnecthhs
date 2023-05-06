
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {NextPage} from "next";

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
    </main>
  )
}

export default Home
