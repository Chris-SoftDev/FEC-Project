import { createContext, useState } from "react";

export const ReviewContext = createContext()

export const ReviewProvider = ({ children }) => {

    const [showReview, setshowReview] = useState(false)

    const openAllRev = () => {
      setshowReview(true)
    }

    const closeAllRev = () => {
      setshowReview(false)
    }

    return (
        <ReviewContext.Provider 
            value ={{
              showReview,
              openAllRev,
              closeAllRev
            }}
        >
            {children}
        </ReviewContext.Provider>

    )
}
