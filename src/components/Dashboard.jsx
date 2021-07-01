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
import JobSeekerInformation from "../pages/job-seeker/JobSeekerInformation";
import CvUpdate from "../pages/job-seeker/CvUpdate";
import CvDetail from "../pages/job-seeker/CvDetail";
import PersonelInformation from "../pages/system-personell/PersonelInformation";
const Dashboard = () => {
  return (
    <div>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={16}>
            {/* MAIN ROUTE */}
            <Route exact path="/" component={JobList} />
            <Route exact path="/isler" component={JobList} />
            <Route exact path="/isverenler" component={EmployerList} />
            <Route path="/isler/:id" component={JobDetails} />
            <Route path="/isverenler/:id" component={EmployerDetail} />
            {/* EMPLOYER ROUTE */}
            <Route
              exact
              path="/ilan-ekle"
              component={EmployerAddJobAdvertisement}
            />
            <Route
              exact
              path="/ilanlarim"
              component={EmployerJobAdvertisements}
            />

            {/* JOBSEEKER ROUTE */}
            <Route path="/cv/:id" component={CvDetail} />
            <Route path="/cv-update/:id" component={CvUpdate} />
            <Route exact path="/bilgilerim" component={JobSeekerInformation} />

            {/* SYSTEM PERSONELL ROUTE */}
            <Route
              exact
              path="/personel-bilgilerim"
              component={PersonelInformation}
            />

            {/* AUTH ROUTE */}
            <Route exact path="/giris-yap" component={Login} />
            <Route path="/kayit-ol" component={Register} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
