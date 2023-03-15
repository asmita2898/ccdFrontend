import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Menu from './pages/Menu';
import Register from './pages/Register';
import Edit from './pages/Edit';
import Profile from './pages/Profile';
import Contactus from './pages/Contactus';
import './App.css';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/menus' element={<Menu />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
