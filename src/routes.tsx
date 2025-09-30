import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Contact from './pages/Contact';
import MainLayout from './layouts/MainLayout';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path="/">
          <Route element={<Home />} index />
          <Route element={<Vehicles />} path="/veiculos" />
          <Route element={<Contact />} path="/contato" />
          <Route element={<h1>Not Found!</h1>} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
