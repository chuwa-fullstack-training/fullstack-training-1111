import React from "react";
import "./Layout.css"; // Import the CSS for styling

function Layout() {
  return (
    <div className="layout-container">
      <header className="header">Header</header>
      <nav className="nav">Navigation</nav>
      <main className="main">Main Content</main>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default Layout;