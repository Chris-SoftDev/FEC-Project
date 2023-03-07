import { useEffect,createContext, useState } from "react";

export const ReviewContext = createContext()

export const ReviewProvider = ({ children }) => {

    const [showReview, setshowReview] = useState(false)
    const [getReviews, setgetReviews] = useState([])
    const [rating, setRating] = useState([])


    useEffect(() => {
      const fetchReviews = async () => {
          const response = await fetch('http://localhost:3000/reviews');
          const data = await response.json();
          setgetReviews(data);
          setRating(data.rating)
      };

      fetchReviews();
  }, []) 
    const openAllRev = () => {
      setshowReview(true)
    }

    const closeAllRev = () => {
      setshowReview(false)
    }
    useEffect(() => {
      showReview 
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }, [showReview]);
  

    return (
        <ReviewContext.Provider 
            value ={{
              showReview,
              openAllRev,
              closeAllRev,
              getReviews,
              rating
            }}
        >
            {children}
        </ReviewContext.Provider>

    )
}
