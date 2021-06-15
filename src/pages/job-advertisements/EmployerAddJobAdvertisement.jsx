import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Whisper,
  Tooltip,
  Input,
  Form,
  ControlLabel,
  FlexboxGrid,
  InputNumber,
  RadioGroup,
  Radio,
  FormGroup,
  Alert,
  DatePicker,
  SelectPicker,
  Button,
} from "rsuite";
import CityService from "../../services/citys/CityService";
import EmployerService from "../../services/employer/EmployerService";
import JobAdvertisementService from "../../services/job-advertisements/JobAdvertisementService";
import JobPositionService from "../../services/job-position/JobPositionService";
export default function EmployerAddJobAdvertisement() {
  const styles = {
    width: 300,
    marginTop: 10,
  };

  const history = useHistory();
  const [employer, setEmployer] = useState([]);
  const [citys, setCitys] = useState([]);
  const [positions, setpositions] = useState([]);
  const [description, setDescription] = useState("");
  const [minimumSalary, setminimumSalary] = useState(0);
  const [maximumSalary, setmaximumSalary] = useState(0);
  const [typeOfWork, settypeOfWork] = useState("");
  const [runtime, setRuntime] = useState("");
  const [deadline, setdeadline] = useState(null);
  const [numberOfOpenPosition, setnumberOfOpenPosition] = useState(0);
  const [city, setcity] = useState(null);
  const [position, setposition] = useState(null);
  const [employerId, setemployerId] = useState(null);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCitys().then((res) => setCitys(res.data.data));
    let positionService = new JobPositionService();
    positionService
      .getJobPositions()
      .then((res) => setpositions(res.data.data));
    let employerService = new EmployerService();
    employerService.getEmployer(localStorage.getItem("userId")).then((res) => {
      setEmployer(res.data.data);
      setemployerId(res.data.data.id);
    });
  }, []);

  function addAdvertisement(
    employerId,
    description,
    minimumSalary,
    maximumSalary,
    typeOfWork,
    runtime,
    deadline,
    numberOfOpenPosition,
    city,
    position
  ) {
    if (typeOfWork === "") {
      Alert.error("Çalışma tipi gerekli!");
      return;
    } else if (runtime === "") {
      Alert.error("Çalışma zamanı gerekli!");
      return;
    } else if (deadline === null) {
      Alert.error("Bitiş tarihi gerekli!");
      return;
    } else if (numberOfOpenPosition === 0) {
      Alert.error("Pozisyon için açılan kişi sayısı gerekli!");
      return;
    } else if (description === "") {
      Alert.error("Açıklama gerekli!");
      return;
    } else if (city === null) {
      Alert.error("Şehir seçimi gerekli!");
      return;
    } else if (position === null) {
      Alert.error("Pozisyon gerekli!");
      return;
    } else {
      let jobAdvertisementService = new JobAdvertisementService();
      jobAdvertisementService
        .add(
          employerId,
          description,
          minimumSalary,
          maximumSalary,
          typeOfWork,
          runtime,
          deadline,
          numberOfOpenPosition,
          city,
          position
        )
        .then((res) => {
          if (res === true) {
            history.push("/");
          }
        });
    }
  }

  return (
    <div className="show-grid">
      <Form>
        <FlexboxGrid style={{ margin: 15 }} justify="center">
          <FlexboxGrid.Item colspan={8}>
            <ControlLabel>Şirket Ad</ControlLabel>
            <Input style={styles} value={employer.companyName || ""} disabled />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
            <ControlLabel>Website</ControlLabel>
            <Input style={styles} value={employer.webSites || ""} disabled />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        {/* description
         */}{" "}
        <FlexboxGrid style={{ margin: 15 }} justify="center">
          <FlexboxGrid.Item colspan={16}>
            <ControlLabel>Açıklama</ControlLabel>
            <Whisper
              trigger="focus"
              speaker={
                <Tooltip>
                  Gerekli<span style={{ color: "red" }}> *</span>
                </Tooltip>
              }
            >
              <Input
                style={{ marginTop: 10, width: 668 }}
                onChange={(value) => setDescription(value)}
                value={description || ""}
                componentClass="textarea"
                rows={3}
                placeholder="iş ile ilgili ön bilgier..."
              />
            </Whisper>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        {/* salarys */}
        <FlexboxGrid style={{ margin: 15 }} justify="center">
          <FlexboxGrid.Item colspan={8}>
            <ControlLabel>Minimum Maaş</ControlLabel>
            <div style={styles}>
              <InputNumber
                value={minimumSalary}
                onChange={(value) => setminimumSalary(value)}
              />
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
            <ControlLabel>Maximum Maaş</ControlLabel>
            <div style={styles}>
              <InputNumber
                value={maximumSalary}
                onChange={(value) => setmaximumSalary(value)}
              />
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        {/* Type of Work */}
        <FlexboxGrid style={{ margin: 15 }} justify="center">
          <FlexboxGrid.Item colspan={8}>
            <ControlLabel>Çalışma Tipi</ControlLabel>
            <FormGroup controlId="radioList">
              <RadioGroup
                value={typeOfWork}
                onChange={(value) => settypeOfWork(value)}
                name="radioList"
                inline
              >
                <Radio value="İşin Yerinde">İşin Yerinde</Radio>
                <Radio value="Uzaktan">Uzaktan</Radio>
              </RadioGroup>
            </FormGroup>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item colspan={8}>
            <ControlLabel>Çalışma Zamanı Tipi</ControlLabel>
            <FormGroup controlId="radioList">
              <RadioGroup
                value={runtime}
                onChange={(value) => setRuntime(value)}
                name="radioList"
                inline
              >
                <Radio value="Yarı Zamanlı">Yarı Zamanlı</Radio>
                <Radio value="Tam Zamanlı">Tam Zamanlı</Radio>
              </RadioGroup>
            </FormGroup>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        {/* Deadline and number of position */}
        <FlexboxGrid style={{ margin: 15 }} justify="center">
          <FlexboxGrid.Item colspan={8}>
            <ControlLabel>Bitiş Tarihi</ControlLabel>
            <div style={styles}>
              <DatePicker
                oneTap
                format="YYYY-MM-DD"
                value={deadline}
                onChange={(value) => setdeadline(value)}
                block
              />
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
            <ControlLabel>Bu Pozisyona Alınacak Kişi Sayısı</ControlLabel>
            <div style={styles}>
              <InputNumber
                value={numberOfOpenPosition}
                onChange={(value) => setnumberOfOpenPosition(value)}
              />
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        {/*  city and job position*/}
        <FlexboxGrid style={{ margin: 15 }} justify="center">
          <FlexboxGrid.Item colspan={8}>
            <ControlLabel>Şehir</ControlLabel>
            <div style={styles}>
              <SelectPicker
                data={citys}
                value={city}
                valueKey={"id"}
                labelKey={"cityName"}
                placeholder={"ŞEHİRLER"}
                onChange={(value) => setcity(value)}
                block
              />
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
            <ControlLabel>Pozisyon</ControlLabel>
            <div style={styles}>
              <SelectPicker
                data={positions}
                value={position}
                valueKey={"id"}
                labelKey={"positionName"}
                placeholder={"POZİSYONLAR"}
                onChange={(value) => setposition(value)}
                block
              />
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid style={{ marginTop: 25 }} justify="center">
          <FlexboxGrid.Item colspan={10}>
            <Button
              onClick={() =>
                addAdvertisement(
                  employerId,
                  description,
                  minimumSalary,
                  maximumSalary,
                  typeOfWork,
                  runtime,
                  deadline,
                  numberOfOpenPosition,
                  city,
                  position
                )
              }
              block
            >
              İLANI OLUŞTUR
            </Button>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Form>
    </div>
  );
}
