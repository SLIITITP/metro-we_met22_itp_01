import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetReview() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/review")
      .then((allInfo) => {
        setReviews(allInfo.data);
        console.log("Data retreived Successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return reviews;
}
