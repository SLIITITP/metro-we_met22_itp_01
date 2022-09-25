const router = require("express").Router();
let bookingRoom = require("../models/bookingRoom");
const moment = require("moment");
let Room = require("../models/room");
router.post("/bookroom", async (req, res) => {
  const { room, userid, fromdate, todate, totalamount, totaldays } = req.body;

  try {
    const newbookingRoom = new bookingRoom({
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

    const roomtemp = await Room.findOne({ _id: room._id });
    roomtemp.currentbookings.push({
      bookingid: booking._id,
      fromdate: moment(fromdate).format("DD-MM-YYYY"),
      todate: moment(todate).format("DD-MM-YYYY"),
      userid : userid,
      status : booking.status
      
    });

    await roomtemp.save()
    res.send("Room booked successfully..");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
