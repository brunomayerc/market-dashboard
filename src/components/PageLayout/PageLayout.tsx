import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  children?: ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};

export default PageLayout;
