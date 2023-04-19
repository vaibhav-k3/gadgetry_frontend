import logo from './logo.svg';
import './App.css';
import { ProductGrid } from './Components/ViewAllProducts/ProductGrid';

function App() {
  return (
    <div style={{ paddingLeft: '50px',
                  paddingRight: '50px', paddingTop: '100px' }} >
      <ProductGrid />
    </div>
    
  );
}

export default App;
