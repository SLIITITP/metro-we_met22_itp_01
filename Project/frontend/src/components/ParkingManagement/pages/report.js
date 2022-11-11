import React from "react";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

class Report extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      reportData: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8070/api/getReport")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.report);
        var count = Object.keys(res.report).length;
        console.log(count);
        if (res.success === true) {
          this.setState({ reportData: res.report });
        }
      })
      .catch((err) => console.log(err));
  }

  // build the last 30 days date array
  // componentTotal() {
  //   var last30days = [];
  //   for (var i = 0; i < 30; i++) {
  //     var day = new Date(year, month, date - i);
  //     day = updatedAt.toISOString().split("T")[0].replace(/-/g, "/");
  //     last30days.push(day);
  //   }
  //   console.log(last30days);
  // }

  render() {
    let { reportData } = this.state;
    return (
      <div
        className="container"
        style={{
          marginTop: "50px",
          marginLeft: "215px",
        }}
      >
        <div>
          <div>
            <br></br>
          </div>
          <Container fluid>
            <Row>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-chart text-warning"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Total parking</p>
                          <Card.Title as="h4"> </Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-light-3 text-success"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Revenue</p>
                          <Card.Title as="h4"> LKR</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-vector text-danger"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">todays parking</p>
                          <Card.Title as="h4"> </Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <div>
            <br></br>
          </div>

          <div>
            <div>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>Parking Zone</th>
                    <th>Parking Space</th>
                    <th>Booking Date Time</th>
                    <th>Release Date Time</th>
                    <th>Vehicle No.</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData &&
                    reportData.map((v, i) => (
                      <tr key={i}>
                        <script>var count = count + 1</script>
                        <td>{v.parking_zone_id}</td>
                        <td>{v.parking_space_id}</td>
                        <td>{v.booking_date_time}</td>
                        <td>{v.release_date_time || "Not Released"}</td>
                        <td>{v.vehicle_no}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Report;
