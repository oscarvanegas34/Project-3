import React from 'react';
import { Form, FormGroup, Col, Button, Label, Input } from 'reactstrap';

export default class ReplyForm extends React.Component {
  state = {
    ticket_feedback: "",
    feedback_date: "",
    feedback_name: this.props.feedback_name,
    feedback_file: ""    
  }

  componentDidMount() {
    console.log(this.props)
    // this.setState({feedback_name: this.props.curr})
  }
  

  feedbackHandler = e => { this.setState({ ticket_feedback: e.target.value }) }
  feedbackDateHandler = e => { this.setState({ feedback_date: e.target.value }) }
  feedbackFileHandler = e => { this.setState({ feedback_file: e.target.value }) }
  

  submitHandler = e => {
    console.log(this.state)
    e.preventDefault();
    fetch(`/tickets/update/${this.props.currentTicketId}`,
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
      .catch(err => {console.log(err)})
      this.props.onComplete();
      this.props.refresh();


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