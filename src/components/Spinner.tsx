// Spinner.js
function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="w-16 h-16 border-8 border-blue-600 dark:border-red-600 border-t-transparent border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
}

export default Spinner;
