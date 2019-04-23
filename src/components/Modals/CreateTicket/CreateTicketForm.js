import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class CreateTicketForm extends React.Component {
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
        <DropdownItem>Urgent</DropdownItem>
        <DropdownItem>High</DropdownItem>
        <DropdownItem>Low</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>

      
    <UncontrolledDropdown>           
      <DropdownToggle color="info" caret>
        Classification
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>test 1</DropdownItem>
        <DropdownItem>test 2</DropdownItem>
        <DropdownItem>test 3</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
          </Col>
        </FormGroup>
          </Col>
        </FormGroup>


        

        <FormGroup row>
          <Label for="whats the issue" className="text-info" sm={2}>Summary</Label>
          <Col sm={5}>
            <Input type="text" name="summary" id="examplePassword" placeholder="What is the issue?" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" className="text-info" sm={2}>Description</Label>
          <Col sm={5}>
            <Input type="textarea" placeholder="Please describe the problem in detail" name="text" id="exampleText" />
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
          {/* <Col sm={{ size: 10, offset: 2 }}>
            <Button className= "mr-2" >Submit</Button>
            <Button color="warning">Cancel</Button>{' '}
          </Col> */}
        </FormGroup>
      </Form>
    );
  }
}