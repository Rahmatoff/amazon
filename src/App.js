import './App.css';
import Header from './components/header/Header';
import HeroBanner from './components/hero-banner/HeroBanner';
import Main from './components/main.jsx/Main';
import Footer from './components/footer/Footer';
import Routes from './routes/index';


function App() {
  return (
    <div className='amazon-body'>
              {/* <Header/> 
              <HeroBanner/>
              <Main/>
              <Footer/> */}
              <Routes/>
    </div>
  );
}

export default App;
      

