const router = require("express").Router();
let ManagerRequest = require("../models/ManagerRequest");

router.route("/add").post((req,res) => {
    const reqID = req.body.reqID;
    const reqType = req.body.reqType;
    const invenID = req.body.invenID;
    const managerID = req.body. managerID;
    const status = req.body.status;
    const date = Date(req.body.date);

    const newManagerRequest = new ManagerRequest({
          reqID,
          reqType,
          invenID,
          managerID,
          status,
          date
    })

    newManagerRequest.save().then(() => {
        res.json("Manager request added")
      }).catch((err)=> {
          console.log(err);
      })

})

router.route("/").get((req,res) => {
    ManagerRequest.find().then((ManagerRequest) => {
        res.json(ManagerRequest)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res) => {
    let reqId = req.params.id;  
      const {reqID, reqType, empID, invenID, status, managerID,date} = req.body;

      const updateRequest = {
     reqID,
     reqType,
     empID,
     invenID,
     managerID,
     status,
     date
     
    }

    const update = await ManagerRequest.findByIdAndUpdate(reqId, updateRequest)
    .then(() => {
        res.status(200).send({status: "Manager request updated successfully"})
    }).catch((err) => {
             console.log(err);
             res.status(500).send({status: "Error with updating data", error: err.message});
    })

    
})

router.route("/delete/:id").delete(async(req, res) => {
    let reqId = req.params.id; 

    await ManagerRequest.findByIdAndDelete(reqId)
    .then(() => {
        res.status(200).send({status: "Manager request deleted successfully"});
    }).catch((err) => {
        res.status(500).send({status: "Error with deleting request", error: err.message});

    })
})

router.route("/get/:id").get(async (req, res) => {
    let reqId= req.params.id;
    const request = await ManagerRequest.findById(reqId)
    .then((request) => {
           res.status(200).send({status: "request fetched", request})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching requests", error: err.message});
    })
})

module.exports = router;