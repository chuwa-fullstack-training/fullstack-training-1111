export default function IncrementButton() {
  const [count, setCount] = useState(0);
  return (
    <div
      className="wrapper"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="container">{count}</div>
      <div className="button" style={{ display: "flex" }}>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 10);
          }}
        >
          10
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 100);
          }}
        >
          100
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1000);
          }}
        >
          1000
        </button>
      </div>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
