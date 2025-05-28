import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';

function DashboardOverview() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div className='col-span-1 md:col-span-2'>
        <ActivityFeed />
      </div>
      <div className='col-span-1'>
        <h2 className='text-lg font-semibold text-gray-800 mb-4'>Dashboard</h2>
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </div>
  );
}

export default DashboardOverview;