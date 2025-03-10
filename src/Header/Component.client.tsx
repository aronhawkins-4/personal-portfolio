'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { HeaderNav } from './Nav'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/providers/Theme'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [_headerTheme, _setHeaderTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const [_theme, _setTheme] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== _headerTheme) _setHeaderTheme(headerTheme)
  }, [headerTheme])

  useEffect(() => {
    if (theme && theme !== _theme) _setTheme(theme)
  }, [theme, _theme])

  return (
    <header
      className="border-t border-b border-foreground w-full z-20 px-4 sm:px-10 sticky top-0 bg-background"
      {...(_headerTheme ? { 'data-theme': _headerTheme } : {})}
    >
      <div className="flex justify-center sm:justify-between items-center">
        <div className="w-11 hidden sm:block"></div>
        <HeaderNav data={data} />
        {_theme && (
          <Switch
            checked={_theme === 'dark'}
            onCheckedChange={() => {
              setTheme(_theme === 'dark' ? 'light' : 'dark')
              _setTheme(_theme === 'dark' ? 'light' : 'dark')
            }}
            className="hidden sm:block"
          />
        )}
      </div>
    </header>
  )
}
