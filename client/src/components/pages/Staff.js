import React, { Component } from "react";
import Search from "../Cards/Search";
import History from "../Cards/History";
import { Row, Col } from "reactstrap";

class Staff extends Component {


  state = {
    currentUserName: "",
    currentUserEmail: "",
    tickets: [],
    currentTicket: {},
    filterTickets: []    
  };

  filterHandler = (e) => {
    
    let currentFilter = e.target.value;
    if (currentFilter === "Open" || currentFilter === "Completed" || currentFilter === "Cancelled") {
      let filterTickets = this.state.tickets.filter((el) => el.ticket_status === currentFilter);      
      this.setState({filterTickets: filterTickets})
    } 
    if (currentFilter === "Defect" || currentFilter === "Change Request" || currentFilter === "Training Request") {
      let filterTickets = this.state.tickets.filter((el) => el.ticket_classification === currentFilter);      
      this.setState({filterTickets: filterTickets})
    } 
    if (currentFilter === "Urgent" || currentFilter === "High" || currentFilter === "Low") {
      let filterTickets = this.state.tickets.filter((el) => el.ticket_priority === currentFilter);      
      this.setState({filterTickets: filterTickets})
    }   
    if (currentFilter === "Display All") {            
      this.setState({filterTickets: [] })
    }   
  }

  refresh = () => {
      console.log('refreshin...')
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
        })
        
    
  }

  currentTicketHandler = i => {
    this.setState({
      currentTicket: this.state.filterTickets.length > 0 ? this.state.filterTickets[i] : this.state.tickets[i]      
    }, ()=> {
      console.log(this.state.currentTicket)
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
            <Search
              refresh={this.refresh}
              tickets={this.state.filterTickets.length > 0 ? this.state.filterTickets : this.state.tickets}
              currentTicketHandler={this.currentTicketHandler}
              filterHandler={this.filterHandler}/>
          </Col>
          <Col sm="7">
            <History             
              refresh={this.refresh}
              currentTicket={this.state.currentTicket}
              currentUserName={this.state.currentUserName}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Staff;
