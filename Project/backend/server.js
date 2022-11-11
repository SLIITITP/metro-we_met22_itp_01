//here we are importing packages and assigning them to constants
//Const dont change in value
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const dotenv = require("dotenv").config();
const app = express(); //used to create express appication
app.use(cors());
app.use(bodyParser.json({ limit: "30 mb", extended: true })); //sometimes we might have to send images. so here we are restricting its size
//extended:true, makes sure that everything goes through bodyparser and not just Strings.
app.use(bodyParser.urlencoded({ limit: "30 mb", extended: true }));

//Add here the routers and paths
const userRouter = require("./routes/UserRoutes");
const CustomerRouter = require("./routes/CustomerRoutes.js");
const bookRoomRouter = require("./routes/BookingRoomRoutes");
const roomsRouter = require("./routes/roomsroute");

// const OrdinaryCustomerRouter = require("./routes/OrdinaryCustomerRoutes.js");
// const LoyalCustomerRouter = require("./routes/OrdinaryCustomerRoutes.js");
const CustomerRequestRouter = require("./routes/CustomerRequestRoutes.js");
const FoodAndBeverageRouter = require("./routes/FoodAndBeverageRequestRoutes.js");
const TrainerRequestRouter = require("./routes/TrainerRequestRoutes.js");
const TransportRequestRouter = require("./routes/TransportRequestRoutes.js");
const RoomNecessityRouter = require("./routes/RoomNecessityRequestRoutes.js");
const AttendRequestRouter = require("./routes/AttendRequestRoutes.js");
const CustomerComplaintRouter = require("./routes/CustomerComplaintRoute");
const TransportDriverRouter = require("./routes/TransportDriverRoute");
const TransportManagementRouter = require("./routes/TransportManagement");

//For Staff Management
const EmployeeRouter = require("./routes/EmployeeRoutes.js");
const ManagerRouter = require("./routes/ManagerRoutes.js");
const EmployeeLoginRouter = require("./routes/EmployeeLoginRoutes.js");
const InvoiceRouter = require("./routes/InvoiceRoutes.js");
const AllowanceRouter = require("./routes/AllowanceRoutes.js");
const ReceiveRouter = require("./routes/ReceiveRoutes.js");
const AdminRouter = require("./routes/AdminRoutes.js");
const AttendanceRouter = require("./routes/AttendanceRoutes.js");
const HasRouter = require("./routes/HasRoutes.js");
const ShiftRouter = require("./routes/ShiftRoutes.js");
const OrdinaryEmployeeRouter = require("./routes/OrdinaryEmployeeRoutes.js");
const LeaveRouter = require("./routes/LeaveRoutes.js");
const DepartmentRouter = require("./routes/DepartmentRoutes.js");

//for Inventory Management
const chefRequestRouter = require("./routes/ChefRequestRoutes.js");
const KitchenIngredientsRouter = require("./routes/KitchenIngredientsRoutes.js");
const ManagerRequestRouter = require("./routes/ManagerRequestRoutes.js");
const InventoryRouter = require("./routes/InventoryRoutes.js");
const KitchenStockRouter = require("./routes/KitchenStockRoutes.js");
const ToiletriesRouter = require("./routes/ToiletriesRoutes.js");
const AssetsRouter = require("./routes/AssetRoutes.js");
const AmenityManagerRequestRouter = require("./routes/AmenityManagerRequestRoutes.js");

//Modals for parking management
const vehicle_parking = require("./models/parking_vehicle");
const parking_space = require("./models/parking_space");
const parking_zone = require("./models/parking_zone");

//Supplier Management
const Supplier = require("./routes/Supplier.js");
const Review = require("./routes/Review.js");
const Order = require("./routes/Order.js");
const HasOrder = require("./routes/HasOrder.js");

//https://localhost:8070/customer will load CustomerRouter.js
app.use("/customer", CustomerRouter);
app.use("/users", userRouter);
app.use("/bookings", bookRoomRouter);
app.use("/rooms", roomsRouter);
// app.use("/loyalCustomer", LoyalCustomerRouter);
// app.use("/ordinaryCustomer", OrdinaryCustomerRouter);
app.use("/customerService", CustomerRequestRouter);
app.use("/customerService/complaint", CustomerComplaintRouter);
app.use("/customerService/foodAndBeverageRequest", FoodAndBeverageRouter);
app.use("/customerService/trainerRequest", TrainerRequestRouter);
app.use("/customerService/transportRequest", TransportRequestRouter);
app.use("/customerService/transportManagement", TransportManagementRouter);
app.use("/customerService/roomNecessityRequest", RoomNecessityRouter);
app.use("/customerService/attendRequest", AttendRequestRouter);
app.use("/customerService/transportDriver", TransportDriverRouter);

