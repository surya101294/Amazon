
import './App.css';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';
import NavbarBottom from './Components/NavbarBottom';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <NavbarBottom/>
        <Carousel/>
        {/* <Sidebar/> */}
    </div>
  );
}

export default App;
