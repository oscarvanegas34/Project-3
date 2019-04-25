import React from 'react';
import { Col, Form, Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class CreateTicketForm extends React.Component {
  state={
    tickets:[],
    ticketpriority: null,
    ticketclass: null,
    summary: '',
    description: ''
    } 
    ticketpriodropdownHandler = e => {this.setState({ticketpriority:e.target.value})}
    ticketclassdropdownHandler = e => {this.setState({ticketclass:e.target.value})}
    summaryOnChangeHandler = e => {this.setState({summary: e.target.value})}
  
    descriptionOnChangeHandler = e => {this.setState({description: e.target.value})}
  
    submitHandler = () => {
      fetch('/add', this.state)
      .then(res => console.log("ticket added to DB"))
    }
  render() {
    return (
      <Form>

<FormGroup row>
          <Label  className="text-info" sm={2}>Ticket Priority</Label>
          <Col sm={5}>
            <FormGroup row>
          <Col sm={6}>
          <UncontrolledDropdown>
      <DropdownToggle color="danger" className= "mb-2" caret>   Ticket Priority </DropdownToggle>
      <DropdownMenu> 
      <DropdownItem onClick={this.ticketpriodropdownHandler} value="Urgent">Urgent</DropdownItem>
        <DropdownItem onClick={this.ticketpriodropdownHandler} value="High">High</DropdownItem>
        <DropdownItem onClick={this.ticketpriodropdownHandler} value="Low">Low</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>

      
    <UncontrolledDropdown>           
      <DropdownToggle color="info" caret>
        Classification
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem onClick={this.ticketclassdropdownHandler} value="test 1" >test 1</DropdownItem>
        <DropdownItem onClick={this.ticketclassdropdownHandler} value="test 2">test 2</DropdownItem>
        <DropdownItem onClick={this.ticketclassdropdownHandler} value="test 3">test 3</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
          </Col>
        </FormGroup>
          </Col>
        </FormGroup>


        

        <FormGroup row>
          <Label for="whats the issue" className="text-info" sm={2}>Summary</Label>
          <Col sm={10}>
          <Input onChange={this.summaryOnChangeHandler} type="text" name="summary" id="examplePassword" placeholder="What is the issue?" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" className="text-info" sm={2}>Description</Label>
          <Col sm={10}>
          <Input onChange={this.descriptionOnChangeHandler} type="textarea" placeholder="Please describe the problem in detail" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" className="text-info" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
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