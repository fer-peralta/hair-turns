import './App.css';
import './components/Navbar/Navbar.js'
import './components/Navbar/Navbar.css'
import './components/MainTurn/MainTurn.js'
import './components/MainTurn/MainTurn.css'
import Navbar from './components/Navbar/Navbar.js';
import MainTurn from './components/MainTurn/MainTurn';
function App() {
  return (
    <>
      <MainTurn />
      <Navbar />
    </>

  )
}

export default App;
