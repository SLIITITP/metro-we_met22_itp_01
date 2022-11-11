const router = require("express").Router();
let Room = require('../models/room');
 
router.get("/getallrooms", async (req, res) => {
    try {
      const rooms = await Room.find({}); //now this will find all students and save it in allStudents
  
      res.send(rooms);
    } catch (error) {
       console.log(error);
      return res.status(400).json({ message: error.message });
    }
  });

  
  router.post("/getroombyid", async (req, res) => {
    const roomid = req.body.roomid;
    
    try {
      const room = await Room.findOne({_id : roomid}); //now this will find all students and save it in allStudents
      console.log(room);
      res.send(room)
    } catch (error) {
      // console.log(error);
      res.status(400).json({ message: error.message });
    }
  });
  
  router.post('/addroom',async(req,res)=>{
    try {
        const newRoom = await Room(req.body)
        await newRoom.save()

        res.send('New Room has been added successfully')
    } catch (error) {
        return res.status(400).json({error})
    }
})

module.exports = router;