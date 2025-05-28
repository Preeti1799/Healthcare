import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';

function DashboardMainContent() {
  return (
    <div className='main-content ml-64 p-6 bg-gray-100 min-h-screen'>
      <DashboardOverview />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
}

export default DashboardMainContent;