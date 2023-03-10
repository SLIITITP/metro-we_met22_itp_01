import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneLeave(props) {
  const [leave, setLeave] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/leave/read/" + props.id)
      .then((Info) => {
        setLeave(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return leave;
}
