import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  subsets: ['latin', 'arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'فارم دي بالس - طباعة ثلاثية الأبعاد للمزارع',
  description: 'نقدم خدمات الطباعة ثلاثية الأبعاد المتخصصة للمزارع والتطبيقات الزراعية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