//http://localhost:8070/employee
app.use("/employee", EmployeeRouter);
app.use("/manager", ManagerRouter);
app.use("/employeelogin", EmployeeLoginRouter);
app.use("/invoice", InvoiceRouter);
app.use("/allowance", AllowanceRouter);
app.use("/receive", ReceiveRouter);
app.use("/admin", AdminRouter);
app.use("/attendance", AttendanceRouter);
app.use("/has", HasRouter);
app.use("/shift", ShiftRouter);
app.use("/ordinaryemployee", OrdinaryEmployeeRouter);
app.use("/leave", LeaveRouter);
app.use("/department", DepartmentRouter);

//http://localhost:8070/chefRequest the chefRequest javascript file will be loaded
app.use("/inventory/chefRequest", chefRequestRouter);
app.use("/kitchenIngredients", KitchenIngredientsRouter);
app.use("/inventory/managerRequest", ManagerRequestRouter);
app.use("/inventory/amenityManagerRequest", AmenityManagerRequestRouter);
app.use("/inventory", InventoryRouter);
app.use("/kitchenStock", KitchenStockRouter);
app.use("/toiletries", ToiletriesRouter);
app.use("/assets", AssetsRouter);

//Supplier Management
app.use("/supplier", Supplier);
app.use("/review", Review);
app.use("/order", Order);
app.use("/hasOrder", HasOrder);

//pricess.env.PORT will allow us to choose the available port that is availabe once hosted
const PORT = process.env.PORT || 8070;

const URL = process.env.MONGODB_URL;

//To say the for mongoose about the db URL link (I think) here we also give options if we have any
mongoose.connect(URL);

//to ask mongose to connect to the URL set under connect (I think)
const connection = mongoose.connection;

//To connect once
//open is the name of the event and using the arrow function
connection.once("open", () => {
  console.log("Connection to MongoDB successful");
});

//To run the server in the assingned PORT
app.listen(PORT, () => {
  console.log("Server is up and running on port : " + PORT);
});

const router = express.Router();

//parking management controllers
router.get("/getDashboard", (req, res) => {
  console.log("req ", req.body);
  parking_space.find({}, (err, data) => {
    if (err || !data)
      return res.status(400).json({
        success: false,
        message: "No Data Exist",
      });
    console.log(data);
    let dashboard = [];
    for (var i = 0; i < data.length; i++) {
      dashboard[i] = {
        title: data[i].parking_space_title,
        is_available: data[i].is_available,
        vehicle_no: data[i].vehicle_no || "",
        zone_id: data[i].parking_zone_id,
        vehicle_transaction_id: data[i].vehicle_transaction_id || "",
      };
    }

    return res.json({ success: true, dashboard });
  });
});

router.get("/getReport", (req, res) => {
  console.log("req ", req.body);
  vehicle_parking.find({}, (err, data) => {
    if (err || !data)
      return res.status(400).json({
        success: false,
        message: "No Data Exist",
      });
    console.log(data);
    let report = [];
    for (let d of data) {
      report.push({
        parking_zone_id: d.parking_zone_id,
        parking_space_id: d.parking_space_id,
        booking_date_time: d.booking_date_time,
        release_date_time: d.release_date_time,
        vehicle_no: d.vehicle_no,
      });
    }
    return res.json({ success: true, report });
  });
});

router.get("/getZone", (req, res) => {
  console.log("req ", req.body);
  parking_zone.find({}, (err, data) => {
    if (err || !data)
      return res.status(400).json({
        success: false,
        message: "No Data Exist",
      });
    console.log("get zone: ", data);
    return res.json({ success: true, data });
  });
});

router.get("/createZone", (req, res) => {
  console.log("req ", req.body);

  function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }

  parking_zone.find({}, {}, {}, function (err, zone) {
    console.log("zone", zone);
    console.log(zone.length);
    if (err || !zone) return console.error(err);

    //let block = nextChar(zone.parking_zone_id);
    let block = String.fromCharCode(65 + zone.length);

    console.log("block", block);

    new parking_zone({
      parking_zone_id: block,
      parking_zone_title: block,
    }).save((err, data) => {
      if (err) return console.error(err);
      console.log(
        data.parking_space_title + " saved to parkingMgmt collection."
      );

      for (let i = 1; i <= 10; i++) {
        let par = new parking_space({
          is_available: true,
          parking_space_id: `${block}${i == 10 ? i : "0" + i}`,
          parking_space_title: `${block}${i == 10 ? i : "0" + i}`,
          parking_zone_id: block,
          vehicle_no: "",
          vehicle_transaction_id: "",
        });
        par.save((err, data) => {
          if (err) return console.error(err);
          console.log(
            data.parking_space_title + " saved to parkingMgmt collection."
          );
        });
      }

      return res.json({ success: true, data });
    });
  });
});

