import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarAppointments, calendarDetails } from '../data/calendarAppointments';

function CalendarView() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-semibold text-gray-800'>October 2021</h2>
        <div className='flex space-x-2'>
          <button className='p-1 bg-gray-200 rounded-full'>
            <ChevronLeft />
          </button>
          <button className='p-1 bg-gray-200 rounded-full'>
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-7 gap-2 calendar-grid'>
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className='text-center text-xs text-gray-500'>
            {day}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            className={`p-2 text-center rounded-lg ${calendarAppointments[day] ? 'bg-blue-100' : 'bg-gray-100'}`}
          >
            <span className='text-sm text-gray-800'>{day}</span>
            {calendarAppointments[day] &&
              calendarAppointments[day].map((time, idx) => (
                <div key={idx} className='text-xs text-blue-600 mt-1'>
                  {time}
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className='mt-4 space-y-2'>
        {calendarDetails.map((detail) => (
          <div key={detail.title} className='p-4 bg-white rounded-lg shadow-sm'>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-sm font-semibold text-gray-800'>{detail.title}</h3>
                <p className='text-xs text-gray-500'>{detail.time}</p>
                <p className='text-xs text-gray-500'>{detail.doctor}</p>
              </div>
              <span className='text-yellow-500'>stethoscope</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;