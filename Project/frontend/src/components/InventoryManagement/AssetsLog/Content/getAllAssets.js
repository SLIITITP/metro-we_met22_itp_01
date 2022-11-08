import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function GetAssetDetails() {
  const [asset, setAsset] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/assets/")
      .then((res) => {
        setAsset(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return asset;
}
