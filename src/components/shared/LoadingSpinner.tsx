const LoadingSpinner = () => {
  return (
    <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-24 space-y-4">
      <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-pink-500 animate-spin"></div>
      <p className="text-sm font-medium text-gray-500">Loading technologies...</p>
    </div>
  );
};

export default LoadingSpinner;
