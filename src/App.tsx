import { Routes, Route } from "react-router-dom";
import CodePage from "./pages/code-page";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CodePage />} />
    </Routes>
  );
}

export default App;
