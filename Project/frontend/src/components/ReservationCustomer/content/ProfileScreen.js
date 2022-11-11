import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert2'
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Tabs,Divider,Tag } from "antd";
const { TabPane } = Tabs;


export default function ProfileScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    if (!user) {
      window.location.href = "/first/login";
    }
  }, []);

  return (
    <div className="ml-3 mt-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <h1 style={{ fontSize: "30px", textAlign: "left" }}>My Profile</h1>
          <br />
          <h1 style={{ fontSize: "20px", textAlign: "left" }}>
            Name: {user.name}
          </h1>
          <h1 style={{ fontSize: "20px", textAlign: "left" }}>
            Email: {user.email}
          </h1>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings/>
        </TabPane>
      </Tabs>
    </div>
  );
}

export function MyBookings() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  console.log(user);
    const [booking , setbooking] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(); 
  useEffect(async () => {
    async function fetchData(){
     
    try {
        setloading(true)
        console.log(user._id);
      const data = await (await axios.post(
        "http://localhost:8070/bookings/getUserBookings",
        { userid: user._id })
      ).data;
      //console.log("Hi I'm alsldfgh");
      console.log(data);
      setbooking(data)
      setloading(false)
    } catch (error) {
      console.log(error);
      setloading(false)
      seterror(error)
    }
}
    fetchData();
  }, []);

  async function cancelBooking(bookingid,roomid) {

    try {
        setloading(true);
        const result = await (await axios.post('http://localhost:8070/bookings/cancelbooking',{bookingid,roomid})).data
        console.log(result)
        setloading(false);
        swal.fire('congrats','Your booking has been cancelled','success').then(result=>{
            window.location.reload();
        })
    } catch (error) {
        console.log(error);
        setloading(false);
        swal.fire('oopps','Something went wrong','error');
    }
}
  
  
  return(
    <div>
      <hr></hr>
        <div className="row" style={{border:"2px black "}}>
            <div className="col-md-6" >

                {loading && (<Loader/>)}
                {booking && (booking.map(booking=>{
                    return <div className='bs mb-4' style={{textAlign:"left"}}>
                        <p style={{fontSize:"16px"}}><b>{booking.room}</b></p>
                        <p style={{fontSize:"16px"}}><b> Booking Id</b> : {booking._id}</p>
                        <p style={{fontSize:"16px"}}><b> Check In</b> : {booking.fromdate}</p>
                        <p style={{fontSize:"16px"}}><b> Check Out</b>: {booking.todate}</p>
                        <p style={{fontSize:"16px"}}><b> Amount</b> : Rs.{booking.totalamount}</p>
                        <p style={{fontSize:"16px"}}><b>Status</b> : {booking.status === 'booked' ? (<Tag color="green">CONFIRMED</Tag>) : (<Tag color="red">CANCELLED</Tag>)}</p>
                            {booking.status === "booked" && (
                                <div className='text-right'>
                                <button className='btn btn-primary' style={{
                backgroundColor: "black",
                color: "white",
                boxShadow: "none",
                marginRight: "4px",
              }}
              onClick={()=>{cancelBooking(booking._id,booking.roomid)}}
              >CANCEL BOOKING</button>
                                
                                </div>
                )}
                    </div>
                }))}
            </div>
        </div>
        <hr></hr>
    </div>
)
}
