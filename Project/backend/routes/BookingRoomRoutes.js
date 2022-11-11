const router = require("express").Router();
const BookingRoom = require("../models/bookingRoom");
const moment = require("moment");
const Room = require("../models/room");
router.post("/bookroom", async (req, res) => {
  const { room, userid, fromdate, todate, totalamount, totaldays } = req.body;
  try {
    const newbookingRoom = new BookingRoom({
      room: room.name,
      roomid: room._id,
      userid,
      fromdate: moment(fromdate).format("DD-MM-YYYY"),
      todate: moment(todate).format("DD-MM-YYYY"),
      totalamount,
      totaldays,
      transactionid: "1234",
    });

    const booking = await newbookingRoom.save();
    console.log(booking);
    const roomtemp = await Room.findOne({ _id: room._id });
    roomtemp.currentbookings.push({
      bookingid: booking._id,
      fromdate: moment(fromdate).format("DD-MM-YYYY"),
      todate: moment(todate).format("DD-MM-YYYY"),
      userid: booking.userid,
      status: booking.status,
    });

    await roomtemp.save();
    console.log(roomtemp + "room booked!!..");
    res.send("Room booked successfully..");
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

router.post("/getUserBookings", async (req, res) => {
  const userid = req.body.userid;
 try {
    const bookings = await BookingRoom.find({ userid: userid });
    res.send(bookings);
    console.log(bookings);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

router.post("/cancelbooking",async(req,res)=>{
  const {bookingid , roomid} = req.body

  try {
      const bookingitem = await BookingRoom.findOne({_id: bookingid})
      bookingitem.status = 'Cancelled'

      await bookingitem.save();

      const room = await Room.findOne({_id:roomid})
      const bookings = room.currentbookings

      const temp = bookings.filter(booking=>booking.bookingid.toString() !== bookingid)
      room.currentbookings = temp

      await room.save();
      res.send("Your booking cancel successfully")
      console.log("Your booking cancelled successfully,,")
  } catch (error) {
      console.log(error);
      res.status(400).json({error});
  }
});

router.get('/getallbookings',async(req,res)=>{
  try {
      const bookings = await BookingRoom.find()
      res.send(bookings)
  } catch (error) {
      return res.status(400).json({error})
  }
})






module.exports = router;
