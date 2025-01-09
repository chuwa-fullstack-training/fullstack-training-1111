class HW1 extends React.Component {
  render() {
    return (
      <div>
        <h2>What is Frontend?</h2>
        <ul>
          <li>
            Frontend is the part of the website that users can see and interact with.
          </li>
          <li>Frontend is also called <strong>client-side</strong>.</li>
          <li>Frontend is built with HTML, CSS, and JavaScript.</li>
        </ul>
      </div>
    );
  }
}

if (typeof window !== 'undefined') {
  const root = ReactDOM.createRoot(document.getElementById('hw1'));
  root.render(<HW1 />);
}