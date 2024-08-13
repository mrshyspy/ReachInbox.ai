// Spinner.js
function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="w-16 h-16 border-8 border-blue-600 border-t-transparent border-solid rounded-full animate-spin"
        style={{
          borderColor: 'blue', // Light mode border color
          backgroundColor: 'transparent', // Ensure transparency for spinner background
        }}
      ></div>
    </div>
  );
}

export default Spinner;
