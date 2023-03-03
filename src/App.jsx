import './App.css'
import NavBar from './Components/NavBar';
import Rentals from './Components/Rentals';
import Reviews from './Components/Reviews';
import Location from './Components/Location';
import Host from './Components/Host';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app-container">
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="main-content-container">
        <div className='rentals-content-container'>
          <div className="rentals-container">
            <Rentals />
          </div>
          <div className="reviews-container">
            <Reviews />
          </div>
          <div className="location-container">
            <Location />
          </div>
          <div className="host-container">
            <Host />
          </div>
        </div>
      </div>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default App
