import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/error";
function App() {
  return (
    <Router>
      <Routes>
        {/* Frontend panel */}
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        {/* Page 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
