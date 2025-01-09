class HW2 extends React.Component {
    render() {
        return (
        <div className="grid-container">
          <div className="grid-item1">Header</div>
          <div className="grid-item2">Nav</div>
          <div className="grid-item3">Aside</div>
          <div className="grid-item4">Section</div>
          <div className="grid-item5">Footer</div>
        </div>);
    }
}

if (typeof window !== 'undefined') {
    const root = ReactDOM.createRoot(document.getElementById('hw2'));
    root.render(<HW2 />);
}