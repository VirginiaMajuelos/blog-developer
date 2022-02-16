import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Write from "./Components/Pages/Write/Write";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Components/Pages/Home/Home";
import Write from "./Components/Pages/Write/Write";
import Settings from "./Components/Pages/Settings/Settings";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Single from "./Components/Pages/Single/Single";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
