import React, { useState, useEffect } from "react";
import { Row, Col, Panel, Tooltip } from "rsuite";
import JobAdvertisementService from "../../services/job-advertisements/JobAdvertisementService";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((res) => setJobs(res.data.data));
  }, []);

  return (
    <Row>
      {jobs.map((job) => (
        <a href="#">
          <Col key={job.id} style={{ margin: 10 }} md={24} sm={12}>
            <Panel bordered header={job.employer.companyName}>
              <p style={{ color: "black" }}>{job.description}</p>
              <div style={{ height: 20, margin: 15 }}>
                <Tooltip visible>
                  <i>{job.jobPosition.positionName}</i>
                </Tooltip>
              </div>
            </Panel>
          </Col>
        </a>
      ))}
    </Row>
  );
}
