import propTypes from "prop-types";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

Cardcomp.propTypes = {
  card: {
    subscription: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    features: {
      userLimit: propTypes.string.isRequired,
      storage: propTypes.string.isRequired,
      publicProjects: propTypes.string.isRequired,
      access: propTypes.string.isRequired,
      privateProjects: propTypes.string.isRequired,
      phoneSupport: propTypes.string.isRequired,
      subdomain: propTypes.string.isRequired,
      statusReports: propTypes.string.isRequired,
    },
  },
};

function Cardcomp({ card }) {
  return (
    <Card className="m-3" style={{ width: "22rem", borderRadius: "1rem" }}>
      <Card.Body>
        <Card.Title
          className={`text-center`}
          style={{ color: "#aeb0b5", fontSize: "medium" }}
        >
          {card.subscription}
        </Card.Title>
        <h1 className="text-center">${card.price}/month</h1>
        <hr></hr>
        <ListGroup type="flush">
          {card.features.map((feature, index) => {
            return (
              <ListGroupItem
                key={index}
                className={`border-0 ${!feature.enable && "disabled"}`}
              >
                {feature.enable ? (
                  <span>
                    <FontAwesomeIcon icon={faCheck} /> {feature.name}
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faXmark} className="disabled" />{" "}
                    {feature.name}
                  </span>
                )}
              </ListGroupItem>
            );
          })}
          <Button
            className={`mt-3 ${card.subscription === "FREE" && "disabled"} ${
              card.subscription === "PLUS" && "disabled"
            }`}
            style={{
              width: "20rem",
              borderRadius: "2rem",
              padding: "0.75rem",
            }}
            variant="primary"
          >
            BUTTON
          </Button>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Cardcomp;
