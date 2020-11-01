import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import BasicTextFields from "./card_form";
import EachCard from "./EachCardFn";
import { useDrop } from "react-dnd";
import Itemtypes from "../utils/items";
import { useDispatch } from "react-redux";
import { load_cards, move_card } from "../action/card";

const EachList = (props) => {
  const Dispatch = useDispatch();

  const [isOver, Drop] = useDrop({
    accept: Itemtypes.CARD,
    drop: (item, monitor) => {
      props.move_card(item.card_id, item.card_index, props.list.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  useEffect(() => {
    props.load_cards(props.list.id);
  }, []);

  const [show, setshow] = useState(false);

  const handleClose = () => {
    setshow(false);
  };
  const handleShow = () => {
    setshow(true);
  };

  return (
    <div className="eachlist rounded" ref={Drop}>
      <div className="each_list_head bg-dark text-white rounded">
        <h4>{props.list.name}</h4>
      </div>
      <div className="each_list_cards">
        {props.cards.map((card, ind) =>
          props.list.id === card.list_id ? (
            <EachCard
              card={card}
              key={ind}
              index={ind}
              list={{ name: props.list.name, id: props.list.id }}
            ></EachCard>
          ) : (
            <span></span>
          )
        )}
      </div>
      <div className="add_card_button">
        <button className="btn btn-sm  adcrd " onClick={() => handleShow()}>
          <strong>Add Card</strong>
        </button>
      </div>
      {/*-------------------------------------- modal ---------------------------------------------*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="hedr bg-dark text-white">
          <Modal.Title className="text-center">
            Add Card to {props.list.l_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BasicTextFields
            list_name={props.list.l_name}
            list_id={props.list.id}
            closemodal={handleClose}
          ></BasicTextFields>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const MapStateToProp = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(MapStateToProp, { load_cards, move_card })(EachList);
