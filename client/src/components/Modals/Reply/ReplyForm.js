import React from 'react';
import { Form, FormGroup, Col, Button, Label, Input } from 'reactstrap';

export default class ReplyForm extends React.Component {
  state = {
    ticket_feedback: ""
  }
  feedbackHandler = e => { this.setState({ ticket_feedback: e.target.value }) }

  submitHandler = e => {
    e.preventDefault();
    fetch('/update/:id',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(this.state)
      })
      .then(res => {
        console.log("ticket added to DB");
        this.props.onComplete();
      })

  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Feedback</Label>
          <Input onChange={this.feedbackHandler} type="textarea" name="feedback" id="feedback" />
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