import React from 'react';
import { Col, Form, Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class CreateTicketForm extends React.Component {
  state = {
    tickets: [],
    ticket_priority: null,
    ticket_classification: null,
    ticket_summary: '',
    ticket_description: '',
    ticket_date: '',
    // ticket_status: null,
    ticket_file: ''
  }
  ticketpriodropdownHandler = e => { this.setState({ ticket_priority: e.target.value }) }
  ticketclassdropdownHandler = e => { this.setState({ ticket_classification: e.target.value }) }
  summaryOnChangeHandler = e => { this.setState({ ticket_summary: e.target.value }) }
  descriptionOnChangeHandler = e => { this.setState({ ticket_description: e.target.value }) }
  dateOnChangeHandler = e => { this.setState({ ticket_date: e.target.value }) }
  ticketFileOnChangeHandler = e => { this.setState({ ticket_file: e.target.value }) }
  // ticketStatusdropdownHandler = e => { this.setState({ ticket_status: e.target.value }) }

  submitHandler = e => {
    e.preventDefault();
    fetch('/tickets/add',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(this.state)
      })
      .then(res => console.log("ticket added to DB"))
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
                <Input onChange={this.dateOnChangeHandler} type="date" name="date" id="date"  />                
              </Col>
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label className="text-info" sm={3}>Priority</Label>
          <Col sm={5}>
            <FormGroup row>
              <Col sm={6}>
                <UncontrolledDropdown>
                  <DropdownToggle color="danger" className="mb-2" caret>   Ticket Priority </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={this.ticketpriodropdownHandler} value="Urgent">Urgent</DropdownItem>
                    <DropdownItem onClick={this.ticketpriodropdownHandler} value="High">High</DropdownItem>
                    <DropdownItem onClick={this.ticketpriodropdownHandler} value="Low">Low</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label className="text-info" sm={3}>Classification</Label>
          <Col sm={5}>
            <FormGroup row>
              <Col sm={6}>
                <UncontrolledDropdown>
                  <DropdownToggle color="danger" className="mb-2" caret>   Ticket Classification </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={this.ticketclassdropdownHandler} value="Defect" >Defect</DropdownItem>
                    <DropdownItem onClick={this.ticketclassdropdownHandler} value="Change Request">Change Request</DropdownItem>
                    <DropdownItem onClick={this.ticketclassdropdownHandler} value="Training Request">Training Request</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </FormGroup>
          </Col>
        </FormGroup>

        {/* <FormGroup row>
          <Label className="text-info" sm={3}>Status</Label>
          <Col sm={5}>
            <FormGroup row>
              <Col sm={6}>
                <UncontrolledDropdown>
                  <DropdownToggle color="danger" className="mb-2" caret>   Ticket Status </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={this.ticketStatusdropdownHandler} value="Open" >Open</DropdownItem>
                    <DropdownItem onClick={this.ticketStatusdropdownHandler} value="Completed">Completed</DropdownItem>
                    <DropdownItem onClick={this.ticketStatusdropdownHandler} value="Cancelled">Cancelled</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </FormGroup>
          </Col>
        </FormGroup> */}

        <FormGroup row>
          <Label for="whats the issue" className="text-info" sm={3}>Summary</Label>
          <Col sm={9}>
            <Input onChange={this.summaryOnChangeHandler} type="text" name="summary" id="examplePassword" placeholder="What is the issue?" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" className="text-info" sm={3}>Description</Label>
          <Col sm={9}>
            <Input onChange={this.descriptionOnChangeHandler} type="textarea" placeholder="Please describe the problem in detail" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" className="text-info" sm={3}>File</Label>
          <Col sm={9}>
            <Input onChange={this.ticketFileOnChangeHandler} type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Please Verify the Information
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 9 }}>
            <Button color="primary" onClick={this.submitHandler} className="mr-2" >Submit</Button>
            {/* <Button color="warning">Cancel</Button>{' '} */}
          </Col>
        </FormGroup>
      </Form>
    );
  }
}