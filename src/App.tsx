import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import CodeCard from "./pages/http-card";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:code" element={<CodeCard />}/>
    </Routes>
  );
}

export default App;
