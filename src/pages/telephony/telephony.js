import React, { useState } from "react";

import { Row, Col, Card, CardBody, CardTitle, Button, Modal } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from 'react-router-dom';


const Telephony = () => {
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
                    <Breadcrumbs title="Tables" breadcrumbItem="Telephony" />

                    <Row>
                        <Col>
                        <Card>
                            <CardBody>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <CardTitle>SIS Peers</CardTitle>
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
                                            <Th>Per name</Th>
                                            <Th>Master number</Th>
                                            <Th>Server IP</Th>
                                            <Th>Server port</Th>
                                            <Th>Enable</Th>
                                            <Th>Action</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>1</Td>
                                            <Td>
                                                <Link to="/detail">
                                                    Ha Noi
                                                </Link>
                                            </Td>
                                            <Td>81111</Td>
                                            <Td>192.168.1.1</Td>
                                            <Td>2222</Td>
                                            <Td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                    />
                                                </div>
                                            </Td>
                                            <Td>
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
                                                    data-target="#modalDelete"
                                                    className="btn btn-sm btn-light waves-effect waves-light"
                                                >
                                                    <i className="mdi mdi-trash-can d-block font-size-16"></i>
                                                </button>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>1</Td>
                                            <Td>
                                                <Link to="/detail">
                                                    Ha Noi
                                                </Link>
                                            </Td>
                                            <Td>81111</Td>
                                            <Td>192.168.1.1</Td>
                                            <Td>2222</Td>
                                            <Td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                    />
                                                </div>
                                            </Td>
                                            <Td>
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
                                                    data-target="#modalDelete"
                                                    className="btn btn-sm btn-light waves-effect waves-light"
                                                >
                                                    <i className="mdi mdi-trash-can d-block font-size-16"></i>
                                                </button>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>1</Td>
                                            <Td>
                                                <Link to="/detail">
                                                    Ha Noi
                                                </Link>
                                            </Td>
                                            <Td>81111</Td>
                                            <Td>192.168.1.1</Td>
                                            <Td>2222</Td>
                                            <Td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                    />
                                                </div>
                                            </Td>
                                            <Td>
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
                                                    data-target="#modalDelete"
                                                    className="btn btn-sm btn-light waves-effect waves-light"
                                                >
                                                    <i className="mdi mdi-trash-can d-block font-size-16"></i>
                                                </button>
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
                        Per name
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
                        Master number
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
                        Server IP
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
                        Server port
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
                            Status
                        </label>
                        <div
                            className="custom-control custom-switch custom-switch-lg mb-3"
                            dir="ltr"
                            >
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customSwitchsizelg"
                                defaultChecked
                                onClick={e => {
                                    settoggleSwitch(!toggleSwitch)
                                }}
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customSwitchsizelg"
                            >
                                Enable
                            </label>
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
                    <div className="form-group">
                        <label
                        htmlFor="example-week-input"
                        className="col-form-label"
                        >
                        Per name
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
                        Master number
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
                        Server IP
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
                        Server port
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
                            Status
                        </label>
                        <div
                            className="custom-control custom-switch custom-switch-lg mb-3"
                            dir="ltr"
                            >
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customSwitchsizelg"
                                defaultChecked
                                onClick={e => {
                                    settoggleSwitch(!toggleSwitch)
                                }}
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customSwitchsizelg"
                            >
                                Enable
                            </label>
                        </div>
                    </div>
                    
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    onClick={() => {
                        openModal()
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

export default Telephony;
