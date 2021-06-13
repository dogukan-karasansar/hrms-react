import React from "react";
import { Grid } from "semantic-ui-react";
import JobList from "../pages/job-advertisements/JobList";
import { Route } from "react-router";
import JobDetails from "../pages/job-advertisements/JobDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import EmployerList from "../pages/employer/EmployerList";
import EmployerDetail from "../pages/employer/EmployerDetail";
import EmployerAddJobAdvertisement from "../pages/job-advertisements/EmployerAddJobAdvertisement";
import EmployerJobAdvertisements from "../pages/job-advertisements/EmployerJobAdvertisements";
const Dashboard = () => {
  return (
    <div>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={16}>
            <Route exact path="/" component={JobList} />
            <Route exact path="/isler" component={JobList} />
            <Route exact path="/isverenler" component={EmployerList} />
            <Route
              exact
              path="/ilan-ekle"
              component={EmployerAddJobAdvertisement}
            />
            <Route
              exact
              path="/ilanlarım"
              component={EmployerJobAdvertisements}
            />
            <Route path="/isler/:id" component={JobDetails} />
            <Route path="/isverenler/:id" component={EmployerDetail} />
            <Route exact path="/giris-yap" component={Login} />
            <Route exact path="/kayit-ol" component={Register} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
