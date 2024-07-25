import Button from './components/Button/Button';
import Input from './components/Input/Input'
import Layout from './layouts/Menu/Layout';


function App() {

  return (
    <>
      <Button>Click</Button>
      <Button appearence='big'>Click</Button>
      <Input placeholder='Email' />
      <Layout />
    </>
  )
}

export default App;
