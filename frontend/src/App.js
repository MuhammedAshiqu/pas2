
import './App.css';
import Main from './Components/USERS/Main/Main';
import Header from './Components/USERS/Header/Header';
import {BrowserRouter,Route} from 'react-router-dom'
import About from './Components/USERS/About/About';
// import Contact from './Components/USERS/Contact/Contact';
import Signup from './Components/USERS/Signup/Signup';
import Cart from './Components/USERS/Cart/Cart';
import Placeorder from './Components/USERS/Place-order/Placeorder';
// import Modal from './Components/USERS/Addproduct/Addproduct';
import Contact from './Components/USERS/Contact/Contact'
import Admin from './Components/ADMINS/AdminLogin/Admin';
import AdminHome from './Components/ADMINS/AdminHome/AdminHome';
import Showallusers from './Components/ADMINS/ShowAllUsers/Showallusers';
import { DataContext } from './Context/Context';
import { useContext, useEffect, useState } from 'react';
import Adminheader from './Components/ADMINS/AdminHeader/Adminheader';
import axios from 'axios';
import Ordersuccess from './Components/USERS/Order-Scucess/Ordersuccess';
import Change from './Components/Change/Change';
import Allorders from './Components/ADMINS/All-Orders/Allorders';
import Profile from './Components/USERS/Profile/Profile';
import Chat from './Components/USERS/Chat/Chat';
import Login from './Components/USERS/New/Login';
import Addproduct from './Components/USERS/Addproduct/Addproduct'
import Footer1 from './Components/Footer1/footer1';
import { Navbar } from 'react-bootstrap';
import ViewService from './Components/viewServices/viewServices';
import Service from './Components/ADMINS/service/service';
import Productd from './Components/USERS/productdescription/Productd';
import NewAdd from './Components/USERS/NewAdd/NewAdd';
import NewService from './Components/ADMINS/NewService/NewService';
import Productview from './Components/USERS/Productview/Productview';
import Footer from "./Components/Footer copy/Footer";
import ChatTable from './Components/USERS/Chattable/Chattable';

 import Navbar1 from "./Components/Navbar/Navbar";
 import Navbar2 from "./Components/Navbar2/Navbar2";
import ManageProduct from './Components/USERS/ManagrProduct/ManageProduct';
import NewAdd1 from './Components/USERS/NewAdd1/NewAdd1';
import Update from './Components/USERS/NewAdd1/Update';


function App() {
  const { Users,Cartcount,AdminTrue,IsLoaged } = useContext(DataContext)
  const [adminTrue, setadminTrue] = AdminTrue
  const [isLoaged,setisLoaged] =IsLoaged
  const [thing, setthing] = useState(false)

  useEffect(() => {
   let it= localStorage.getItem('user')
   it && setisLoaged(true)
   setthing(it)
    
    axios.get('http://localhost:8008/signin').then((res)=>{
      console.log(res);
      res.user && setisLoaged(true)
    })
    
  }, [])
   return (
    <div className="App">
      <BrowserRouter>

      {!adminTrue ? <Navbar1></Navbar1> : <Adminheader/> }
      
      <Navbar2></Navbar2>
      
      
      
      
      <Route path ='/admin' component={Admin} />
      <Route path ='/adminhome' component={Change} />
      <Route path ='/getallusers' component={Showallusers} />
      <Route path ='/allorders' component={Allorders} />
      {/* <Route path='/admins' component={AdminHome} /> */}
      <Route path='/service' component={NewService}></Route>




      {/* Users Section */}
      <Route exact path='/'> <Main/> </Route>
      <Route path ='/Login' component={About} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Signup' component={Signup} />
      <Route path='/Cart' component={Cart} />
      <Route path='/place-order' component={Placeorder} />
      <Route path='/order-success' component={Ordersuccess} />
      <Route path='/profile' component={Profile} />
      <Route path='/Chat/:id' component={Chat} />
      <Route path='/viewService' component={ViewService}></Route>
      <Route path='/productd/:id' component={Productd} />
      <Route path='/productview' component={Productview} />
      <Route path='/messages' component={ChatTable} />
      <Route path='/manageproduct' component={ManageProduct} />
      <Route path='/editproduct/:id' component={NewAdd1} />

      {/* <Route path='/*' component={Cart} /> */}

      
      <Route path='/add-product' component={NewAdd} />

      {/* <Footer1 /> */}
      {/* <Footer /> */}
      <Footer></Footer>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
