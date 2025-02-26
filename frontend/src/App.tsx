import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import DashBoard from "./DashBoard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
