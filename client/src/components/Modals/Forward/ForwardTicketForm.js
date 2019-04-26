import React from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ForwardTicketForm extends React.Component {

   
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="emailTo" sm={2}>To:</Label>
          <Col sm={10}>
            <Input type="to" name="to" id="emailTo" placeholder="Enter the recipient email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="ccEmailTo" sm={2}>Cc:</Label>
          <Col sm={10}>
            <Input type="cc" name="cc" id="ccEmailTo" placeholder="Enter the recipient Cc email" />
          </Col>
        </FormGroup>        
      </Form>
    );
  }
}