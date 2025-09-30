import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Contact from './pages/Contact';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index path="/" />
        <Route element={<Vehicles />} path="/veiculos" />
        <Route element={<Contact />} path="/contato" />
      </Routes>
    </BrowserRouter>
  );
}
