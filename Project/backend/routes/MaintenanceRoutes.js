const router = require("express").Router();
let Maintenance = require("../models/Maintenance");

router.route("/add").post((req,res) => {
    const mainID = req.body.mainID;
    const invenID = req.body.invenID;
    const amount = Number(req.body.amount);
    const maintenanceType = req.body.maintenanceType;
    const description = req.body.description;
    const status = req.body.status;
    const date = Date(req.body.date);

    const newMaintenance = new Maintenance({
         mainID,
         invenID,
         amount,
         maintenanceType,
         description,
         status,
         date,
    });

   //exception handling catching the error
   newMaintenance.save().then(() => {
      res.json("Maintenance details added")
    }).catch((err)=> {
        console.log(err);
    })
})

router.route("/").get((req,res) => {
    Maintenance.find().then((Maintenance) => {
        res.json(Maintenance)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res) => {
    let id = req.params.id;  
      const { mainID,invenID,amount,maintenanceType, description,status,date} = req.body;

      const updateMaintenance = {
        mainID,
        invenID,
        amount,
        maintenanceType,
        description,
        status,
        date
    }

    const update = await Maintenance.findByIdAndUpdate(id, updateMaintenance)
    .then(() => {
        res.status(200).send({status: "Maintenance details updated successfully"})
    }).catch((err) => {
             console.log(err);
             res.status(500).send({status: "Error with updating data", error: err.message});
    })

    
})

router.route("/delete/:id").delete(async(req, res) => {
    let id = req.params.id; 

    await Maintenance.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({status: "Maintenance details deleted successfully"});
    }).catch((err) => {
        res.status(500).send({status: "Error with deleting data", error: err.message});

    })
})

router.route("/get/:id").get(async (req, res) => {
    let id= req.params.id;
    const maintain = await Maintenance.findById(id)
    .then((maintain) => {
           res.status(200).send({status: "maintenance details fetched", maintain})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching data", error: err.message});
    })
})

module.exports = router;