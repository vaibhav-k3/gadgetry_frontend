import logo from './logo.svg';
import './App.css';

import { ProductGrid } from './Components/ViewAllProducts/ProductGrid';
import LoginForm from './Components/LoginPage/LoginForm';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import {getProductDetail} from './Components/ProductDetails/api';
import getAllProducts from './Components/ViewAllProducts/api';
import PieChart from './Components/Charts/PieChart';
import {getAllBrands} from  './Components/Charts/api'
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/ViewAllProducts",
    element: <ProductGrid />,
    loader : getAllProducts
  },
  {
    path: "/ViewProductDetails/:requiredProductname",
    element: <ProductDetails />,
    loader : getProductDetail
  },
  {
    path: "/Analytics",
    element: <PieChart />,
    loader : getAllBrands
  }
]);
function App() {
  return (
    < RouterProvider router={router}/>
  );
}

export default App;
