import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/devices" element={<div>Devices Page</div>} />
          <Route path="/assets" element={<div>Assets Page</div>} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
