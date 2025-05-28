function AnatomySection() {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='w-full max-w-6xl h-auto rounded-lg shadow-lg overflow-hidden'>
        <img
          src='/Premier_Collection.jpg'
          alt='Human Anatomy'
          className='w-full h-auto object-contain'
        />
      </div>

      <div className='absolute top-[10%] left-[45%]'>
        <div className='flex items-center space-x-2'>
          <div className='w-4 h-4 bg-green-500 rounded-full'></div>
          <span className='text-sm text-white'>Brain</span>
        </div>
      </div>

      <div className='absolute top-[30%] left-[44%]'>
        <div className='flex items-center space-x-2'>
          <div className='w-4 h-4 bg-red-500 rounded-full'></div>
          <span className='text-sm text-white'>Heart</span>
        </div>
      </div>

      <div className='absolute top-[35%] left-[41%]'>
        <div className='flex items-center space-x-2'>
          <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
          <span className='text-sm text-white'>Lungs</span>
        </div>
      </div>

      <div className='absolute top-[60%] left-[44%]'>
        <div className='flex items-center space-x-2'>
          <div className='w-4 h-4 bg-yellow-500 rounded-full'></div>
          <span className='text-sm text-white'>Kidneys</span>
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;
