import "./App.css";
import React from "react";
import WelcomePage from "./pages/WelcomPage";
import AfterSigned from "./pages/AfterSigned";
import Messages from "./pages/Messages";
import StatusPage from "./pages/StatusPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="signed" element={<AfterSigned />} />
        <Route path="messages/:chatID" element={<Messages />} />
        <Route path="status" element={<StatusPage />} />
      </Routes>
    </div>
  );
}

export default App;
