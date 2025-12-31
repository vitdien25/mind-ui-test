import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import AssetsPage from "./pages/AssetsPage";
import DevicesPage from "./pages/DevicesPage";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/assets" element={<AssetsPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
