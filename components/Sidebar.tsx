
import React from 'react';
import { Page } from '../types';
import { HomeIcon, UsersIcon, UserCircleIcon, CalendarIcon, BriefcaseIcon, CreditCardIcon, ClipboardListIcon, CogIcon, XIcon, ChartPieIcon } from './icons';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const navItems = [
  { page: 'Dashboard', icon: HomeIcon, label: 'Dashboard' },
  { page: 'Staff', icon: UsersIcon, label: 'Staff' },
  { page: 'Profile', icon: UserCircleIcon, label: 'Profile' },
  { page: 'Attendance', icon: CalendarIcon, label: 'Attendance' },
  { page: 'Leave', icon: BriefcaseIcon, label: 'Leave' },
  { page: 'Payroll', icon: CreditCardIcon, label: 'Payroll' },
  { page: 'Tasks', icon: ClipboardListIcon, label: 'Tasks' },
  { page: 'Settings', icon: CogIcon, label: 'Settings' },
] as const;


const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, isOpen, setOpen }) => {
  const NavLink: React.FC<{ item: typeof navItems[number] }> = ({ item }) => {
    const isActive = currentPage === item.page;
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage(item.page);
        }}
        className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
          isActive
            ? 'bg-primary-600 text-white shadow-md'
            : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
        }`}
      >
        <item.icon className="w-5 h-5 mr-3" />
        {item.label}
      </a>
    );
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white shadow-lg">
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className="flex items-center">
            <ChartPieIcon className="w-8 h-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Zenith</span>
          </div>
          <button onClick={() => setOpen(false)} className="md:hidden text-gray-500 hover:text-gray-800">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink key={item.page} item={item} />
          ))}
        </nav>
        <div className="p-4 border-t">
          <div className="p-4 rounded-lg bg-primary-50 text-center">
            <h4 className="text-sm font-semibold text-primary-800">Need Help?</h4>
            <p className="mt-1 text-xs text-primary-700">Check our documentation or contact support.</p>
            <button className="mt-3 w-full bg-primary-600 text-white text-xs font-semibold py-2 rounded-md hover:bg-primary-700 transition">
              Get Help
            </button>
          </div>
        </div>
      </div>
  );

  return (
    <>
      <div className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setOpen(false)}></div>
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-300 md:relative md:translate-x-0 md:shadow-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
