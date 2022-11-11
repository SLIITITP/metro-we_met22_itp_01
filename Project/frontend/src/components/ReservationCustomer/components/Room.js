import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import {Link} from "react-router-dom"

export default function Room({ room ,fromdate, todate}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="row"
      style={{
        marginTop: "20px",
        borderColor: "black",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <div className="col-md-4">
        <img
          src={room.imageurls[0]}
          className="smallImg h-200 w-100"
          style={{
            height: "200px",
            width: "200%",
            borderRadius: "5px",
            float: "left",
          }}
        />
      </div>
      <div className="col-md-7 " style={{ textAlign: "left" }}>
        <h1 style={{ "font-size": "20px" }}>{room.name}</h1>
        <b>
          <p>Facilities: {room.facilities}</p>
          <p>Max Count: {room.maxcount}</p>
          <p>Price per day: {room.rentperday}</p>
          <p>Type: {room.type}</p>
        </b>
        <div style={{ float: "right" }}>

           {(fromdate && todate) && (
            <Link to={`/user/book/${room._id}/${fromdate}/${todate}`}>
           <button className="btn btn-primary"
            style={{
              backgroundColor: "black",
              color: "white",
              boxShadow: "none",
              marginRight: "4px",
            }}>Book Now</button>
           </Link> 
            
          )} 
{/* 
<Link to={`/book/${room._id}/${fromdate}/${todate}`}>
           <button className="btn btn-primary"
            style={{
              backgroundColor: "black",
              color: "white",
              boxShadow: "none",
              marginRight: "4px",
            }}>Book Now</button>
           </Link>  */}

           
          <button
            className="btn btn-primary"
            onClick={handleShow}
            style={{
              backgroundColor: "black",
              color: "white",
              boxShadow: "none",
            }}
          >
            View Details
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel=" " nextLabel=" ">
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigImg "
                    src={url}
                    style={{ height: "300px", borderRadius: "5px" }}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
