import './globals.scss'

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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
