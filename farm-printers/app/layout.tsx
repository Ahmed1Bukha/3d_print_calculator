import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
