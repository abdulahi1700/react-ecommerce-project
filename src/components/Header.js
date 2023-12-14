import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { useTheme } from 'next-themes';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  // console.log(open);
  return (
    <div className="flex items-center justify-between">
      {/* lef */}
      <div>
        <img src={logo} alt="" />
      </div>
      {/* right */}
      <div className="cursor-pointer md:hidden " onClick={() => setOpen(!open)}>
        <MenuIcon className="w-7" />
      </div>

      {/* desktop */}
      <div className=" items-center  space-x-10 hidden md:flex cursor-pointer">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Products">Products</Link>
        <SearchIcon className="w-6" />
        <SunIcon className="w-7" />
        <ShoppingBagIcon className="w-7 cursor-pointer" />
      </div>

      {/* mobile app */}
      <div
        className={` items-center  space-y-10 flex md:hidden flex-col absolute left-0 top-20 
        h-screen w-screen bg-white pt-18 shadow-3xl 
        ${open ? 'flex' : 'hidden'}
        `}
      >
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Products">Products</Link>
        <SearchIcon className="w-6" />
        {/* darkmode toggle */}
        {theme === 'dark' ? (
          <MoonIcon className=" w-7" onClick={() => setTheme('light')} />
        ) : (
          <SunIcon className=" w-7 " onClick={() => setTheme('Dark')} />
        )}
        {/* <SunIcon className="w-7" /> */}
        <ShoppingBagIcon className="w-7" />
      </div>
    </div>
  );
}

export default Header;
