import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/ReservationCustomer/components/Navbar';
import HomeScreen from '../components/ReservationCustomer/content/HomeScreen';
import BookingScreen from '../components/ReservationCustomer/content/BookingScreen';
import RegisterScreen from '../components/ReservationCustomer/components/Register/content/RegisterScreen';
import LoginScreen from '../components/ReservationCustomer/components/Login/content/LoginScreen';
import NavbarLogin from '../components/ReservationCustomer/components/Register/component/NavbarLogin';
import ProfileScreen from '../components/ReservationCustomer/content/ProfileScreen';
import LandingScreen from '../components/ReservationCustomer/content/LandingScreen';


export default function Customer() {
  return (
    
    <div className="App">
      <Routes>
        {/* <Route path="" element={<><NavbarLogin/></>}/> */}
        <Route path='' element={<><NavbarLogin/><LandingScreen/></>}/>
        <Route
          path="/user/room"
          element={
            <>
              <Navbar />
              <HomeScreen />
            </>
          }
        />
        <Route
          path="/user/book/:roomid/:fromdate/:todate"
          element={
            <>
              <Navbar />
              <BookingScreen />
            </>
          }
        />
        <Route
          path="/first/*"
          element={
            <>
              <NavbarLogin />
              <RegisterScreen />
            </>
          }
        />
        <Route
          path="/first/login"
          element={
            <>
              <NavbarLogin />
              <LoginScreen />
            </>
          }
        />
        <Route
        path="/user/profile"
        element={
          <>
          
          <Navbar />
          <ProfileScreen />
          </>
        }
        />
      </Routes>
    </div>
  )
}

