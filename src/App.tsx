import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Login</>} />
        <Route path="/cadastro" element={<>Cadastro</>} />
        <Route path="/home" element={<>Home</>} />
        <Route path="/perfil" element={<>Perfil</>} />
        <Route path="/leads" element={<>Leads</>} />
      </Routes>
    </Router>
  );
}

export default App;
