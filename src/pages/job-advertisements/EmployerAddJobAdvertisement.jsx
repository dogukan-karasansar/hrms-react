import React, { useEffect } from "react";
import JobAdvertisementService from "../../services/job-advertisements/JobAdvertisementService";
export default function EmployerAddJobAdvertisement() {
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.add(localStorage.getItem("userId"));
  }, []);
  return <div>İlan Ekle</div>;
}
