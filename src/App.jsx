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
import { LocationProvider } from './Context/LocationContext';
import { MiniNavProvider } from './Context/MiniNavContext';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
            <NavProvider>
              <ReviewProvider>
                <div className="app-container">
                  <div className="nav-container">
                      <NavBar />
                  </div>
                  <div className="nav-mobile-container">
                      <MobileNavbar />
                  </div>
                  <div className="main-content-container">
                    <div className='rentals-content-container'>
                      <div className="rentals-container">
                        <MiniNavProvider>
                          <Rentals />
                        </MiniNavProvider>
                      </div>
                      <div className="reviews-container">
                        <Reviews />
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
                      <Footer />
                  </footer>
                </div>
              </ReviewProvider>
            </NavProvider>
        }/>        
        <Route path='/location' element={<LocationShowMore />} />
      </Routes>
    </Router> 
  );
}

export default App
