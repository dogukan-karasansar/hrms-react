import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  Divider,
  IconButton,
  Icon,
  Grid,
  Row,
  Col,
  Button,
} from "rsuite";
import CvService from "../../services/cv/CvService";

const JobSeekerInformation = () => {
  const { userItem } = useSelector((state) => state.user);
  const user = userItem[0].user;
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getCvs(user.id).then((res) => {
      setCvs(res.data.data);
    });
  }, []);

  console.log(cvs);
  return (
    <div>
      <Panel bordered style={{ padding: 10 }}>
        <h3 style={{ margin: 10 }} align="center">
          Hesap Bilgileri
        </h3>
        <h5>
          Ad ve Soyad:{" "}
          <span style={{ fontSize: 14, color: "black" }}>
            {user.firstName} {user.lastName}
          </span>
        </h5>
        <Divider />
        <h5>
          Mail:{" "}
          <span style={{ fontSize: 14, color: "black" }}>
            {user.user.email}
          </span>
        </h5>
        <Divider />
        <h5>
          Doğum Tarihi:{" "}
          <span style={{ fontSize: 14, color: "black" }}>
            {user.birthdayDate}
          </span>
        </h5>
        <Divider />
        <h5>
          TC Kimlik No:{" "}
          <span style={{ fontSize: 14, color: "black" }}>
            {user.nationalIdentity}
          </span>
        </h5>
      </Panel>
      {cvs.length > 0 ? (
        <div>
          <Grid fluid style={{ marginTop: 10 }}>
            <Row className="show-grid">
              <Col xs={3} style={{ float: "right" }}>
                <IconButton
                  color="yellow"
                  icon={
                    <Icon icon="plus" style={{ backgroundColor: "#282c35" }} />
                  }
                  placement="right"
                >
                  CV EKLE
                </IconButton>
              </Col>
              <Col xs={24} style={{ marginBottom: 100 }}>
                {cvs.map((cv) => (
                  <Panel
                    key={cv.id}
                    style={{ margin: 13 }}
                    header={cv.coverLetter.slice(0, 20) + "..."}
                    collapsible
                    bordered
                  >
                    <Button
                      style={{
                        backgroundColor: "#282c35",
                        color: "white",
                        margin: 5,
                      }}
                    >
                      CV DETAYI
                    </Button>
                    <Link to={`/cv-update/${cv.id}`}>
                      <Button
                        style={{
                          color: "white",
                          margin: 5,
                        }}
                        color={"yellow"}
                      >
                        CV GÜNCELLE
                      </Button>
                    </Link>
                  </Panel>
                ))}
              </Col>
            </Row>
          </Grid>
        </div>
      ) : (
        <div>
          <div style={{ float: "right", marginTop: 10 }}>
            <IconButton
              color="yellow"
              icon={<Icon icon="plus" style={{ backgroundColor: "#282c35" }} />}
              placement="right"
            >
              CV EKLE
            </IconButton>
          </div>
          <div align="center" style={{ marginTop: 10 }}>
            <h6>CV BULUNAMADI!</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobSeekerInformation;
