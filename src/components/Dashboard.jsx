import React from "react";
import { Grid } from "semantic-ui-react";
import JobList from "../pages/job-advertisements/JobList";
import Filter from "../components/Filter";

const Dashboard = () => {
  return (
    <div>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filter />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
