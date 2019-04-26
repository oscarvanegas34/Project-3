import React from 'react';
import { Form, FormGroup, Col, Button, Label, Input } from 'reactstrap';

export default class ReplyForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Feedback</Label>
          <Input type="textarea" name="feedback" id="feedback" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 9 }}>
            <Button color="primary" className="mr-2" >Submit</Button>
            {/* <Button color="warning">Cancel</Button>{' '} */}
          </Col>
        </FormGroup>

      </Form>
    );
  }
}