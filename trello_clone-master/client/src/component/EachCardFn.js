import React from "react";
import { Modal } from "react-bootstrap";
import BasicTextFields from "./card_edit_form";
import { useState } from "react"
import { connect } from "react-redux";
import { useDrag } from "react-dnd";
import ItemTypes from "../utils/items";
import {delete_card} from "../action/card";





const EachCard = (props) => {

    const [show, setshow] = useState(false)
    const [type, settype] = useState("none")

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            card_id:props.card.id,
            card_index:props.index
        },
        collect: monitor =>({
            isDragging : !!monitor.isDragging()
        })
    })


    const handleClose = () => {
        setshow(false)
        settype('none')
    }

    const ViewCard = () => {
        setshow(true)
        settype("view")

    }

    const Editcard = () => {
        setshow(true)
        settype("edit")
    }

    

    return (
        <div className="eachcard rounded shadow"
            ref={drag}
            style = {isDragging?{display:"none"}:{display:"block"}}>
            <div className="cardtitle">
                {props.card.priority === "Low" ? <h6 className="low w-100 p-2 text-center">{props.card.name}</h6> : ""}
                {props.card.priority === "High" ? <h6 className="high w-100 p-2 text-center">{props.card.name}</h6> : ""}
                {props.card.priority === "Medium" ? <h6 className="medium w-100 p-2 text-center">{props.card.name}</h6> : ""}
            </div>

            <div className="cardtoolbutton mt-4">
                <button className="btn btn-sm mx-4"
                    onClick={() => ViewCard()}>
                    <i className="fa fa-eye"></i>
                </button>
                <button className="btn btn-sm mx-4"
                    onClick={() => Editcard()}>
                    <i className="fa fa-pencil"></i>
                </button>
                <button className="btn btn-sm mx-4"
                    onClick={() => props.delete_card(props.card.id,props.index)}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
            <div className="carddis">
                <p>{props.card.discription}</p>

            </div>
            {/*-----------------------------------------------modal view--------------------------------------------- */}
            {type === "view" ?
                <Modal show={show} onHide={handleClose}>
                    {props.card.priority === "High" ?
                        <Modal.Header closeButton className="high">
                            <Modal.Title className="text-center">{props.card.name}</Modal.Title>
                        </Modal.Header>
                        : ""
                    }
                    {props.card.priority === "Low" ?
                        <Modal.Header closeButton className="low">
                            <Modal.Title className="text-center">{props.card.name}</Modal.Title>
                        </Modal.Header>
                        : ""
                    }
                    {props.card.priority === "Medium" ?
                        <Modal.Header closeButton className="medium">
                            <Modal.Title className="text-center">{props.card.name}</Modal.Title>
                        </Modal.Header>
                        : ""
                    }
                    <Modal.Body className="p-2">
                        <h4 className="text-center" style={{ textDecoration: "underline" }}>Discription</h4>
                        <p className="text-center">{props.card.discription}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <div>
                                <h6>List:{props.list.name}</h6>
                            </div>
                            <div>
                                <h6>Priority:{props.card.priority}</h6>
                            </div>
                        </div>

                    </Modal.Body>
                </Modal>
                :
                <Modal show={show} onHide={handleClose}>
                    {props.card.priority === "High" ?
                        <Modal.Header closeButton className="high">
                            <Modal.Title className="text-center">Edit card :{props.card.name}</Modal.Title>
                        </Modal.Header>
                        : ""
                    }
                    {props.card.priority === "Low" ?
                        <Modal.Header closeButton className="low">
                            <Modal.Title className="text-center">Edit card :{props.card.name}</Modal.Title>
                        </Modal.Header>
                        : ""
                    }
                    {props.card.priority === "Medium" ?
                        <Modal.Header closeButton className="medium">
                            <Modal.Title className="text-center">Edit card :{props.card.name}</Modal.Title>
                        </Modal.Header>
                        : ""
                    }
                    <Modal.Body className="p-5">

                        <BasicTextFields title={props.card.name}
                            Dis={props.card.discription}
                            priority={props.card.priority}
                            list={props.list}
                            full_list={props.full_list}
                            card_id={props.card.id}
                            card_index = {props.index}
                            closemodal={handleClose}></BasicTextFields>
                    </Modal.Body>
                </Modal>
            }

        </div>

    )

}



const mapstatetoprop = (state) => {
    return {
        full_list: state.lists
    }
}



export default connect(mapstatetoprop,{delete_card})(EachCard)