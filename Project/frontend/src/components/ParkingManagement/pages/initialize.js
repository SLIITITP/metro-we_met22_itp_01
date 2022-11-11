import React from "react";
import { Row, Button, Card } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Initialize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zone: [],
    };
  }
  componentDidMount() {
    localStorage.getItem("loggedinUser");
    fetch("http://localhost:8070/api/getZone")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        this.setState({ zone: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  createZone() {
    fetch("http://localhost:8070/api/createZone")
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          let zoneState = this.state.zone;
          zoneState.push(res.data);
          this.setState({ zone: zoneState });
        }
      });
  }
  deleteZone() {
    fetch("http://localhost:8070/api/deleteZone")
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          let zoneState = this.state.zone;
          zoneState.pop();
          this.setState({ zone: zoneState });
        }
      });
  }
  render() {
    let { zone } = this.state;
    return (
      <div
        className="container"
        style={{
          marginTop: "50px",
          marginLeft: "215px",
        }}
      >
        <div>
          Create new parking zones
          <div class="jumbotron">
            <Row>
              <Col>
                {zone && zone.length <= 25 ? (
                  <Button
                    className="mlr-10"
                    variant="outline-primary"
                    onClick={this.createZone.bind(this)}
                  >
                    Create Parking Zone
                  </Button>
                ) : null}
                {zone && zone.length > 1 ? (
                  <Button
                    className="mlr-10"
                    variant="outline-danger"
                    onClick={this.deleteZone.bind(this)}
                  >
                    Delete Parking Zone
                  </Button>
                ) : null}
              </Col>
              <Col></Col>
            </Row>
            <div className="parking-space-list">
              {zone &&
                zone.map((v, i, a) => (
                  <Card key={i} className="parking-item available">
                    <Card.Body>
                      <Card.Text>{v.parking_zone_id}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Initialize;
