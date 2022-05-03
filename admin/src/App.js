import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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


const Container = styled.div`
display: flex;
margin-top: 10px;
`;

function App() {
  let admin = useSelector((state) => state.user.currentUser);
  
  function PrivateRoute({ admin, children }) {
    return admin ? children : <Navigate to="/login" />;
  }

  function PublicRoute({ admin, children }) {
    return admin ? <Navigate to="/" /> : children;
  }

  try {
    admin = admin.isAdmin
  } catch(err) {
    admin = false;
  }

  return (
    <Router>
        <Routes>
          <Route path='/login' index element={ 
            <PublicRoute admin={admin}>
              <Login/> 
            </PublicRoute>
          } />
          <Route path='/' element={
            <PrivateRoute admin={admin}>
                <Topbar />
                <Container>
                  <Sidebar />
                  <Home/>
                </Container>
            </PrivateRoute>
          }/>
          <Route path='/users' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <UserList/>
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/user/:userId' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <User/>
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/newUser' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <NewUser />
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/products' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <ProductList/>
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/product/:productId' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <Product />
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/newProduct' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <NewProduct />
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/staff' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <StaffList/>
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/staff/:userId' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <Staff/>
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/newStaff' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <NewStaff />
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/transactions' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <Transactions />
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/transactions/:transId' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <TransactionDetail />
              </Container>
            </PrivateRoute>
          }/>
          <Route path='/analytics' element={
            <PrivateRoute admin={admin}>
              <Topbar />
              <Container>
                <Sidebar />
                <Analytics />
              </Container>
            </PrivateRoute>
          }/>
        </Routes>
    </Router>
  );
}

export default App;