router.get("/deleteZone", (req, res) => {
  console.log("req ", req.body);
  parking_zone.find({}, {}, {}, function (err, zone) {
    console.log("zone", zone);
    console.log(zone.length);
    if (err || !zone) return console.error(err);
    let block = String.fromCharCode(65 + (zone.length - 1));
    console.log("delete block", block);

    parking_space.deleteMany({ parking_zone_id: block }, function (err) {});
    parking_zone.deleteOne({ parking_zone_id: block }, function (err, data) {
      if (err) return console.error(err);
      console.log(data + " delete parking_zone from parkingMgmt collection.");
      return res.json({ success: true, data });
    });
  });
});

router.post("/bookParking", (req, res) => {
  console.log("req ", req.body);

  const { title, is_available, vehicle_no, zone_id } = req.body;

  let update = {
      is_available: false,
      vehicle_no: vehicle_no,
    },
    vehicle = {
      parking_zone_id: zone_id,
      parking_space_id: title,
      booking_date_time: new Date(),
      release_date_time: null,
      vehicle_no: vehicle_no,
    };

  new vehicle_parking(vehicle).save((err, veh) => {
    console.log("veh ", veh);
    console.log("data error", err);
    if (err || !veh)
      return res.status(400).json({
        success: false,
        message: "Unable to update",
      });

    update.vehicle_transaction_id = veh._id;

    console.log("update ", update);
    parking_space.findOneAndUpdate(
      { parking_space_title: title },
      update,
      { new: true, upsert: true, returnNewDocument: true },
      (err, data) => {
        console.log("data ", data);
        if (err || !data)
          return res.status(400).json({
            success: false,
            message: "Unable to update",
          });
        return res.json({ success: true, data });
      }
    );
  });
});

router.post("/releaseParking", (req, res) => {
  const { title, vehicle_transaction_id, is_available, vehicle_no, zone_id } =
    req.body;
  let update = {
      is_available: true,
      vehicle_no: "",
      vehicle_transaction_id: "",
    },
    vehicle = {
      release_date_time: new Date(),
    };

  vehicle_parking.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(vehicle_transaction_id) },
    vehicle,
    (err, veh) => {
      if (err || !veh)
        return res.status(400).json({
          success: false,
          message: "Unable to update",
        });

      parking_space.findOneAndUpdate(
        { parking_space_title: title },
        update,
        { new: true, upsert: true, returnNewDocument: true },
        (err, data) => {
          console.log("data ", data);
          if (err || !data)
            return res.status(400).json({
              success: false,
              message: "Unable to update",
            });

          return res.json({ success: true, data });
        }
      );
    }
  );
});

router.get("/insert", (req, res) => {
  for (let i = 1; i <= 10; i++) {
    let par = new parking_space({
      is_available: true,
      parking_space_id: `A${i == 10 ? i : "0" + i}`,
      parking_space_title: `A${i == 10 ? i : "0" + i}`,
      parking_zone_id: "A",
      vehicle_no: "",
      vehicle_transaction_id: "",
    });
    par.save((err, data) => {
      if (err) return console.error(err);
      console.log(
        data.parking_space_title + " saved to parkingMgmt collection."
      );
    });
  }
  for (let i = 11; i <= 20; i++) {
    let par = new parking_space({
      is_available: true,
      parking_space_id: `B${i == 20 ? i - 10 : "0".concat(i - 10)}`,
      parking_space_title: `B${i == 20 ? i - 10 : "0".concat(i - 10)}`,
      parking_zone_id: "B",
      vehicle_no: "",
      vehicle_transaction_id: "",
    });
    par.save((err, data) => {
      if (err) return console.error(err);
      console.log(
        data.parking_space_title + " saved to parkingMgmt collection."
      );
    });
  }
  for (let i = 21; i <= 30; i++) {
    let par = new parking_space({
      is_available: true,
      parking_space_id: `C${i == 30 ? i - 20 : "0".concat(i - 20)}`,
      parking_space_title: `C${i == 30 ? i - 20 : "0".concat(i - 20)}`,
      parking_zone_id: "C",
      vehicle_no: "",
      vehicle_transaction_id: "",
    });
    par.save((err, data) => {
      if (err) return console.error(err);
      console.log(
        data.parking_space_title + " saved to parkingMgmt collection."
      );
      return "inserted";
    });
  }
});
