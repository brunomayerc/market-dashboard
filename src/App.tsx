import HomePageProgress from './components/HomePageProgress';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">StockMarket Dashboard BETA</h1>
      <HomePageProgress />
    </div>
  );
};

export default App;