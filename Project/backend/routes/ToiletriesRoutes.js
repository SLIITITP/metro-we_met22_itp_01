const router = require("express").Router();
const Toiletries = require("../models/Toiletries");
let toiletries = require("../models/Toiletries");

router.route("/add").post((req,res) => {
    const invenID = req.body.invenID;
    const quantity = req.body.quantity;
   

    const newToiletries = new Toiletries({
          invenID,
          quantity
    })

   //exception handling catching the error
   newToiletries.save().then(() => {
      res.json("toiletries added")
    }).catch((err)=> {
        console.log(err);
    })
})

router.route("/").get((req,res) => {
    toiletries.find().then((Toiletries) => {
        res.json(Toiletries)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res) => {
    let id = req.params.id;  
      const {invenID,quantity} = req.body;

      const updateToiletries = {
        invenID,
        quantity
    }

    const update = await Toiletries.findByIdAndUpdate(id, updateToiletries)
    .then(() => {
        res.status(200).send({status: "Toiletries updated successfully"})
    }).catch((err) => {
             console.log(err);
             res.status(500).send({status: "Error with updating data", error: err.message});
    })

    
})

router.route("/delete/:id").delete(async(req, res) => {
    let id = req.params.id; 

    await Toiletries.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({status: "Toiletries deleted successfully"});
    }).catch((err) => {
        res.status(500).send({status: "Error with deleting toiletries", error: err.message});

    })
})

router.route("/get/:id").get(async (req, res) => {
    let id= req.params.id;
    const toiletry = await Toiletries.findById(id)
    .then((toiletry) => {
           res.status(200).send({status: "data fetched", toiletry})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching data", error: err.message});
    })
})



module.exports = router;