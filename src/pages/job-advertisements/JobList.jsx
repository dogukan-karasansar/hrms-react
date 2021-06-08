import React, { useState, useEffect } from "react";
import { Button, Icon, Item, Label } from "semantic-ui-react";
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
    <Item.Group>
      {jobs.map((jobs) => (
        <Item style={{ border: "0.3md solid black", padding: "5px" }}>
          <Item.Image src="https://i.sozcu.com.tr/wp-content/uploads/2019/02/iecrop/shutterstock_1075610606_16_9_1550120804-880x495.jpg" />

          <Item.Content>
            <Item.Header as="a">{jobs.employer.companyName}</Item.Header>
            <Item.Meta>
              <span className="cinema">{jobs.city.cityName}</span>
            </Item.Meta>
            <Item.Description>
              {
                jobs.description
              }
            </Item.Description>
            <Item.Extra>
              <Button primary floated="right">
                Detay
                <Icon name="right chevron" />
              </Button>
              <Label>{jobs.jobPosition.positionName}</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  );
}
