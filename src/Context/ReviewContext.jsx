import { useEffect, createContext, useState, useRef } from "react";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const shareMenuRef = useRef();
  const modalReviewRef = useRef();
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
  const [getAllImage, setgetAllImage] = useState([]);

  const fetchUrl = "https://fec-project-production.up.railway.app";

  useEffect(() => {
    const fetchAllImages = async () => {
      const response = await fetch(`${fetchUrl}/images`);
      const data = await response.json();
      setgetAllImage(data);
    };

    fetchAllImages();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(`${fetchUrl}/reviews`);
      const data = await response.json();
      setgetReviews(data);
      setimage(data.img_url);
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const fetchRatings = async () => {
      const response = await fetch(`${fetchUrl}/ratings`);
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
      const response = await fetch(`${fetchUrl}/ratings/avg`);
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

  const openShareMenu = () => {
    setIsShareMenuVisible(true);
  };

  const closeShareMenu = () => {
    setIsShareMenuVisible(false);
  };

  useEffect(() => {
    isShareMenuVisible || showReview
      ? (document.body.parentElement.style.overflowY = "clip")
      : (document.body.parentElement.style.overflowY = "auto");
  }, [isShareMenuVisible, showReview]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (
        isShareMenuVisible &&
        shareMenuRef.current &&
        !shareMenuRef.current.contains(e.target)
      ) {
        setIsShareMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isShareMenuVisible]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (
        showReview &&
        modalReviewRef.current &&
        !modalReviewRef.current.contains(e.target)
      ) {
        setshowReview(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showReview]);

  return (
    <ReviewContext.Provider
      value={{
        modalReviewRef,
        getAllImage,
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

export default ReviewContext;
