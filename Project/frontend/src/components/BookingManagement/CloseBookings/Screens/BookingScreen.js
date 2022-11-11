import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactDOM from 'react-dom'
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import moment from "moment";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function BookingScreen() {
  // console.log(window.location.pathname);
  const params = useParams();
  console.log(params.roomid);

  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();

  const roomid = params.roomid;
  const fromdate = moment(params.fromdate, "DD-MM-YYYY");
  const todate = moment(params.todate, "DD-MM-YYYY");

  const totaldays = moment.duration(todate.diff(fromdate)).asDays() + 1;
  const [totalamount, settotalamount] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function fetchData(){
      if(!localStorage.getItem('currentUser')){
        window.location.reload = '/login';}
    try {
      setloading(true);
      const data = (
        await axios.post("http://localhost:8070/rooms/getroombyid", {
          roomid: params.roomid,
        })
      ).data;
      settotalamount(data.rentperday * totaldays);
      setRoom(data);
      setloading(false);
    } catch (error) {
      setloading(false);
      setError(true);
    }
  }
  fetchData();
  }, []);

  async function bookRoom() {
    const bookingDetails = {
      room,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      fromdate,
      todate,
      totalamount,
      totaldays,
    };
    try {
      setloading(true);
      const result = await axios.post(
        "http://localhost:8070/bookings/bookroom/",
        bookingDetails
      );
      console.log(result);
      setloading(false);
       Swal.fire('Congratulations','Your room has been booked successfully..','success');
      // .then(result=>{
      // //   window.location.href='/profile'
      // // })
    } catch (error) {
      setloading(false)
      console.log(error);
      Swal.fire('Ooops..', 'Something went wrong.., Please try later','error');
    }
  }
  // const user = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(user);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 ">
            <div
              classname="col-md-6"
              style={{ float: "right", marginLeft: "10px" }}
            >
              <h1 style={{ fontSize: "20px" }}>{room.name}</h1>
              <img
                src={room.imageurls[0]}
                className="bigImg"
                style={{
                  height: "300px",
                  marginLeft: "5px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <br />
            <br />
            <div
              className="col-md-6"
              style={{
                textAlign: "left",
                marginLeft: "35px",
                marginRight: "10px",
                marginTop: "10px",
                border: "2px",
              }}
            >
              <div>
                <h1 style={{ fontSize: "20px" }}>Booking Details</h1>
                <hr></hr>
                <b>
                  <p>
                    Name:{JSON.parse(localStorage.getItem("currentUser")).username}{" "}
                  </p>
                  <p>From Date:{params.fromdate} </p>
                  <p>To Date:{params.todate} </p>
                  <p>Max Count: {room.maxcount}</p>
                </b>
              </div>
              <hr></hr>
              <div>
                <h1 style={{ fontSize: "20px" }}>AMOUNT</h1>
                <hr></hr>
                <b>
                  <p>Total Days: {totaldays}</p>
                  <p>Rent per day:{room.rentperday}</p>
                  <p>Total Amount: {totalamount}</p>
                </b>

                <button
                  classname="btn btn-primary"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    boxShadow: "none",
                    marginRight: "4px",
                    float: "right",
                  }}
                  onClick={bookRoom}
                >
                  Pay Now
                </button>
              </div>
            </div>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                            <Modal.Title>Make Payment</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                             
                            <Form.Group className="mb-3">
                            <Form.Label>
                                Card Number: 
                              </Form.Label>
                                <Form.Control
                                 label="Card Number"
                                 id="form1"
                                 type="text"
                                 placeholder="1234 5678 9012 3457"
                                 required 
                                 pattern="[0-9]{16}"
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                            <Form.Label>
                                Expire: 
                              </Form.Label>
                                <Form.Control
                                 label="Expire"
                                 id="form5"
                                 type="password"
                                 size="lg"
                                 placeholder="MM/YYYY"
                                 pattern="[0-9]{4}"
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                            <Form.Label>
                                CVV: 
                              </Form.Label>
                                <Form.Control
                                  label="CVV"
                                  id="form6"
                                  type="password"
                                  size="lg"
                                  placeholder="CVV"
                                  pattern="[0-9]{3}"
                                />
                              </Form.Group>
                              </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                              type="submit"
                              variant="primary"
                              onClick={(e) => {
                              bookRoom();
                                handleClose();
                              }}
                            >
                              {"Rs."+totalamount}
                            </Button>
                          </Modal.Footer>

            </Modal>
          </div>
        </div>
        
      ) : (
        <Error />
      )}
    </div>
  );
}
