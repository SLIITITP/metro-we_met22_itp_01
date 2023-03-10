import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneAttendance(props) {
  const [atten, setAtten] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/attendance/read/" + props.id)
      .then((Info) => {
        setAtten(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return atten;
}
