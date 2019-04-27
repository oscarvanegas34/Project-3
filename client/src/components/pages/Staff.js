import React, { Component } from 'react';
import Search from "../Cards/Search";
import History from "../Cards/History";
import { Row, Col } from 'reactstrap';



class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  }

componentDidMount() {
  const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
  // console.log(idToken);
  this.setState({
    currentUserEmail: idToken.idToken.claims.email,
    currentUserName: idToken.idToken.claims.name
  });
}

  render() {
    const { currentUserEmail, currentUserName } = this.state;


    return (
      <div>
        <h4>Welcome { currentUserName }</h4>
        <p>Email: { currentUserEmail }</p>
        
        
        {/* <p>You have reached the authorized Client/Staff area of the portal</p> */}
        <Row>
          <Col sm="5">
            <Search />
          </Col>          
          <Col sm="7">
            <History />
          </Col>
        </Row>        
        
      </div>
    )
  }
}

export default Staff;