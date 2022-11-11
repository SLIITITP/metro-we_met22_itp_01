import React, { useEffect,useState } from "react";
import axios from "axios";
import Room from "../Components/Room";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { getAllRooms } from "../actions/roomActions";
import { useDispatch,useSelector } from "react-redux";
const { RangePicker } = DatePicker;

export default function HomeScreen() {  
  const [rooms, setRooms] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  const dispatch = useDispatch()
  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();
  const [duplicaterooms, setduplicaterooms] = useState([]);
  const [searchkey,setsearchkey]=useState('');
  const [type,setType]=useState('all');
 
  useEffect(() => {
    async function fetchData() {
    try {
      setloading(true);
      const data = (await axios.get("http://localhost:8070/rooms/getallrooms")).data;
      setRooms(data);
      setduplicaterooms(data);
      setloading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setloading(false);
    }
  }
  fetchData();
  }, []);
  
  function filterByDate(dates) {
    setfromdate(moment(dates[0]).format("DD-MM-YYYY"))
    settodate(moment(dates[1]).format("DD-MM-YYYY"))
    console.log(fromdate)
    console.log(todate)
    var temprooms = []
    var availability = false;
    for (const room of duplicaterooms) {
      if (room.currentbookings.length > 0) {
        for (var booking of room.currentbookings) {
          if (
            !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            ) &&
            !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            )
          ) {
            if (
              moment(dates[0]).format("DD-MM-YYYY") !== booking.fromdate &&
              moment(dates[0]).format("DD-MM-YYYY") !== booking.todate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.fromdate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.todate
            ) {
              availability = true;
            }
          }
          setRooms(temprooms)
        }
      }
      if (availability === true || room.currentbookings.length === 0) {
        temprooms.push(room);
      }
   
    }
   
  }
  
  function filterBySearch(){
    const temprooms = duplicaterooms.filter(room=>room.name.toLowerCase().includes(searchkey.toLowerCase()))
    setRooms(temprooms);
  }
  function filterByType(e){
    setType(e);

    if (e!=='all') {
      const temprooms = duplicaterooms.filter(room=>room.type.toLowerCase()===e.toLowerCase())
      setRooms(temprooms);
    }
    else{
      setRooms(duplicaterooms)
    }
  }
  return (
    <div className="container">
      <div classname="row mt-5" style={{ marginTop:"75px",marginRight:"-100px"}}>
        <div className="col-md-3" style={{margintop:"10px"}}>
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
        <div className="col-md-3" style={{float:"right",marginRight:"600px",marginTop:"-32px"}}>
          <input type="text" className='form-control' placeholder="Search rooms" 
          value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} onKeyUp={filterBySearch}/>
        </div>
  
        <select  style={{float:"right", marginRight:"500px" ,marginTop:"-35px", height:"35px" ,borderRadius:"2px"}} value={type} onChange={(e)=>{filterByType(e.target.value)}}>
          <option value="all">All</option>
          <option value="delux">Delux</option>
          <option value="non-delux">Non-Delux</option>
        </select>
       
      </div>
      <div className="row justify-content-center mt-5">
        { loading ? (
          <Loader />
        ) : (
          rooms.map((room) => {
            return  <div className="col-md-9 mt-3">
                <Room room={room} fromdate={fromdate} todate={todate} />
              </div>;
            
          })
        )}
      </div>
    </div>
  );
}
