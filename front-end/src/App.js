
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>Product listing component</h1>} />
          <Route path='/add' element={<h1> Add Product component</h1>} />
          <Route path='signup' element={<SignUp />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
