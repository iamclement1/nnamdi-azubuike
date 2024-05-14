'use client'
import { NavData } from '@/util/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Header = () => {
  const pathname = usePathname();

  return (
    <main className='md:flex justify-between md:p-8 p-4 fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-70'>
      <Link href={'/'} className='cursor-pointer'>
        <Image src="/nnamdi.svg" alt='logo' width={100} height={250} />
      </Link>
      <nav className='md:grid grid-cols-3 md:gap-6 cursor-pointer'>
        {
          NavData.map((nav) => (
            <Link key={nav.id} href={nav.href}
              className={clsx('text-[#6C6C6B]',
                { 'font-semibold text-white': pathname === nav.href }
              )}>
              {nav.name}
            </Link>
          ))
        }
      </nav>
    </main>
  )
}

export default Header
