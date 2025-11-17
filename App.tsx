
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import StaffListPage from './pages/StaffListPage';
import StaffProfilePage from './pages/StaffProfilePage';
import AttendancePage from './pages/AttendancePage';
import LeaveManagementPage from './pages/LeaveManagementPage';
import PayrollPage from './pages/PayrollPage';
import TasksPage from './pages/TasksPage';
import SettingsPage from './pages/SettingsPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSetCurrentPage = useCallback((page: Page) => {
    setCurrentPage(page);
    if(window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Staff':
        return <StaffListPage />;
      case 'Profile':
        return <StaffProfilePage />;
      case 'Attendance':
        return <AttendancePage />;
      case 'Leave':
        return <LeaveManagementPage />;
      case 'Payroll':
        return <PayrollPage />;
      case 'Tasks':
        return <TasksPage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentPage={currentPage} setCurrentPage={handleSetCurrentPage} isOpen={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
