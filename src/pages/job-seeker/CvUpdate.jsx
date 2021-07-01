import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CvService from "../../services/cv/CvService";

export default function CvUpdate() {
  let { id } = useParams();
  const [cv, setcv] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getCv(id).then((res) => {
      setcv(res.data.data);
    });
  }, []);

  console.log(cv);

  return <div>{id}</div>;
}
