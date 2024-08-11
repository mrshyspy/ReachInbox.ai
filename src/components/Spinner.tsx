// Spinner.js
function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div style={{
        width: '48px',
        height: '48px',
        border: '5px solid #0000FF',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
        boxSizing: 'border-box',
        animation: 'spin 1s linear infinite'
      }}></div>
    </div>
  );
}

export default Spinner;
