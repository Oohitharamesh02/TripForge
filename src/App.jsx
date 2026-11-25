
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  const [activePage, setActivePage] = useState("Trips");

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="flex-1">
        <Navbar />
        <Dashboard activePage={activePage} />
      </div>
    </div>
  );
}

export default App;
