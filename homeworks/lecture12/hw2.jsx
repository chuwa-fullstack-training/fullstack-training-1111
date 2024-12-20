import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="header">Header</div>
        </div>
        <div className="row">
          <div className="navigation">Nav</div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="aside">Aside</div>
          </div>
          <div className="col-md-8">
            <div className="main">Section</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="footer">Footer</div>
        </div>
      </div>
    </div>
  );
}

export default App;
