import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneAssetRequest(props) {
  const [assetRequest, setAssetRequest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/assets/get" + props.id)
      .then((Info) => {
        setAssetRequest(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return assetRequest;
}
