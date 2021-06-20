import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, Badge } from "rsuite";
import JobAdvertisementService from "../../services/job-advertisements/JobAdvertisementService";

const { Column, HeaderCell, Cell } = Table;

export default function EmployerJobAdvertisements() {
  const [employerJobAdvertisments, setemployerJobAdvertisments] = useState([]);
  const { userItem } = useSelector((state) => state.user);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getEmployerJobAdvertisements(userItem[0].user.id)
      .then((res) => {
        setemployerJobAdvertisments(res.data.data);
      });
  }, []);

  return (
    <div>
      <Table
        height={400}
        data={employerJobAdvertisments}
        onRowClick={(data) => {}}
      >
        <Column width={100} align="center" fixed>
          <HeaderCell>Durum</HeaderCell>
          <Cell>
            {(rowData) => {
              if (rowData.activated) {
                return <Badge style={{ background: "#4caf50" }} />;
              }
              return <Badge style={{ background: "red" }} />;
            }}
          </Cell>
        </Column>

        <Column width={200} align="center">
          <HeaderCell>Açıklama</HeaderCell>
          <Cell dataKey="description" />
        </Column>

        <Column width={200} align="center">
          <HeaderCell>Pozisyon</HeaderCell>
          <Cell>
            {(rowData) => {
              return rowData.jobPosition.positionName;
            }}
          </Cell>
        </Column>

        <Column width={200} align="center">
          <HeaderCell>Şehir</HeaderCell>
          <Cell>
            {(rowData) => {
              return rowData.city.cityName;
            }}
          </Cell>
        </Column>

        <Column width={200} align="center">
          <HeaderCell>Maximum Maaş</HeaderCell>
          <Cell>
            {(rowData) => {
              if (rowData.maximumSalary > 0) {
                return rowData.maximumSalary;
              }
              return "Belirtilmedi";
            }}
          </Cell>
        </Column>

        <Column width={200} align="center">
          <HeaderCell>Minimum Maaş</HeaderCell>
          <Cell>
            {(rowData) => {
              if (rowData.minimumSalary > 0) {
                return rowData.minimumSalary;
              }
              return "Belirtilmedi";
            }}
          </Cell>
        </Column>

        <Column width={150} align="center">
          <HeaderCell>Alınacak Kişi Sayısı</HeaderCell>
          <Cell>
            {(rowData) => {
              return rowData.numberOfOpenPosition;
            }}
          </Cell>
        </Column>

        <Column width={150} align="center">
          <HeaderCell>Çalışma Zamanı Tipi</HeaderCell>
          <Cell>
            {(rowData) => {
              return rowData.runtime;
            }}
          </Cell>
        </Column>

        <Column width={150} align="center">
          <HeaderCell>Çalışma Yeri</HeaderCell>
          <Cell>
            {(rowData) => {
              return rowData.typeOfWork;
            }}
          </Cell>
        </Column>

        <Column width={120} fixed="right">
          <HeaderCell>İşlemler</HeaderCell>

          <Cell>
            {(rowData) => {
              function handleAction() {
                alert(`id:${rowData.id}`);
              }
              return (
                <span>
                  <a onClick={handleAction}> Düzenle </a> |{" "}
                  <a onClick={handleAction}> Sil </a>
                </span>
              );
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  );
}
