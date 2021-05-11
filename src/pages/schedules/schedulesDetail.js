import React, { useState } from "react";

import { Row, Col, Card, CardBody, CardTitle, Button, Modal } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from 'react-router-dom';

const products = [
    { id: 1, weekday: 'Mon', day: 23, month: 10, year: 2020, begin: '10:00:00', end: '15:00:00', description: 'adadas' },
    { id: 1, weekday: 'Mon', day: 23, month: 10, year: 2020, begin: '10:00:00', end: '15:00:00', description: 'adadas' },
    { id: 1, weekday: 'Mon', day: 23, month: 10, year: 2020, begin: '10:00:00', end: '15:00:00', description: 'adadas' },
    { id: 1, weekday: 'Mon', day: 23, month: 10, year: 2020, begin: '10:00:00', end: '15:00:00', description: 'adadas' },
    { id: 1, weekday: 'Mon', day: 23, month: 10, year: 2020, begin: '10:00:00', end: '15:00:00', description: 'adadas' },
    { id: 1, weekday: 'Mon', day: 23, month: 10, year: 2020, begin: '10:00:00', end: '15:00:00', description: 'adadas' },
    { id: 1, weekday: 'Mon', day: 23, month: 10, year: 2020, begin: '10:00:00', end: '15:00:00', description: 'adadas' },
];


const SchedulesDetail = () => {
    const [modal_add, setmodal_standard] = useState(false);
    const [modal_update, setmodal_update] = useState(false);
    const [modal_remove, setmodal_remove] = useState(false);
    const [toggleSwitch, settoggleSwitch] = useState(true);


    function tog_standard() {
        setmodal_standard(!modal_add);
        removeBodyCss();
    }

    function openModal(){
        setmodal_update(!modal_update);
        removeBodyCss();
    }

    function removeModal(){
        setmodal_remove(!modal_remove);
        removeBodyCss();
    }

    function removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <div className="container-fluid">
                    <Breadcrumbs title="Tables" breadcrumbItem="Schedules" />
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <CardTitle>Office Closed Schedule </CardTitle>
                                        <div className="button-items">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    tog_standard()
                                                }}
                                                data-toggle="modal"
                                                data-target="#modalAdd"
                                                className="btn btn-sm btn-success waves-effect waves-light"
                                            >
                                                <i className="mdi mdi-plus d-block font-size-16"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table table-centered table-nowrap mb-0">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>No</th>
                                                    <th>Weekday</th>
                                                    <th>Day</th>
                                                    <th>Month</th>
                                                    <th>Year</th>
                                                    <th>Begin</th>
                                                    <th>End</th>
                                                    <th>Description</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map((products, key) => (
                                                <tr key={"_tr_" + key}>
                                                    <td>
                                                        <Link to="#" className="text-body font-weight-bold">
                                                            {" "}
                                                            {products.id}{" "}
                                                        </Link>{" "}
                                                    </td>
                                                    <td>{products.weekday}</td>
                                                    <td>{products.day}</td>
                                                    <td>{products.month}</td>
                                                    <td>{products.year}</td>
                                                    <td>{products.begin}</td>
                                                    <td>{products.end}</td>
                                                    <td>{products.description}</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                openModal()
                                                            }}
                                                            data-toggle="modal"
                                                            data-target="#modalUpdate"
                                                            className="btn btn-sm btn-primary waves-effect waves-light mr-2"
                                                        >
                                                            <i className="mdi mdi-pencil d-block font-size-16"></i>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                removeModal()
                                                            }}
                                                            data-toggle="modal"
                                                            data-target="#modalUpdate"
                                                            className="btn btn-sm btn-light waves-effect waves-light"
                                                        >
                                                            <i className="mdi mdi-trash-can d-block font-size-16"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* Add */}
            <Modal
                id="modalAdd"
                isOpen={modal_add}
                toggle={() => {
                    tog_standard()
                }}
                className="modal-dialog modal-lg"
            >
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myModalLabel">
                    Modal Heading
                    </h5>
                    <button
                    type="button"
                    onClick={() => {
                        setmodal_standard(false)
                    }}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Weekday
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Day
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Month
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Year
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Begin
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    End
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Description
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    onClick={() => {
                        tog_standard()
                    }}
                    className="btn btn-secondary waves-effect"
                    data-dismiss="modal"
                    >
                        Close
                    </button>
                    <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                    >
                        Save changes
                    </button>
                </div>
            </Modal>

            {/* Update */}
            <Modal
                id="modalUpdate"
                isOpen={modal_update}
                toggle={() => {
                    openModal()
                }}
                className="modal-dialog modal-lg"
            >
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myModalLabel">
                        Modal Heading
                    </h5>
                    <button
                    type="button"
                    onClick={() => {
                        setmodal_update(false)
                    }}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Weekday
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Day
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Month
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Year
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Begin
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    End
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label
                                htmlFor="example-week-input"
                                className="col-form-label"
                                >
                                    Description
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="example-week-input"
                                />  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    onClick={() => {
                        setmodal_update(false)
                    }}
                    className="btn btn-secondary waves-effect"
                    data-dismiss="modal"
                    >
                        Close
                    </button>
                    <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                    >
                        Save changes
                    </button>
                </div>
            </Modal>

            {/* Delete */}
            <Modal
                id="modalRemove"
                isOpen={modal_remove}
                toggle={() => {
                    removeModal()
                }}
            >
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myModalLabel">
                    Modal Heading
                    </h5>
                    <button
                    type="button"
                    onClick={() => {
                        setmodal_remove(false)
                    }}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    onClick={() => {
                        removeModal()
                    }}
                    className="btn btn-secondary waves-effect"
                    data-dismiss="modal"
                    >
                    Close
                    </button>
                    <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                    >
                    Save changes
                    </button>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default SchedulesDetail;
