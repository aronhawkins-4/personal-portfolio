'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-0 items-center">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className="text-base font-sansation py-4 px-6 border-0 border-r rounded-none border-foreground bg-transparent first:border-l hover:no-underline focus-visible:no-underline hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background cursor-pointer"
          />
        )
      })}
      {/* <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link> */}
    </nav>
  )
}
