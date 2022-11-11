const router = require("express").Router();
let HasOrder = require("../models/HasOrder");


//TO CREATE A RECORD 
router.route("/add").post((req,res)=>{

    const orderID = req.body.orderID;
    const reqID = req.body.reqID;

    const newHasOrder = new HasOrder({
        orderID, 
        reqID
    })
    newHasOrder.save().then(()=>{
        res.json("HasOrder Added")
    }).catch((err)=>{
        console.log(err);

    })

})
// TO SHOW ALL THE RECORD HasOrder  (orderID, reqID)
router.route("/").get((req,res)=>{

    HasOrder.find().then((hasorders)=>{
        res.json(hasorders)
    }).catch((err)=>{
        console.log(err)
    })
})
// TO UPDATE A RECORD

router.route("/update/:id").put(async (req,res) =>{
let hoId = req.params.id;
const {orderID, reqID}= req.body;


const updateHasOrder = {
    orderID, reqID
}

const update = await HasOrder.findByIdAndUpdate(hoId, updateHasOrder).then(() =>{
    res.status(200).send({status: "HasOrder Update"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error occurred while updating", error: err.message});
})
})
 
//TO DELETE A RECORD
router.route("/delete/:id").delete(async (req,res) =>{
    let hoId = req.params.id;
    
     await HasOrder.findByIdAndDelete(hoId).then(() =>{
        res.status(200).send({status: "HasOrder Deleted"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error occurred while deleting", error: err.mess});
    })
    })
//TO SHOW ONE RECORD 
router.route("/get/:id").get(async(req,res)=>{
let hoId = req.params.id

   const user = await HasOrder.findOne(this.name).then((hasorder)=>{
    res.status(200).send({status: "HasOrder Fetched", hasorder})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error occurred while getting a HasOrder record", error: err.message});
})
})
module.exports = router;


