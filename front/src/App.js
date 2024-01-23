import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import Register from './components/Register'
import Login from './components/Login'
import Update from './components/Update'
import Protected from './components/Protected';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<Protected Cmp={AddProduct} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/update' element={<Protected Cmp={Update}/>} />
          <Route path='/' element={<Protected Cmp={List}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
