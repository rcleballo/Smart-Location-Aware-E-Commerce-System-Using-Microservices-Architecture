import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from "react-redux";
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import UserList from './Pages/UserList';
import User from './Pages/User';
import NewUser from './Pages/NewUser';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import NewProduct from './Pages/NewProduct';
import StaffList from './Pages/StaffList';
import Staff from './Pages/Staff';
import NewStaff from './Pages/NewStaff';
import Transactions from './Pages/Transactions';
import TransactionDetail from './Pages/TransactionDetail';
import Analytics from './Pages/Analytics';
import Login from './Pages/Login';

function App() {
  const admin = useSelector((state) => state.user.currentUser);
  return (
    <Router>
        <Routes>
          <Route path='/login' element={ <Login/> } />
          {admin && (
            <>
              <Topbar />
              <div className='container'>
                <Sidebar />
                <Route path='/' element={<Home/>} />
                <Route path='/users' element={<UserList/>} />
                <Route path='/user/:userId' element={<User/>} />
                <Route path='/newUser' element={<NewUser />} />
                <Route path='/products' element={<ProductList/>} />
                <Route path='/product/:productId' element={<Product />} />
                <Route path='/newProduct' element={<NewProduct />} />
                <Route path='/staff' element={<StaffList/>} />
                <Route path='/staff/:userId' element={<Staff/>} />
                <Route path='/newStaff' element={<NewStaff />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/transactions/:transId' element={<TransactionDetail />} />
                <Route path='/analytics' element={<Analytics />} />
              </div>
            </>
          )}
        </Routes>
    </Router>
  );
}

export default App;
