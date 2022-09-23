const router = require("express").Router();
let KitchenIngredients = require("../models/KitchenIngredients");

router.route("/add").post((req,res) => {
    
    const empID = req.body.empID;
    const kitIngID = req.body.kitIngID;
    const managerID = req.body. managerID;
    const status = req.body.status;
    

    const newKitchenIngredients = new KitchenIngredients({
         
          empID,
          kitIngID,
          managerID,
          status
          
    })

   //exception handling catching the error
   newKitchenIngredients.save().then(() => {
      res.json("kitchen ingredients added")
    }).catch((err)=> {
        console.log(err);
    })
})

router.route("/").get((req,res) => {
    KitchenIngredients.find().then((KitchenIngredients) => {
      res.json(KitchenIngredients)
  }).catch((err) => {
      console.log(err);
  })
})

  router.route("/update/:id").put(async (req,res) => {
          let id = req.params.id;  
            const {empID,kitIngID,managerID,status} = req.body;

            const updateIngredients = {
                empID,
                kitIngID,
                managerID,
                status
          }

          const update = await KitchenIngredients.findByIdAndUpdate(id, updateIngredients)
          .then(() => {
              res.status(200).send({status: "Ingredients updated successfully"})
          }).catch((err) => {
                   console.log(err);
                   res.status(500).send({status: "Error with updating data", error: err.message});
          })

          
  })

router.route("/delete/:id").delete(async(req, res) => {
  let id = req.params.id; 

  await KitchenIngredients.findByIdAndDelete(id)
  .then(() => {
      res.status(200).send({status: "Kitchen ingredients deleted successfully"});
  }).catch((err) => {
      res.status(500).send({status: "Error with deleting ingredients", error: err.message});

  })
})

router.route("/get/:id").get(async (req, res) => {
  let id = req.params.id;
  const ingredients = await KitchenIngredients.findById(id)
  .then((ingredients) => {
         res.status(200).send({status: "Ingredients fetched",ingredients})
  }).catch(() => {
      console.log(err.message);
      res.status(500).send({status: "Error with fetching ingredients", error: err.message});
  })
})

module.exports = router;