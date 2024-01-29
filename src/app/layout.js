import { Inter, Mulish } from 'next/font/google'
import './globals.css'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata = {
  title: 'GentleDove',
  description: 'Created by GentleDove',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
