import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Panel, TagGroup, Tag } from "rsuite";
import { Grid } from "semantic-ui-react";
import Filter from "../../components/Filter";
import JobAdvertisementService from "../../services/job-advertisements/JobAdvertisementService";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listQuantity, setlistQuantity] = useState(10);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((res) => setJobs(res.data.data));
  }, []);

  const indexOfLastJob = currentPage * listQuantity;
  const indexOfFirstJob = indexOfLastJob - listQuantity;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <Grid>
      <Grid.Row style={{ marginBottom: 100 }}>
        <Grid.Column style={{ marginTop: 10 }} width={4}>
          <Filter
            listQuantity={listQuantity}
            setlistQuantity={setlistQuantity}
          />
        </Grid.Column>
        <Grid.Column width={12}>
          <Row>
            {currentJobs.map((job) => (
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
