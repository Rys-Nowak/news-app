import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcomePage";
import Home from "./pages/homePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
