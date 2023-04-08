import React, { createContext, useContext, useState } from 'react';

const StateContetx = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  }

  return (
    <StateContetx.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick
      }}
    >
      {children}
    </StateContetx.Provider>
  )
}

export const useStateContext = () => useContext(StateContetx);