/* eslint-disable react/prop-types */

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

function Cardcomp(props) {
  const freePackConfig = (
    <>
      <ListGroup>
        <ListGroupItem className="border-0 disabled">
          <FontAwesomeIcon icon={faXmark} className="disabled" />{" "}
          {props.privateProjects}
        </ListGroupItem>
        <ListGroupItem className="border-0 disabled">
          <FontAwesomeIcon icon={faXmark} className="disabled" />{" "}
          {props.phoneSupport}
        </ListGroupItem>
        <ListGroupItem className="border-0 disabled">
          <FontAwesomeIcon icon={faXmark} className="disabled" />{" "}
          {props.subdomain}
        </ListGroupItem>
        <ListGroupItem className="border-0 disabled">
          <FontAwesomeIcon icon={faXmark} className="disabled" />{" "}
          {props.statusReports}
        </ListGroupItem>
      </ListGroup>
      <Button
        className="mt-3 disabled"
        style={{ width: "20rem", borderRadius: "2rem", padding: "0.75rem" }}
        variant="primary"
      >
        BUTTON
      </Button>
    </>
  );

  const plusPackConfig = (
    <>
      <ListGroup>
        <ListGroupItem className="border-0">
          <FontAwesomeIcon icon={faCheck} /> {props.privateProjects}
        </ListGroupItem>
        <ListGroupItem className="border-0">
          <FontAwesomeIcon icon={faCheck} /> {props.phoneSupport}
        </ListGroupItem>
        <ListGroupItem className="border-0">
          <FontAwesomeIcon icon={faCheck} /> {props.subdomain}
        </ListGroupItem>
        <ListGroupItem className="border-0 disabled">
          <FontAwesomeIcon icon={faXmark} className="disabled" />{" "}
          {props.statusReports}
        </ListGroupItem>
      </ListGroup>
      <Button
        className="mt-3 button disabled"
        style={{ width: "20rem", borderRadius: "2rem", padding: "0.75rem" }}
        variant="primary"
      >
        BUTTON
      </Button>
    </>
  );

  const proPackConfig = (
    <>
      <ListGroup>
        <ListGroupItem className="border-0">
          <FontAwesomeIcon icon={faCheck} /> {props.privateProjects}
        </ListGroupItem>
        <ListGroupItem className="border-0">
          <FontAwesomeIcon icon={faCheck} /> {props.phoneSupport}
        </ListGroupItem>
        <ListGroupItem className="border-0">
          <FontAwesomeIcon icon={faCheck} /> {props.subdomain}
        </ListGroupItem>
        <ListGroupItem className="border-0">
          <FontAwesomeIcon icon={faCheck} /> {props.statusReports}
        </ListGroupItem>
      </ListGroup>

      <Button
        className="mt-3"
        style={{
          width: "20rem",
          borderRadius: "2rem",
          padding: "0.75rem",
        }}
        variant="primary"
      >
        BUTTON
      </Button>
    </>
  );

  return (
    <Card className={`m-3`} style={{ width: "22rem", borderRadius: "1rem" }}>
      <Card.Body>
        <Card.Title
          className={`text-center`}
          style={{ color: "#aeb0b5", fontSize: "medium" }}
        >
          {props.subscription}
        </Card.Title>
        <h1 className="text-center">{props.price}</h1>
        <hr></hr>
        <ListGroup type="flush">
          <ListGroupItem className="border-0">
            <FontAwesomeIcon icon={faCheck} /> {props.userLimit}
          </ListGroupItem>
          <ListGroupItem className="border-0">
            <FontAwesomeIcon icon={faCheck} /> {props.storage}
          </ListGroupItem>
          <ListGroupItem className="border-0">
            <FontAwesomeIcon icon={faCheck} /> {props.publicProjects}
          </ListGroupItem>
          <ListGroupItem className="border-0">
            <FontAwesomeIcon icon={faCheck} /> {props.access}
          </ListGroupItem>
          {props.subscription === "FREE" && freePackConfig}
          {props.subscription === "PLUS" && plusPackConfig}
          {props.subscription === "PRO" && proPackConfig}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Cardcomp;
