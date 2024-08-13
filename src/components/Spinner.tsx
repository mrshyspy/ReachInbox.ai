// Spinner.js
function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="w-16 h-16 border-8 border-blue-600 dark:border-blue-400 border-t-transparent border-solid rounded-full animate-spin"
        style={{ borderWidth: '4px' }} // Optional: Override border width if needed
      ></div>
    </div>
  );
}

export default Spinner;
