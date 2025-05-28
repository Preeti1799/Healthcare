import { navLinks } from '../data/navLinks';

function Sidebar() {
  return (
    <aside className='sidebar w-64 bg-white shadow-md h-screen fixed top-0 left-0 pt-16'>
      <div className='p-4'>
        <h2 className='text-sm font-semibold text-gray-500 sidebar-text'>GENERAL</h2>
        <nav className='mt-4'>
          {navLinks.map((link) => (
            <div
              key={link.name}
              className={`flex items-center p-2 rounded-lg ${link.name === 'Dashboard' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'} hover:bg-blue-50 cursor-pointer`}
            >
              <span className='w-5 h-5 mr-3'>{link.icon}</span>
              <span className='sidebar-text'>{link.name}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
