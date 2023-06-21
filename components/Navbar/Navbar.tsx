"use client"
import { useState, useEffect } from "react";
import {ZET} from '@/components/images'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
 
export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  
//   get current path
    const pathname = usePathname()

    // active link
    const active = (path: string) => {
        return pathname === path ? 'text-primary' : ''
    }
    
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <Link href="/" className={`flex items-center ${active('/')}`}>
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/about" className={`flex items-center ${active('/about')}`}>
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/partner-with-us" className={`flex items-center ${active('/partner-with-us')}`}>
          Partner With Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/blog" className={`flex items-center ${active('/blog')}`}>
          Blog
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <div className="border-b">
        <Navbar className="shadow-none mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <Image src={ZET} alt="" width="70" />
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <Link href="https://play.google.com/store/apps/details?id=in.onecode.app" target="_blank">Download zet</Link>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <Link href="https://play.google.com/store/apps/details?id=in.onecode.app" target="_blank">Download zet</Link>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
    </div>
  );
}