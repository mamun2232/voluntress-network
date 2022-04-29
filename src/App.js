import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Donation from './Pages/Home/Donation/Donation';
import Events from './Pages/Home/Events/Events';
import Blog from './Pages/Home/Blog/Blog';
import Login from './Pages/Login/Login/Login';
import RequreAuth from './Pages/Utilitis/RequreAuth/RequreAuth';
import { ToastContainer, toast } from 'react-toastify';
import RegisterList from './Pages/Home/RegisterList/RegisterList';
function App() {
  return (
    <div className="Ap bg-light" >
      <Header></Header>

     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/donation' element={<RequreAuth>
        <Donation></Donation>
       </RequreAuth>}></Route>
       <Route path='/events' element={<RequreAuth>
        <Events></Events>
       </RequreAuth>}></Route>
       <Route path='/blogs' element={<Blog></Blog>}></Route>
     <Route path='/login' element={<Login></Login>}></Route> 
     <Route path='/regiterlist' element={<RegisterList></RegisterList>}></Route>
     </Routes>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
