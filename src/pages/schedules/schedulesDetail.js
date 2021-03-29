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
    { id: 1, number: 25, qty: 1500, password: 'adadas' },
    { id: 2, number: 34, qty: 1900, password: 1300 },
    { id: 3, number: 67, qty: 1300, password: 1300 },
    { id: 4, number: 23, qty: 1100, password: 6400 },
    { id: 5, number: 78, qty: 1400, password: 4000 },
];

const columns = [
    {
        dataField: "id",
        text: "No",
    },
    {
        dataField: "number",
        text: "Account number",
    },
    {
        dataField: "qty",
        text: "Account id",
    },
    {
        dataField: "password",
        text: "Account password",
    },
];



const SchedulesDetail = () => {
    const [modal_add, setmodal_standard] = useState(false);
    const [modal_update, setmodal_update] = useState(false);
    const [modal_remove, setmodal_remove] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_add);
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
                                        <CardTitle>Account of peer "Ha Noi"</CardTitle>
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
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    removeModal()
                                                }}
                                                data-toggle="modal"
                                                data-target="#modalRemove"
                                                className="btn btn-sm btn-light waves-effect waves-light"
                                            >
                                                <i className="mdi mdi-trash-can d-block font-size-16"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="table-responsive">
                                        <BootstrapTable
                                            keyField="id"
                                            data={products}
                                            columns={columns}
                                            cellEdit={cellEditFactory({ mode: "click" })}
                                        />
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
                    <div className="form-group">
                        <label
                        htmlFor="example-week-input"
                        className="col-form-label"
                        >
                        Account number
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="example-week-input"
                        />  
                    </div>
                    <div className="form-group">
                        <label
                        htmlFor="example-week-input"
                        className="col-form-label"
                        >
                        Account id
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="example-week-input"
                        />  
                    </div>
                    <div className="form-group">
                        <label
                        htmlFor="example-week-input"
                        className="col-form-label"
                        >
                        Account password
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            id="example-week-input"
                        />  
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
