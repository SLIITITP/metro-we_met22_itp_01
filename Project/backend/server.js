//here we are importing packages and assigning them to constants
//Const dont change in value
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express(); //used to create express appication
app.use(cors());
app.use(bodyParser.json({ limit: "30 mb", extended: true })); //sometimes we might have to send images. so here we are restricting its size
//extended:true, makes sure that everything goes through bodyparser and not just Strings.
app.use(bodyParser.urlencoded({ limit: "30 mb", extended: true }));

//Add here the routers and paths
const userRouter = require("./routes/UserRoutes");
const CustomerRouter = require("./routes/CustomerRoutes.js");

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
//for parking management
const ParkingFeeRouter = require("./routes/ParkingFeeRouter.js");
const ParkingRouter = require("./routes/ParkingRouter.js");
const ParkingStructureRouter = require("./routes/ParkingStructureRouter.js");

//https://localhost:8070/customer will load CustomerRouter.js
app.use("/customer", CustomerRouter);
app.use("/users", userRouter);

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


//https://localhost:8070/Park
app.use("/park/parkFee", ParkingFeeRouter);
app.use("/park", ParkingRouter);
app.use("/park/parkStruct", ParkingStructureRouter);

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
