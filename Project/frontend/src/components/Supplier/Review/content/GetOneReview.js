import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneReview(props) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/review/get/" + props.id)
      .then((Info) => {
        setReview(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return review;
}
