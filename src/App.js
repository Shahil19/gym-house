import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Shared/Header/Header';
import Footer from './Pages/Home/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner';
import Services from './Pages/Home/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
