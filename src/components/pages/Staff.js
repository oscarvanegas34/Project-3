import React, { Component } from 'react';

class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  }

componentDidMount() {
  const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
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
        <p>You have reached the authorized Client/Staff area of the portal</p>
      </div>
    )
  }
}

export default Staff;