import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';

function App() {

  return (
    <>
      <Button>Click</Button>
      <Button appearence='big'>Click</Button>
      <Input placeholder='Email' />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App;
