const router = require("express").Router();
let ChefRequest = require("../models/ChefRequest");

router.route("/add").post((req,res) => {
      const reqID = req.body.reqID;
      const empID = req.body.empID;
      const kitIngID = req.body.kitIngID;
      const managerID = req.body.managerID;
      const status = req.body.status;
      const date = Date(req.body.date);

      const newChefRequest = new ChefRequest({
            reqID,
            empID,
            kitIngID,
            managerID,
            status,
            date
      })

     //exception handling catching the error
      newChefRequest.save().then(() => {
        res.json("chef request added")
      }).catch((err)=> {
          console.log(err);
      })
})

router.route("/").get((req,res) => {
    ChefRequest.find().then((ChefRequest) => {
        res.json(ChefRequest)
    }).catch((err) => {
        console.log(err);
    })
})

    router.route("/update/:id").put(async (req,res) => {
            let id = req.params.id;  
              const {reqID, empID, kitIngID, status, managerID, date} = req.body;

              const updateRequest = {
             reqID,
             empID,
             kitIngID,
             managerID,
             status,
             date
            }

            const update = await ChefRequest.findByIdAndUpdate(id, updateRequest)
            .then(() => {
                res.status(200).send({status: "Chef request updated successfully"})
            }).catch((err) => {
                     console.log(err);
                     res.status(500).send({status: "Error with updating data", error: err.message});
            })

            
    })

router.route("/delete/:id").delete(async(req, res) => {
    let id = req.params.id; 

    await ChefRequest.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({status: "Chef request deleted successfully"});
    }).catch((err) => {
        res.status(500).send({status: "Error with deleting request", error: err.message});

    })
})

router.route("/get/:id").get(async (req, res) => {
    let id= req.params.id;
    const reques = await ChefRequest.findById(id)
    .then((ChefRequest) => {
           res.status(200).send({status: "request fetched", ChefRequest})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching requests", error: err.message});
    })
})

module.exports = router;