import Image from 'next/image'
import styles from './page.module.scss'





export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image className={styles.navLogo} priority src={"/images/logo.png"} alt='image isnt loading' 
        sizes='100vw' width={0} height={0} placeholder='empty'></Image>
        <div className={styles.navbar}>
          <p>test</p>
        </div>
        <div className={styles.rightSide}>
          <p>test right</p>
        </div>
      </header>
      <div className={styles.content}>
        <p>
          Content
        </p>
      </div>
      <footer className={styles.footer}>
        <p>
          Footer
        </p>
      </footer>
    </main>
  )
}
