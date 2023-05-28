import './globals.scss'
import styles from './layout.module.scss'
import Header from './header'
import Footer from './footer'
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
      <head>
        <link rel='shortcut icon' href='/public/favicon.ico'></link>
      </head>
      <body className={roboto.className}>
        <main className={styles.main}>
          <Header/>
          <div className={styles.content}>
            {children}
          </div>
          <footer className={styles.footer}>
            <Footer/>
          </footer>
        </main>
      </body>
    </html>
  )
}
