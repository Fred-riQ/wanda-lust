// src/AppContext.js
import React, { createContext, useState } from 'react';

// Create a context for the app
export const AppContext = createContext();

// AppProvider component to manage global state
const AppProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  // Function to add a booking, checking if it's already added
  const addBooking = (booking) => {
    const alreadyBooked = bookings.some((b) => b.id === booking.id);
    if (alreadyBooked) {
      alert(`${booking.partnerName} is already in your bookings!`);
      return;
    }
    setBookings((prev) => [...prev, booking]);
  };

  // Function to cancel a booking by id
  const cancelBooking = (id) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  };

  // Context value that will be shared across components
  const contextValue = {
    bookings,
    addBooking,
    cancelBooking,
    userProfile,
    setUserProfile,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
