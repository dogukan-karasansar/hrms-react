import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Panel, TagGroup, Tag } from "rsuite";
import { Grid } from "semantic-ui-react";
import Filter from "../../components/Filter";
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
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <Filter />
        </Grid.Column>
        <Grid.Column width={12}>
          <Row>
            {jobs.map((job) => (
              <Link to={`/isler/${job.id}`} key={job.id}>
                <Col
                  className="jobs-card"
                  style={{ margin: 10 }}
                  md={24}
                  sm={12}
                >
                  <Panel bordered header={job.employer.companyName}>
                    <p style={{ color: "black" }}>{job.description}</p>
                    <div style={{ marginTop: 10 }}>
                      <TagGroup>
                        <Tag
                          style={{ backgroundColor: "#282c35", color: "white" }}
                        >
                          {job.jobPosition.positionName}
                        </Tag>
                        <Tag
                          style={{ backgroundColor: "#282c35", color: "white" }}
                        >
                          {job.city.cityName}
                        </Tag>
                      </TagGroup>
                    </div>
                  </Panel>
                </Col>
              </Link>
            ))}
          </Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
