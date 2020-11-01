import React from "react";
import { Modal } from "react-bootstrap";
import BasicTextFields from "./card_edit_form";

import { connect } from "react-redux";







class EachCard extends React.Component {

    state = {
        show: false,
        type: "none"
    }

    handleClose = () => {
        this.setState({
            show: false,
            type: "none"
        })
    }

    ViewCard = () => {
        this.setState({
            show: true,
            type: "view"
        })
    }

    Editcard = () => {
        this.setState({
            show: true,
            type: "edit"
        })
    }

    Deletcard = () => {

    }

    render() {

        return (
            <div className="eachcard rounded shadow">
                <div className="cardtitle">
                    {this.props.card.priority === "Low" ? <h6 className="low w-100 p-2 text-center">{this.props.card.Title}</h6> : ""}
                    {this.props.card.priority === "High" ? <h6 className="high w-100 p-2 text-center">{this.props.card.Title}</h6> : ""}
                    {this.props.card.priority === "Medium" ? <h6 className="medium w-100 p-2 text-center">{this.props.card.Title}</h6> : ""}
                </div>

                <div className="cardtoolbutton mt-4">
                    <button className="btn btn-sm mx-4"
                        onClick={() => this.ViewCard()}>
                        <i className="fa fa-eye"></i>
                    </button>
                    <button className="btn btn-sm mx-4"
                        onClick={() => this.Editcard()}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-sm mx-4"
                        onClick={() => this.Deletcard()}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
                <div className="carddis">
                    <p>{this.props.card.Dis}</p>

                </div>
                {/*-----------------------------------------------modal view--------------------------------------------- */}
                {this.state.type === "view" ?
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        {this.props.card.priority === "High" ?
                            <Modal.Header closeButton className="high">
                                <Modal.Title className="text-center">{this.props.card.Title}</Modal.Title>
                            </Modal.Header>
                            : ""
                        }
                        {this.props.card.priority === "Low" ?
                            <Modal.Header closeButton className="low">
                                <Modal.Title className="text-center">{this.props.card.Title}</Modal.Title>
                            </Modal.Header>
                            : ""
                        }
                        {this.props.card.priority === "Medium" ?
                            <Modal.Header closeButton className="medium">
                                <Modal.Title className="text-center">{this.props.card.Title}</Modal.Title>
                            </Modal.Header>
                            : ""
                        }
                        <Modal.Body className="p-5">
                            <h4 className="text-center" style={{ textDecoration: "underline" }}>Discription</h4>
                            <p className="text-center">{this.props.card.Dis}</p>
                            <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
                                <div>
                                    <h6>List:{this.props.card.list}</h6>
                                </div>
                                <div>
                                <h6>Priority:{this.props.card.priority}</h6>
                                </div>
                            </div>

                        </Modal.Body>
                    </Modal>
                    :
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        {this.props.card.priority === "High" ?
                            <Modal.Header closeButton className="high">
                                <Modal.Title className="text-center">Edit card :{this.props.card.Title}</Modal.Title>
                            </Modal.Header>
                            : ""
                        }
                        {this.props.card.priority === "Low" ?
                            <Modal.Header closeButton className="low">
                                <Modal.Title className="text-center">Edit card :{this.props.card.Title}</Modal.Title>
                            </Modal.Header>
                            : ""
                        }
                        {this.props.card.priority === "Medium" ?
                            <Modal.Header closeButton className="medium">
                                <Modal.Title className="text-center">Edit card :{this.props.card.Title}</Modal.Title>
                            </Modal.Header>
                            : ""
                        }
                        <Modal.Body className="p-5">

                            <BasicTextFields title={this.props.card.Title}
                            Dis={this.props.card.Dis}
                            priority={this.props.card.priority}
                            list={this.props.card.list}
                            full_list={this.props.full_list}
                            card_index = {this.props.ind}
                            closemodal={this.handleClose}></BasicTextFields>
                        </Modal.Body>
                    </Modal>
                }

            </div>
        )
    }
}





const mapstatetoprop = (state)=>{
    return{
        full_list:state.lists
    }
}



export default connect(mapstatetoprop)(EachCard)