import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import CheckOut from './Pages/Checkout/CheckOut';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Mentors from './Pages/Home/Mentors/Mentors';
import Blogs from './Pages/Blogs/Blogs';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/reset-password' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
