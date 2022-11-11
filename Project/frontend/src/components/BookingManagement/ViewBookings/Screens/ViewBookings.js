import React, {useState,useEffect} from 'react'
import axios from 'axios'

import {jsPDF} from "jspdf";
import { getAllRooms } from "../actions/roomActions"
import { useDispatch,useSelector } from "react-redux";
import Loader from '../Components/Loader';
import Error from '../Components/Error';
import Success from '../../CloseBookings/Components/Success';
export default function ViewBookings() {
    const [bookings, setbookings] = useState([])
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();


    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (await axios.get('http://localhost:8070/bookings/getallbookings')).data
                setbookings(data);
                setloading(false);
            } catch (error) {
                console.log(error);
                setloading(false);
                seterror(true);
            }
        }
        fetchData();
    }, [])
    const createPDF = async () => {
        const pdf= new jsPDF("landscape","px","a2",false);
        const data = await document.querySelector("#report");
        pdf.html(data).then(()=>{
          pdf.save("Bookings.pdf");
        });
      };
  
    return (
    
     <>
            <div className="row">
                <div className="col-md-12">

                    <h1 style={{marginTop:"75px"}}>Bookings</h1>
                    {loading && (<Loader />)}
                    <table id="report" class="table table-striped table-dark" style={{width:"70%", marginLeft:"250px"}}>
                        <thead>
                            <tr>
                                <th scope="col">Booking Id</th>
                                <th scope="col">User Id</th>
                                <th scope="col">Room</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings && (bookings.map(booking => {
                                return <tr>
                                    <td scope="row">{booking._id}</td>
                                    <td>{booking.userid}</td>
                                    <td>{booking.room}</td>
                                    <td>{booking.fromdate}</td>
                                    <td>{booking.todate}</td>
                                    <td>{booking.status}</td>
                                </tr>
                            }))}
                        </tbody>
                    </table>
                    
                <button onClick={createPDF}>Print Report</button>

                </div>
            </div>
        </>
    
    )
}
