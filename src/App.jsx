import './App.css'
import MobileNavbar from './Components/NavBar/MobileNavBar';
import NavBar from './Components/NavBar/Navbar';
import Rentals from './Components/Rentals/Rentals';
import Reviews from './Components/Reviews/Reviews';
import Host from './Components/Host/Host';
import Location from './Components/Location/Location';
import LocationShowMore from './Components/Location/LocationShowMore';
import Footer from './Components/Footer/Footer';
import { NavProvider } from './Context/NavContext';
import { HostProvider } from './Context/HostContext'
import { ReviewProvider} from './Context/ReviewContext';
import { RegionProvider } from './Context/RegionContext';
import { LocationProvider } from './Context/LocationContext';
import MobileNavbar from './Components/MobileNavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LocationShowMore from './Components/LocationShowMore';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <>
    <div className="app-container">
      <div className="nav-container">
        <NavProvider>
          <NavBar />
        </NavProvider>
      </div>
      <div className="nav-mobile-container">
        <NavProvider>
          <MobileNavbar />
        </NavProvider>
      </div>
      <div className="main-content-container">
        <div className='rentals-content-container'>
          <div className="rentals-container">
            <NavProvider>
              <Rentals />
            </NavProvider>
          </div>
          <div className="reviews-container">
          <ReviewProvider>
            <Reviews />
          </ReviewProvider>
          </div>
          <div className="location-container">
            <LocationProvider>
              <Location />
            </LocationProvider>
          </div>
          <div className="host-container">
            <HostProvider>
              <Host />
            </HostProvider>
          </div>
        </div>
      </div>
      <footer className="footer-container">
        <RegionProvider>
        <NavProvider>
          <Footer />
        </NavProvider>
        </RegionProvider>
      </footer>
    </div>
    </>
      }/>
        
          <Route path='/location' element={<LocationShowMore />} />
        
      </Routes>
    </Router> 
  );
}

export default App
