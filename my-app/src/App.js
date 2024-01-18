//import logo from './logo.svg';
import './App.css';
import Card from './components/card';

function App() {
  
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 roounded-xl mb-4'>Tailwind csss</h1> 
    <Card username="nirali" btntext="click me"/>
    <br></br>
    <Card username="devasy" />
    </>
  );
}

export default App;
