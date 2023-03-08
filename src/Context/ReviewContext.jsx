import { useEffect, createContext, useState } from "react";

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
      settotalAvg(data[0].overall_avg)
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
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showReview]);

  return (
    <ReviewContext.Provider
      value={{
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
        totalAvg
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
