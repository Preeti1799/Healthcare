import { healthStatuses } from '../data/healthStatuses';

function HealthStatusCards() {
  return (
    <div className='space-y-4'>
      {healthStatuses.slice(1).map((status) => (
        <div key={status.name} className='p-4 bg-white rounded-lg shadow-sm'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <div className={`w-3 h-3 ${status.color} rounded-full`}></div>
              <span className='text-sm font-semibold text-gray-800'>{status.name}</span>
            </div>
            <span className='text-xs text-gray-500'>{status.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;