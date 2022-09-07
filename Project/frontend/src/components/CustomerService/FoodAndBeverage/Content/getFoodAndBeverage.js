import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetFoodAndBeverage() {
  const [foodAndBeverageList, setFoodAndBeverage] = useState([]);

  useEffect(() => {
    //useEffect is a react hook that calls itself when the page loads/reloads
    axios
      .get("http://localhost:8070/customerService/foodAndBeverageRequest")
      .then((allInfo) => {
        setFoodAndBeverage(allInfo.data);
        console.log("Data retreived Successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); //The square empty brackets is the syntax of react hook
  return foodAndBeverageList;
}
