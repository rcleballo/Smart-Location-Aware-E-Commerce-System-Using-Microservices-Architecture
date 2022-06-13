import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from './Pages/Product';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Success from './Pages/Success';
import Stores from './Pages/Stores';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/products/:category' element={ <ProductList/> } />
        <Route path='/product/:id' element={ <Product/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/success' element={ < Success/> } />
        <Route path='/stores' element={ < Stores/> } />
        <Route path='/login' element={ user ? (
            <Navigate replace to='/cart' />
          ) : (
            <Login/>) } 
        />
        <Route path='/register' element={ user ? (
            <Navigate replace to='/' />
          ) : (
            <Register/> )} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;