import "./App.css"
import  Home  from './PortfolioContainer/Home/Home'
import About from "./PortfolioContainer/About/About";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import Contact from "./PortfolioContainer/Contact/Contact";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";


function App() {
  return (
    <div className="App">
      <Navbar />
     <Home />
     <About />
     <Testimonial />
     <Contact />
    </div>
  );
}

export default App;
