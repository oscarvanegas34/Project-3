import React from 'react';
import ForwardTicketForm from './ForwardTicketForm';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ForwardTicketModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Forward Ticket History</ModalHeader>
          <ModalBody>
           <ForwardTicketForm/>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ForwardTicketModal;