import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Product from './Pages/Product';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/productList' element={ <ProductList/> } />
        <Route path='/product' element={ <Product/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;