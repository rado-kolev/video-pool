
const LoadingIndicator = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-xl font-bold mb-4'>Loading...</p>
      <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500'></div>
    </div>
  );
};

export default LoadingIndicator;
