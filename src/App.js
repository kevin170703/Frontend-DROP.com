import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/listProducts" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
