import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className=" px-5 sm:px-10 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="  gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex flex-col gap-2items-center" href="/">
          <span className="font-sansation font-bold text-lg text-center">Aron Hawkins</span>
        </Link>
        {navItems && navItems.length > 0 && (
          <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
            <nav className="flex flex-col md:flex-row gap-4">
              {navItems.map(({ link }, i) => {
                return <CMSLink className="text-white" key={i} {...link} />
              })}
            </nav>
          </div>
        )}
      </div>
      <div>
        <span className="font-sans font-light text-xs text-foreground/50">
          © {new Date().getFullYear()} Aron Hawkins
        </span>
      </div>
    </footer>
  )
}
