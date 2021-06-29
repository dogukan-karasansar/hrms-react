import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import {
  FlexboxGrid,
  Panel,
  Icon,
  Divider,
  Button,
  Alert,
  IconButton,
} from "rsuite";
import ApplicationService from "../../services/applications/ApplicationService";
import { FavoriteAdService } from "../../services/FavoriteAd/FavoriteAdSerivce";
import JobAdverTisementService from "../../services/job-advertisements/JobAdvertisementService";
import { checkFavorite } from "../../store/actions/favoriteAction";

export default function JobDetails() {
  const [jobAdvertisement, setJobAdvertisement] = useState({});
  const [employer, setEmployer] = useState({});
  const [jobPosition, setjobPosition] = useState({});
  const [city, setCity] = useState({});
  let { id } = useParams();
  const { userItem } = useSelector((state) => state.user);
  const [applications, setapplications] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userItem.length > 0 && userItem[0].userType === "jobSeeker") {
      let applicationService = new ApplicationService();
      applicationService.getApplications(id).then((res) => {
        setapplications(res.data.data);
      });

      let favoriteAdService = new FavoriteAdService();
      favoriteAdService
        .getCheckFavorite(id, userItem[0].user.id)
        .then((res) => {
          dispatch(checkFavorite(res.data.success));
        });
    }

    let jobAdvertisementService = new JobAdverTisementService();
    jobAdvertisementService.getJobAdvertisement(id).then((res) => {
      setJobAdvertisement(res.data.data);
      setEmployer(res.data.data.employer);
      setjobPosition(res.data.data.jobPosition);
      setCity(res.data.data.city);
    });
  }, []);

  const addFavorite = (
    jobAdId = jobAdvertisement.id,
    seekerId = userItem[0].user.id
  ) => {
    let favoriteAdService = new FavoriteAdService();
    favoriteAdService
      .addFavorite(jobAdId, seekerId)
      .then(() => {
        Alert.success("İlan Fvorilere Eklendi");
        dispatch(checkFavorite(true));
      })
      .catch(() =>
        Alert.error("İlan eklenirken hata oluştu daha sonra tekrar deneyin")
      );
  };

  function addApplication(employerId, jobSeekerId, jobAdvertisementId) {
    let applicationService = new ApplicationService();
    applicationService
      .add(employerId, jobSeekerId, jobAdvertisementId)
      .then(() => {
        history.push("/");
        Alert.success("Başvurunuz alındı.");
      });
  }

  const { favoriteItems } = useSelector((state) => state.favorite);

  return (
    <div className="show-grid" style={{ marginBottom: 50 }}>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={16}>
          <Panel style={{ padding: 25 }} header={employer.companyName} shaded>
            {userItem.length > 0 && userItem[0].userType === "jobSeeker" ? (
              favoriteItems === true ? (
                <div
                  style={{
                    position: "relative",
                    float: "right",
                    marginTop: -45,
                  }}
                >
                  <IconButton
                    icon={
                      <Icon size="3x" style={{ color: "red" }} icon="heart" />
                    }
                    circle
                    size="lg"
                  />
                </div>
              ) : (
                <div
                  style={{
                    position: "relative",
                    float: "right",
                    marginTop: -45,
                  }}
                >
                  <IconButton
                    icon={
                      <Icon size="3x" style={{ color: "grey" }} icon="heart" />
                    }
                    onClick={() => addFavorite()}
                    circle
                    size="lg"
                  />
                </div>
              )
            ) : null}
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
            {userItem.length > 0 &&
            userItem[0].userType === "jobSeeker" &&
            applications.length <= 0 ? (
              <div style={{ float: "right" }}>
                <Button
                  onClick={() =>
                    addApplication(employer.id, userItem[0].user.id, id)
                  }
                  color="green"
                >
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
