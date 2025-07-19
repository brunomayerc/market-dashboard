import { ReactNode, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/pages/Dashboard';
import Watchlist from '@/pages/Watchlist';
import UserSettings from '@/pages/UserSettings';
import StockSnapAI from '@/pages/StockSnapAI';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const pageComponents = {
    dashboard: Dashboard,
    watchlist: Watchlist,
    'stocksnap-ai': StockSnapAI,
    settings: UserSettings,
  } as const;

  const renderPage = () => {
    const PageComponent =
      pageComponents[currentPage as keyof typeof pageComponents];
    return PageComponent ? <PageComponent /> : children || <Dashboard />;
  };

  const handleMenuItemClick = (itemId: string) => {
    setCurrentPage(itemId);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <main className="flex-1 overflow-auto">{renderPage()}</main>
    </div>
  );
};

export default Layout;
