import React,{useState} from "react";
import axios from "axios";
import "./CardGrid.css"
import { CardGroup, Row, Col, Card } from "react-bootstrap";

function CardView() {
  const [number, setNumber] = useState("");
  const [viewData, setViewData] = useState("");
  const [postsPerPage]=useState(15);

  const getData = async () => {
    await axios
      .get("http://localhost:8080/getRandomData/" + number)
      .then((res) => {
        setViewData(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => {
        setViewData(err);
      });
  };
  return (
    <div>
      <label>
        Enter the Number:
        <input
          type="number"
          min="1"
          max="15"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          name="number"
        />
      </label>
      <input type="submit" onClick={getData} value="Load" />
      {viewData && (
      <CardGroup>
        <Row>
          <Col sm={6} md={4} lg={3} className="mb-3">
          {viewData.map((data) => (
            <Card className="card">
              <Card.Body>
              <Card.Title><h2>{data.date}</h2></Card.Title>
              <Card.Text>
                <label>{data.description}</label>
              </Card.Text>
              </Card.Body>
            </Card>
                        ))}
          </Col>
        </Row>
      </CardGroup>
      )}
     
    </div>
  );
}

export default CardView;
