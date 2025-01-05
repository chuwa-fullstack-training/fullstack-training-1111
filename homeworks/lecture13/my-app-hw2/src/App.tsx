import "./App.css";

const App = () => {
  const buttons = new Array(20).fill(null).map((_, index) => index + 1);

  return (
    <div className="phone-screen">
      <div className="phone-background">
        <div className="status-bar">status bar</div>
        <div className="grid">
          {buttons.map((num) => (
            <button key={num} className="app-button">
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
