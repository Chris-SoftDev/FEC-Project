import { createContext, useState } from "react";

const MiniNavContext = createContext();

export const MiniNavProvider = ({ children }) => {
  const [isMiniNavVisible, setIsMiniNavVisible] = useState()
  return (
    <MiniNavContext.Provider
      value={{
        isMiniNavVisible,
        setIsMiniNavVisible
      }}
    >
      {children}
    </MiniNavContext.Provider>
  );
};

export default MiniNavContext;