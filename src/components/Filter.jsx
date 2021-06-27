import React, { useState, useEffect } from "react";
import { Nav, Sidenav, Dropdown, Icon, InputNumber } from "rsuite";
import CityService from "../services/citys/CityService";
import JobPositionService from "../services/job-position/JobPositionService";

export default function Filter({listQuantity, setlistQuantity}) {
  const [citys, setCitys] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  
  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();
    cityService.getCitys().then((res) => setCitys(res.data.data));
    jobPositionService
      .getJobPositions()
      .then((res) => setJobPositions(res.data.data));
  }, []);

  return (
    <div style={{ width: 250 }}>
      <Sidenav defaultOpenKeys={["4"]} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item id="filter" icon={<Icon icon="filter" />}>
              Filtreler
            </Nav.Item>

            <Dropdown
              icon={<Icon icon="th-list" />}
              eventKey="4"
              title="İlan Adet"
            >
              <InputNumber
                style={{ float: "left" }}
                step={10}
                value={listQuantity}
                onChange={(value) => setlistQuantity(value)}
              />
            </Dropdown>

            <Dropdown
              eventKey="2"
              title="Şehirler"
              icon={<Icon icon="globe2" />}
            >
              {citys.map((city) => (
                <Dropdown.Item key={city.id} eventKey={'"3-' + city.id + '"'}>
                  {city.cityName}
                </Dropdown.Item>
              ))}
            </Dropdown>

            <Dropdown
              eventKey="3"
              title="Pozisyon"
              icon={<Icon icon="vcard-o" />}
            >
              {jobPositions.map((job) => (
                <Dropdown.Item key={job.id} eventKey={'"3-' + job.id + '"'}>
                  {job.positionName}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
