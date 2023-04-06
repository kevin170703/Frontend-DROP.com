import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MyPhoto from "./components/Myphoto/MyPhoto";
import Upload from "./components/Upload/Upload";
// import dontenv from "dotenv";
// dontenv.config();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uploadPhoto" element={<Upload />} />
        <Route path="/MyPhoto" element={<MyPhoto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
