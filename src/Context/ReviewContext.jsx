import { useEffect, createContext, useState, useRef } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [showReview, setshowReview] = useState(false);
  const [getReviews, setgetReviews] = useState([]);
  const [image, setimage] = useState([]);
  const [ratings, setratings] = useState([]);
  const [cleanliness, setcleanliness] = useState([]);
  const [communication, setCommunication] = useState([]);
  const [checkIn, setcCheckIn] = useState([]);
  const [accuracy, setAccuracy] = useState([]);
  const [location, setLocation] = useState([]);
  const [value, setValue] = useState([]);
  const [totalAvg, settotalAvg] = useState([]);
  const [isShareMenuVisible, setIsShareMenuVisible] = useState(false);
  const shareMenuRef = useRef()


  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("http://localhost:3000/reviews");
      const data = await response.json();
      setgetReviews(data);
      setimage(data.img_url);
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const fetchRatings = async () => {
      const response = await fetch("http://localhost:3000/ratings");
      const data = await response.json();
      setratings(data);
      setcleanliness(data[0].avg_cleanliness);
      setCommunication(data[0].avg_communication);
      setcCheckIn(data[0].avg_check_in);
      setAccuracy(data[0].avg_accuracy);
      setLocation(data[0].avg_location);
      setValue(data[0].avg_value);
    };

    fetchRatings();
  }, []);

  useEffect(() => {
    const fetchAvgRatings = async () => {
      const response = await fetch("http://localhost:3000/ratings/avg");
      const data = await response.json();
      settotalAvg(data[0].overall_avg);
    };

    fetchAvgRatings();
  }, []);

  const openAllRev = () => {
    setshowReview(true);
  };

  const closeAllRev = () => {
    setshowReview(false);
  };
  useEffect(() => {
    showReview
      ? (document.body.parentElement.style.overflowY = "hidden")
      : (document.body.parentElement.style.overflowY = "auto");
  }, [showReview]);

  const openShareMenu = () => {
    setIsShareMenuVisible(true);
  };

  const closeShareMenu = () => {
    setIsShareMenuVisible(false);
  };

  useEffect(() => {
    isShareMenuVisible
      ? (document.body.parentElement.style.overflowY = "hidden")
      : (document.body.parentElement.style.overflowY = "auto");
  }, [isShareMenuVisible]);



  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (isShareMenuVisible && shareMenuRef.current && !shareMenuRef.current.contains(e.target)) {
        setIsShareMenuVisible(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isShareMenuVisible])


  return (
    <ReviewContext.Provider
      value={{
        shareMenuRef,
        isShareMenuVisible,
        openShareMenu,
        closeShareMenu,
        showReview,
        openAllRev,
        closeAllRev,
        getReviews,
        image,
        ratings,
        cleanliness,
        communication,
        checkIn,
        accuracy,
        location,
        value,
        totalAvg,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
