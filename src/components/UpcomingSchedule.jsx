import { upcomingAppointments } from '../data/upcomingAppointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

function UpcomingSchedule() {
  return (
    <div>
      <h2 className='text-lg font-semibold text-gray-800 mb-4'>The Upcoming Schedule</h2>
      {upcomingAppointments.map((schedule) => (
        <div key={schedule.day} className='mb-6'>
          <h3 className='text-sm font-semibold text-gray-600 mb-2'>{schedule.day}</h3>
          {schedule.appointments.map((appointment) => (
            <SimpleAppointmentCard
              key={appointment.title}
              title={appointment.title}
              time={appointment.time}
              icon={appointment.icon}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;