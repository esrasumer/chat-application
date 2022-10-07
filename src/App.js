import { Home, Login, Register } from './pages';
import './style.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
