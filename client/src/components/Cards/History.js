import React, {Component} from "react"
import { Card, CardBody,  CardTitle, Button, Table} from 'reactstrap';
import ReplyModal from "../Modals/Reply/ReplyModal";


class History extends Component {
 
      render(){
          return (

            <div >
              <Card style={{ marginRight: 0, height: 605, marginBottom: 300 , overflow: "Auto"}}>
                <CardBody className="bg-secondary">

                  <CardTitle>

                    <h3 className="text-white"> History  
                    <a href={`mailto:?subject=Ticket # ${this.props.currentTicket._id} 
                      %0A%0ASummary%3A%20${this.props.currentTicket.ticket_priority}
                      %0A%0AClassification%3A%20${this.props.currentTicket.ticket_classification}
                      %0A%0ASummary%3A%20${this.props.currentTicket.ticket_summary} 
                      %0A%0ADescription%3A%20${this.props.currentTicket.ticket_description}
                      %0A%0AFeedback%3A%20${this.props.currentTicket.ticket_feedback}`}>
                      <Button onClick={this.hello} color="success" style={{ float: "right", marginLeft: 10 }}>Forward</Button></a>           
                      <ReplyModal />
                    </h3>
                  </CardTitle>

                  <Card style={{ padding: 15, height: 110 }}>
                    <Table>
                      <thead>
                        <tr>                          
                          <th>Date</th>
                          <th>Priority</th>
                          <th>Classification</th>
                        </tr>
                      </thead> 
                      <tbody>
                        <tr>                          
                          <td></td>
                          <td>{this.props.currentTicket.ticket_priority}</td>
                          <td>{this.props.currentTicket.ticket_classification}</td>
                        </tr>
                        
                      </tbody>           
                    </Table>
                  </Card>
                
                  <Card style={{marginTop: 20, height: 212.2, overflow: "auto"}}>
                    <Table>
                      <thead>
                          <tr>
                            <th style={{textAlign: "center"}}>Description</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{this.props.currentTicket.ticket_description}</td>
                        </tr>
                      </tbody>
                    </Table> 
                  </Card>

                  <Card style={{marginTop: 20,height: 167, overflow: "auto"}}>
                    <Table >
                      <thead>
                          <tr>
                            <th style={{textAlign: "center"}}>Feedback</th>                  
                          </tr>
                      </thead>                 
                    </Table>
                  </Card>

                </CardBody>
              </Card>
            </div>
            
          )
      }
}

export default History;