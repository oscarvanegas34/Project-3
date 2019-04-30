import React from 'react';
import { Form, FormGroup, Col, Button, Label, Input } from 'reactstrap';

export default class ReplyForm extends React.Component {
  state = {
    ticket_feedback: "",
    feedback_date: "",
    currentUserName: ""
  }

  // var idToken = JSON.parse(localStorage.getItem("okta-token-storage"));

  feedbackHandler = e => { this.setState({ ticket_feedback: e.target.value }) }
  feedbackDateHandler = e => { this.setState({ feedback_date: e.target.value }) }
  // currentUserNameHandler = e => { this.setState({ currentUserName: e.idToken.idToken.claims.name }) }

  submitHandler = e => {
    e.preventDefault();
    fetch('/tickets/update/:id',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(this.state)
      })
      .then(res => {
        console.log("feedback added to the ticket in the DB");
        this.props.onComplete();
      })

  }

  render() {
    return (
      <Form>

        <FormGroup row>
          <Label className="text-info" sm={3}>Date</Label>
          <Col sm={5}>
            <FormGroup row>
              <Col sm={12}>                
                <Input onChange={this.feedbackDateHandler} type="date" name="date" id="date"  />                
              </Col>
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label className="text-info" sm={3}>Feedback</Label>
          <Col >
            <FormGroup row>
              <Col sm={12}>
                <Input onChange={this.feedbackHandler} type="textarea" name="feedback" id="feedback" />
              </Col>
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup> 
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 9 }}>
            <Button color="primary" className="mr-2" onClick={this.submitHandler}>Submit</Button>
            {/* <Button color="warning">Cancel</Button>{' '} */}
          </Col>
        </FormGroup>

      </Form>
    );
  }
}