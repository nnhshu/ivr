import React, { useState } from "react";

// import apexChart
import ReactApexChart from "react-apexcharts";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from 'react-router-dom';



const Statistics = () => {
    // days
    const series = [
        { name: "High - 2018", data: [26, 24, 32, 36, 33, 31, 33] },
        { name: "Low - 2018", data: [14, 11, 16, 12, 17, 13, 12] },
      ]
      const options = {
        chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
        colors: ["#556ee6", "#34c38f"],
        dataLabels: { enabled: !0 },
        stroke: { width: [3, 3], curve: "straight" },
       
        grid: {
          row: { colors: ["transparent", "transparent"], opacity: 0.2 },
          borderColor: "#f1f1f1",
        },
        markers: { style: "inverted", size: 6 },
        xaxis: {
          categories: ["1", "2", "3", "4", "5", "6", "7"],
          title: { text: "Days" },
        },
        yaxis: { title: { text: "Temperature" }, min: 5, max: 40 },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: !0,
          offsetY: -25,
          offsetX: -5,
        },
        responsive: [
          {
            breakpoint: 600,
            options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
          },
        ],
    };

    //scripts

    const series_scripts = [
        {
          name: "Inflation",
          data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3, 2.4, 4.0, 1.2, 3.5, 0.8],
        },
      ]
      const options_scripts = {
        chart: {
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
    
        colors: ["#556ee6"],
        grid: {
          borderColor: "#f1f1f1",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          position: "top",
          labels: {
            offsetY: -18,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
            offsetY: -35,
          },
        },
        fill: {
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100],
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%"
            },
          },
        },
        title: {
          text: "Monthly Inflation in Argentina, 2002",
          floating: true,
          offsetY: 360,
          align: "center",
          style: {
            color: "#444",
          },
        },
      }

    return (
        <React.Fragment>
            <div className="page-content">
                <div className="container-fluid">
                    <Breadcrumbs title="Tables" breadcrumbItem="statistics" />
                    <Row>
                        <Col lg={4}>
                        <Card>
                            <CardBody>
                            <CardTitle className="mb-4">Call by day</CardTitle>
                                <ReactApexChart
                                    options={options}
                                    series={series}
                                    type="line"
                                    height="380"
                                />
                            </CardBody>
                        </Card>
                        </Col>

                        <Col lg={4}>
                            <Card>
                                <CardBody>
                                <CardTitle className="mb-4">Call by scripts</CardTitle>
                                    <ReactApexChart 
                                        options={options_scripts} 
                                        series={series_scripts} 
                                        type="bar" 
                                        height={380} />
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card>
                                <CardBody>
                                <CardTitle className="mb-4">Call by scripts</CardTitle>
                                    <ReactApexChart 
                                        options={options_scripts} 
                                        series={series_scripts} 
                                        type="bar" 
                                        height={380} />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                <CardTitle>Call Details</CardTitle>

                                    <div className="table-rep-plugin">
                                        <div
                                            className="table-responsive mb-0"
                                            data-pattern="priority-columns"
                                        >
                                            <Table
                                                id="tech-companies-1"
                                                className="table table-striped table-bordered"
                                            >
                                                <Thead>
                                                    <Tr>
                                                        <Th>No.</Th>
                                                        <Th>Start</Th>
                                                        <Th>Calling</Th>
                                                        <Th>Called</Th>
                                                        <Th>Peer</Th>
                                                        <Th>Script</Th>
                                                        <Th>Duration</Th>
                                                        <Th>Transferred to</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>1</Td>
                                                        <Td>
                                                            01/01/2021
                                                        </Td>
                                                        <Td>
                                                           0987654312
                                                        </Td>
                                                        <Td>
                                                            1111
                                                        </Td>
                                                        <Td>
                                                            Ha Noi
                                                        </Td>
                                                        <Td>
                                                            Office Open
                                                        </Td>
                                                        <Td>
                                                            03:01:11
                                                        </Td>
                                                        <Td>
                                                            9123
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>1</Td>
                                                        <Td>
                                                            01/01/2021
                                                        </Td>
                                                        <Td>
                                                           0987654312
                                                        </Td>
                                                        <Td>
                                                            1111
                                                        </Td>
                                                        <Td>
                                                            Ha Noi
                                                        </Td>
                                                        <Td>
                                                            Office Open
                                                        </Td>
                                                        <Td>
                                                            03:01:11
                                                        </Td>
                                                        <Td>
                                                            9123
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>1</Td>
                                                        <Td>
                                                            01/01/2021
                                                        </Td>
                                                        <Td>
                                                           0987654312
                                                        </Td>
                                                        <Td>
                                                            1111
                                                        </Td>
                                                        <Td>
                                                            Ha Noi
                                                        </Td>
                                                        <Td>
                                                            Office Open
                                                        </Td>
                                                        <Td>
                                                            03:01:11
                                                        </Td>
                                                        <Td>
                                                            9123
                                                        </Td>
                                                    </Tr>
                                                </Tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Statistics;
