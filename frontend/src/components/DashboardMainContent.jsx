import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

const DashboardMainContent = () => {
  return (
    <main className="flex-1 bg-background overflow-y-auto">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        {/* Left dashboard grows to fill space */}
        <div className="flex-grow min-w-0">
          <DashboardLeft />
        </div>

        {/* Right dashboard sticks to right and maintains its width */}
        <div className="w-fit md:min-w-[300px]">
          <DashboardRight />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
