import React from "react";
import { useParams } from "react-router";

export default function JobDetails() {
  let { id } = useParams();
  return <div>{id}</div>;
}
