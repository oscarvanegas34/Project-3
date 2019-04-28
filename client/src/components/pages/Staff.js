import React, { Component } from "react";
import Search from "../Cards/Search";
import History from "../Cards/History";
import { Row, Col } from "reactstrap";

class Staff extends Component {


  state = {
    currentUserName: "",
    currentUserEmail: "",
    tickets: [],
    currentTicket: {}

    
  };

  currentTicketHandler = i => {
    this.setState({
      currentTicket: this.state.tickets[i]
    });
  }

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));

    fetch("/tickets", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          tickets: res,
          currentUserEmail: idToken.idToken.claims.email,
          currentUserName: idToken.idToken.claims.name
        });
      });
  }

  searchTicketClickHandler() {}

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <h4>Welcome {currentUserName}</h4>
        <p>Email: {currentUserEmail}</p>

        {/* <p>You have reached the authorized Client/Staff area of the portal</p> */}
        <Row>
          <Col sm="5">
            <Search tickets={this.state.tickets} currentTicketHandler={this.currentTicketHandler} />
          </Col>
          <Col sm="7">
            <History currentTicket={this.state.currentTicket} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Staff;
