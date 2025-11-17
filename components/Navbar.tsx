
import React from 'react';
import { SearchIcon, BellIcon, MenuIcon, ChevronDownIcon } from './icons';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <header className="flex-shrink-0 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        <div className="flex items-center">
           <button onClick={onMenuClick} className="text-gray-500 md:hidden mr-4 focus:outline-none">
             <MenuIcon className="h-6 w-6" />
           </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full bg-gray-100 border border-transparent rounded-lg py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full focus:outline-none">
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
          </button>
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              className="h-9 w-9 rounded-full object-cover"
              src="https://picsum.photos/id/237/100/100"
              alt="User avatar"
            />
            <div className="hidden md:flex items-center">
              <span className="text-sm font-medium text-gray-700">Admin User</span>
              <ChevronDownIcon className="h-4 w-4 text-gray-500 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
