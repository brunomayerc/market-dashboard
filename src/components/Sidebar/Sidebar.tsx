import { useState } from 'react';
import { NavigationMenu, Toggle, Icons } from '../base';

interface SidebarProps {
  onMenuItemClick?: (itemId: string) => void;
}

const Sidebar = ({ onMenuItemClick }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const allMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Icons.DashboardIcon },
    { id: 'watchlist', label: 'Watchlist', icon: Icons.BookmarkIcon },
    { id: 'stocksnap-ai', label: 'StockScope AI', icon: Icons.MagicWandIcon },
    {
      id: 'settings',
      label: 'User Settings',
      icon: Icons.GearIcon,
      isBottomSection: true,
    },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    onMenuItemClick?.(itemId);
  };

  const renderMenuItem = (item: (typeof allMenuItems)[0]) => {
    const isActive = activeItem === item.id;
    const baseClasses =
      'flex items-center px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer group border';
    const activeClasses = isActive
      ? 'bg-blue-100 text-blue-900 border-blue-200'
      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-transparent';

    return (
      <NavigationMenu.Item key={item.id}>
        <NavigationMenu.Link
          onClick={() => handleItemClick(item.id)}
          className={`${baseClasses} ${activeClasses}`}
        >
          <item.icon
            className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-700' : ''}`}
          />
          <span
            className={`ml-3 text-sm font-medium truncate transition-opacity duration-300 ease-in-out ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}
            data-testid={`menu-text-${item.id}`}
            aria-hidden={isCollapsed}
          >
            {item.label}
          </span>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  };

  const regularMenuItems = allMenuItems.filter((item) => !item.isBottomSection);
  const bottomMenuItems = allMenuItems.filter((item) => item.isBottomSection);

  return (
    <aside
      className={`
        h-full bg-white border-r border-gray-200 
        transition-all duration-300 ease-in-out flex flex-col overflow-hidden
        ${isCollapsed ? 'w-16' : 'w-64'}
      `}
      role="complementary"
      data-testid="sidebar"
      data-collapsed={isCollapsed}
    >
      {/* Header with toggle button */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1
            className={`text-lg font-bold text-gray-900 truncate transition-opacity duration-300 ease-in-out font-orbitron ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}
          >
            StockScope
          </h1>
          <Toggle.Root
            pressed={isCollapsed}
            onPressedChange={setIsCollapsed}
            className="
              p-2 rounded-md hover:bg-gray-100 
              data-[state=on]:bg-gray-100 
              transition-colors duration-200
            "
            aria-label="Toggle sidebar"
          >
            {isCollapsed ? (
              <Icons.ChevronRightIcon className="w-4 h-4" />
            ) : (
              <Icons.ChevronLeftIcon className="w-4 h-4" />
            )}
          </Toggle.Root>
        </div>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu.Root className="flex-1 flex flex-col">
        <NavigationMenu.List className="flex-1 flex flex-col p-2 space-y-1">
          {regularMenuItems.map(renderMenuItem)}
        </NavigationMenu.List>

        {/* User Settings - pinned to bottom */}
        <div className="mt-auto p-2 border-t border-gray-200">
          <NavigationMenu.List>
            {bottomMenuItems.map(renderMenuItem)}
          </NavigationMenu.List>
        </div>
      </NavigationMenu.Root>
    </aside>
  );
};

export default Sidebar;
