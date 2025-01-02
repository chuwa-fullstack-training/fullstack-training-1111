import './App.css'
import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="layout">
        <header className="header">Header</header>
        <nav className="nav">Nav</nav>
        <div className="main">
          <aside className="aside">Aside</aside>
          <section className="section">Section</section>
        </div>
        <footer className="footer">Footer</footer>
      </div>
    )
  }
}

