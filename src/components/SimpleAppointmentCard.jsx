function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className='appointment-card flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-2'>
      <div className='flex items-center space-x-3'>
        <span className='text-blue-500'>{icon}</span>
        <div>
          <h3 className='text-sm font-semibold text-gray-800'>{title}</h3>
          <p className='text-xs text-gray-500'>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
