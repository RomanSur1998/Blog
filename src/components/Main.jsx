import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Main = ({ cards }) => {
  console.log(cards);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {cards.map((elem) => (
        <>
          {" "}
          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={elem.image} />
            <Card.Body>
              <Card.Title>{elem.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </>
      ))}
    </div>
  );
};

export default Main;
