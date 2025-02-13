import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <>
        <h1>Hello everyone</h1>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
