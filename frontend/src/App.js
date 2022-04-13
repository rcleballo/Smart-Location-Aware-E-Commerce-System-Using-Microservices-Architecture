import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from './Pages/Product';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/productList' element={ <ProductList/> } />
        <Route path='/product' element={ <Product/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/login' element={ user ? (
            <Navigate replace to='/' />
          ) : (
            <Login/>) } 
        />
        <Route path='/register' element={ <Register/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;