const router = require("express").Router();
let Room = require('../models/room');
 
router.get("/getallrooms", async (req, res) => {
    try {
      const allReqs = await Room.find(); //now this will find all students and save it in allStudents
  
      res.status(200).json(allReqs);
    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });
    }
  });


  router.post("/getroombyid", async (req, res) => {
    const roomid = req.body.roomid;
    
    try {
      const req = await Room.findOne({_id : roomid}); //now this will find all students and save it in allStudents
  
      res.status(200).json(req);
    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });
    }
  });
module.exports = router;