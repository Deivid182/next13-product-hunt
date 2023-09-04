"use client";
import Container from '../ui/container'
import Logo from './logo'
import Search from '../inputs/search'
import NavbarItem from './navbar-item'
import UserMenu from './user-menu'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import Button from '../ui/button'


const items = [
  {
    label: 'Products',
    href: '/products'
  },
  {
    label: 'Categories',
    href: '/categories'
  },
  {
    label: 'Community',
    href: '/community'
  },
  {
    label: 'Marketplace',
    href: '/marketplace'
  },
  {
    label: 'Advertise',
    href: '/advertise'
  },
  {
    label: 'About',
    href: '/about'
  }
]

const Navbar = () => {

  const isAuthenticated = true

  return (
    <div className='fixed w-full bg-white shadow-sm z-20'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex items-center justify-between w-full'>
            {/* logo and search */}
            <div className='flex items-center gap-x-3 max-lg:hidden flex-1'>
              <Logo />
              <Search />
              {/* nav items */}
              <ul className='flex items-center gap-x-6'>
                {items.map((item, index) => (
                <NavbarItem key={index} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>
            <div className='max-lg:flex hidden items-center gap-x-4 text-slate-gray'>
              <AiOutlineMenu className='w-7 h-7' />
              <div className='max-md:hidden flex'>
                <BiSearch className='w-7 h-7' />
              </div>
              <div className='max-md:flex hidden'>
                <Logo />
              </div>
              
            </div>
            <div className='md:flex hidden'>
              <Logo />
            </div>
            {/* profile and options */}
            {!isAuthenticated ? (
              <UserMenu />
            ) : (
              <div className='flex items-center gap-x-4'>
                <p className='hidden xl:block text-lg font-normal tracking-tight py-2 text-coral-red hover:text-[#ff5252] transition cursor-pointer'>How to post a product?</p>
                <Button 
                  label='Sign in'
                  small
                  outline
                  onClick={() => {}}
                />
                <Button 
                  label='Sign up'
                  small
                  onClick={() => {}}
                />
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar