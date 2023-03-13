import "./App.css";
import MobileNavbar from "./Components/NavBar/MobileNavBar";
import NavBar from "./Components/NavBar/Navbar";
import Rentals from "./Components/Rentals/Rentals";
import Reviews from "./Components/Reviews/Reviews";
import Host from "./Components/Host/Host";
import Location from "./Components/Location/Location";
import LocationShowMore from "./Components/Location/LocationShowMore";
import AllPhotosRouter from "./Components/Rentals/AllPhotosRouter";
import Footer from "./Components/Footer/Footer";
import { NavProvider } from "./Context/NavContext";
import { HostProvider } from "./Context/HostContext";
import { ReviewProvider } from "./Context/ReviewContext";
import { LocationProvider } from "./Context/LocationContext";
import { MiniNavProvider } from "./Context/MiniNavContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RentalProvider } from "./Context/RentalContext";

function App() {
  return (
    <ReviewProvider>
          <NavProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
                <HostProvider>
                  <MiniNavProvider>
                    <div className="app-container">
                      <div className="nav-container">
                        <NavBar />
                      </div>
                      <div className="nav-mobile-container">
                        <MobileNavbar />
                      </div>
                      <div className="main-content-container">
                        <div className="rentals-content-container">
                          <div className="rentals-container">
                            <RentalProvider>
                              <Rentals />
                            </RentalProvider>
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
                            <Host />
                          </div>
                        </div>
                      </div>
                      <footer className="footer-container">
                        <Footer />
                      </footer>
                    </div>
                  </MiniNavProvider>
                </HostProvider>
            }
            />
          <Route path="/location" element={<LocationShowMore />} />
          <Route path="/allPhotos" element={<AllPhotosRouter />} />
        </Routes>
      </Router>
            </NavProvider>
    </ReviewProvider>
  );
}

export default App;
