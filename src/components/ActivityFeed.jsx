function ActivityFeed() {
  const bars = [60, 20, 40, 80, 30, 50, 10];

  return (
    <div>
      <h2 className='text-lg font-semibold text-gray-800 mb-2'>Activity</h2>
      <p className='text-sm text-gray-500 mb-4'>3 appointments on this week</p>
      <div className='flex space-x-2'>
        {bars.map((height, idx) => (
          <div key={idx} className='flex-1'>
            <div className='activity-bar h-24 relative'>
              <div
                className='activity-bar-filled absolute bottom-0 w-full'
                style={{ height: `${height}%` }}
              ></div>
            </div>
            <p className='text-xs text-gray-500 text-center mt-1'>
              {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'][idx]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;