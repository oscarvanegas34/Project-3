import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

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
        
          </Form>
        );
      }
    }