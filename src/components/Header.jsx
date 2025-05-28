import { Search, Bell, Plus } from 'lucide-react';

function Header() {
  return (
    <header className='flex justify-between items-center p-4 bg-white shadow-sm'>
      <div className='text-xl font-bold text-blue-600'>Healthcare.</div>
      <div className='flex items-center space-x-4'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search'
            className='pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none'
            disabled
          />
          <Search className='absolute left-3 top-3 text-gray-400' />
        </div>
        <Bell className='text-gray-600' />
        <div className='flex items-center space-x-2'>
          <div className='w-8 h-8 bg-blue-500 rounded-full'></div>
          <span className='text-gray-700'>John Doe</span>
        </div>
        <button className='p-2 bg-blue-500 text-white rounded-full'>
          <Plus />
        </button>
      </div>
    </header>
  );
}

export default Header;
