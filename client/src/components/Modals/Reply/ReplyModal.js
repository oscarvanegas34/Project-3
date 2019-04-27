import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReplyForm from '../Reply/ReplyForm'


class ReplyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };    
  }

  toggle = () => {
    console.log('togglin')
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  } 

  render() {
    return (
      <>
        <Button color="primary" style={{ float: "right"}} onClick={this.toggle}> Reply{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Reply</ModalHeader>
          <ModalBody>
            <ReplyForm onComplete={this.toggle}/>
          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default ReplyModal;