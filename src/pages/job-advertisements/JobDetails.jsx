import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FlexboxGrid, Panel, Icon, Divider, Button } from "rsuite";
import JobAdverTisementService from "../../services/job-advertisements/JobAdvertisementService";

export default function JobDetails() {
  const [jobAdvertisement, setJobAdvertisement] = useState({});
  const [employer, setEmployer] = useState({});
  const [jobPosition, setjobPosition] = useState({});
  const [city, setCity] = useState({});
  let { id } = useParams();
  let userType = localStorage.getItem("userType");
  useEffect(() => {
    let jobAdvertisementService = new JobAdverTisementService();
    jobAdvertisementService
      .getJobAdvertisement(id)
      .then((res) => {
        setJobAdvertisement(res.data.data);
        setEmployer(res.data.data.employer);
        setjobPosition(res.data.data.jobPosition);
        setCity(res.data.data.city);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="show-grid" style={{ marginBottom: 50 }}>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={16}>
          <Panel style={{ padding: 25 }} header={employer.companyName} shaded>
            {jobAdvertisement.description}
            <div style={{ marginTop: 15 }}>
              <h5>Pozisyon</h5>
              <p style={{ marginTop: 15 }}>{jobPosition.positionName}</p>
            </div>
            <Divider />
            {jobAdvertisement.minimumSalary !== 0 ||
            jobAdvertisement.maximumSalary !== 0 ? (
              <>
                <div style={{ marginTop: 15 }}>
                  <h5>Maaş</h5>
                  <p style={{ marginTop: 15 }}>
                    {jobAdvertisement.minimumSalary}{" "}
                    <Icon icon="data-decrease" />{" "}
                    {jobAdvertisement.maximumSalary}
                  </p>
                </div>
                <Divider />
              </>
            ) : null}
            <div style={{ marginTop: 15 }}>
              <h5>Alınacak Kişi Sayısı</h5>
              <p style={{ marginTop: 15 }}>
                {jobAdvertisement.numberOfOpenPosition}
              </p>
            </div>
            <Divider />

            <div style={{ marginTop: 15 }}>
              <h5>Şehir</h5>
              <p style={{ marginTop: 15 }}>{city.cityName}</p>
            </div>
            <Divider />
            <div style={{ marginTop: 15 }}>
              <h5>İş Tipi ve Çalışma Zamanı</h5>
              <p style={{ marginTop: 15 }}>
                <span style={{ fontWeight: "bold" }}>İş Tipi: </span>
                {jobAdvertisement.typeOfWork} <Icon icon="data-decrease" />{" "}
                <span style={{ fontWeight: "bold" }}>Çalışma Zamanı: </span>
                {jobAdvertisement.runtime}
              </p>
            </div>
            <Divider />
            <div style={{ marginTop: 15 }}>
              <h5>Bitiş Tarihi</h5>
              <p style={{ marginTop: 15 }}>
                {jobAdvertisement.applicationDeadline}
              </p>
            </div>
            {userType === "jobSeeker" ? (
              <div style={{ float: "right" }}>
                <Button style={{}} color="green">
                  <Icon icon="hand-o-right" /> BAŞVUR
                </Button>
              </div>
            ) : null}
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}
