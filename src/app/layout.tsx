import './globals.scss'
import styles from './layout.module.scss'
import Image from 'next/image'

import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const roboto = localFont({ src: '../../assets/fonts/roboto/Roboto-Regular.ttf' })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className={styles.main}>
          <header className={styles.header}>
            <Image className={styles.navLogo} priority src={"/images/logo.png"} alt='image isnt loading' 
              sizes='100vw' width={0} height={0} placeholder='empty'></Image>
            <div className={styles.navbar}>
              <p>test</p>
            </div>
            <div className={styles.rightSide}>
              <p>Header</p>
            </div>
          </header>
          <div className={styles.content}>
            {children}
          </div>
          <footer className={styles.footer}>
            <p>
              Footer
            </p>
          </footer>
        </main>
      </body>
    </html>
  )
}
