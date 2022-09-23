const router = require("express").Router();
let Inventory = require("../models/Inventory");

router.route("/add").post((req,res) => {
     const invenID = req.body.invenID;
    const managerID = req.body. managerID;
    const purchaseDate = Date(req.body.date);
    const name = req.body.name;
    

    const newInventory = new Inventory({
         invenID,
         managerID,
         purchaseDate,
         name,
         
    })

   //exception handling catching the error
    newInventory.save().then(() => {
      res.json("Inventory added")
    }).catch((err)=> {
        console.log(err);
    })
})

router.route("/").get((req,res) => {
    Inventory.find().then((Inventory) => {
        res.json(Inventory)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res) => {
    let id = req.params.id;  
      const { invenID, managerID, purchaseDate, name} = req.body;

      const updateInventory = {
        invenID,
        managerID,
        purchaseDate,
        name
        
    }

    const update = await Inventory.findByIdAndUpdate(id, updateInventory)
    .then(() => {
        res.status(200).send({status: "Inventory updated successfully"})
    }).catch((err) => {
             console.log(err);
             res.status(500).send({status: "Error with updating data", error: err.message});
    })

    
})

router.route("/delete/:id").delete(async(req, res) => {
    let id = req.params.id; 

    await Inventory.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({status: "Inventory deleted successfully"});
    }).catch((err) => {
        res.status(500).send({status: "Error with deleting inventory", error: err.message});

    })
})

router.route("/get/:id").get(async (req, res) => {
    let id= req.params.id;
    const inventory = await Inventory.findById(id)
    .then((inventory) => {
           res.status(200).send({status: "inventory fetched", inventory})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching inventory", error: err.message});
    })
})
module.exports = router;