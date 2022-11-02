import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Banner from "./components/Banner";
import Navbarr from './components/Navbar';
import Footer from "./components/footer";
import CursorAnimation from "./components/cursorAnimation";
import Cursor from "./components/cursorAnimation";

function App() {




  return (
    <>
      <Navbarr/>
      <CursorAnimation/>
      <Banner/>
      <Footer/> 
      <Cursor/>
      
    </>
  );
}

export default App;
