import type { Metadata } from 'next'
import { cn } from '@/utilities/ui'
import React from 'react'
import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const Sansation = localFont({
  src: [
    { path: '../../../public/fonts/Sansation/Sansation_Light.ttf', weight: '300', style: 'normal' },
    {
      path: '../../../public/fonts/Sansation/Sansation_Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    { path: '../../../public/fonts/Sansation/Sansation_Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-sansation',
})

const TacticSans = localFont({
  src: [
    {
      path: '../../../public/fonts/TacticSans/tactic-sans-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/TacticSans/tactic-sans-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tactic-sans',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(Sansation.className, TacticSans.className)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
