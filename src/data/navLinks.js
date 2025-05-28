import { AiOutlineDashboard, AiOutlineCalendar, AiOutlineBarChart } from 'react-icons/ai';
import { FiClock, FiFileText, FiMessageCircle, FiHelpCircle, FiSettings } from 'react-icons/fi';
import { MdOutlineMedicalServices, MdOutlineTextsms } from 'react-icons/md';
import { BsStethoscope } from 'react-icons/bs';
import { FaRegCircle } from 'react-icons/fa';

export const navLinks = [
  { name: 'Dashboard', icon: <AiOutlineDashboard /> },
  { name: 'History', icon: <FiClock /> },
  { name: 'Calendar', icon: <AiOutlineCalendar /> },
  { name: 'Appointments', icon: <MdOutlineMedicalServices /> },
  { name: 'Statistics', icon: <AiOutlineBarChart /> },
  { name: 'Tests', icon: <FiFileText /> },
  { name: 'Text Message', icon: <MdOutlineTextsms /> },
  { name: 'Circle', icon: <FaRegCircle /> },
  { name: 'Support', icon: <FiHelpCircle /> },
  { name: 'Settings', icon: <FiSettings /> },
];

