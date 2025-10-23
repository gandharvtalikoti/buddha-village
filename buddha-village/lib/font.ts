import { Gaegu } from 'next/font/google'

export const gaegu = Gaegu({
  weight: ['300', '400', '700'], // Gaegu available weights
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gaegu',
})