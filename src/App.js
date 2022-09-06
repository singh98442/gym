import './App.css';
import Header from './components/header/Header';
import Plancard from './components/plancard/Plancard';
import Program from './components/programs/Program';
import Reason from './components/reason/Reason';
import Testimonial from './components/testimonial/Testimonial';
import Join from './components/join/Join';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Program/>
      <Reason/>
      <Plancard/>
      <Testimonial/>
      <Join/>
      <hr className='foothr'/>
      <Footer/>
    </div>
  );
}

export default App;
