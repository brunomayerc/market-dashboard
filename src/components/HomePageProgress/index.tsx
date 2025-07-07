import * as React from 'react';
import { Progress } from '../base/Progress';

const HomePageProgress = () => {
  const [progress, setProgress] = React.useState(5);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2.5 : 100));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Progress.Root
        className="relative overflow-hidden bg-gray-200 rounded-full w-64 h-4"
        value={progress}
      >
        <Progress.Indicator
          className="bg-blue-500 h-full transition-transform duration-500"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
    </div>
  );
};

export default HomePageProgress;
