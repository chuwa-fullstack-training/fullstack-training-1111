import React from "react";
import "./styles.css";
import FrontReact1 from "./FrontReact1";
import CounterTest from "./CounterTest";
import OrdinalConverter from "./Typeip";

function Layout() {
  return (
    <div className="grid-container">
      <header>Header</header>
      <nav>Nav</nav>
      <aside>
        Aside
        <FrontReact1 />
      </aside>
      <section>
        Section
        <CounterTest />
      </section>

      <typeip>
        <OrdinalConverter />
      </typeip>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
