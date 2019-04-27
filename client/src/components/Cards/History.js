import React, {Component} from "react"
import { Card, CardBody,  CardTitle, Button, Table} from 'reactstrap';
import ReplyModal from "../Modals/Reply/ReplyModal";




class History extends Component {
  state={
    history: [{name: "Remy", date: "April", priority: "low", class: "software", Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", Feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}]
  }

componentDidMount() {

}

  hello = () => {
    console.log("hello")
  }



  render(){
  return (

    <div >
      <Card style={{ marginRight: 0, height: 605, marginBottom: 300 , overflow: "Auto"}}>
        <CardBody className="bg-secondary">

          <CardTitle>

            <h3 className="text-white"> History

             <a href={`mailto:?subject=Ticket&body=Name%3A%20${this.state.history.map(el => el.name)} %0A%0ADate%3A%20${this.state.history.map(el => el.date)} %0A%0APriority%3A%20${this.state.history.map(el => el.priority)} %0A%0AClassification%3A%20${this.state.history.map(el => el.class)} %0A%0ADescription%3A%20${this.state.history.map(el => el.Description)} %0A%0AFeedback%3A%20${this.state.history.map(el => el.Feedback)}%0A%0A `}> <Button onClick={this.hello} color="success" style={{ float: "right", marginLeft: 10 }}>Forward</Button></a>

              {/* <Button  color="primary" style={{float:"right"}}>Reply</Button> */}
              <ReplyModal />
            </h3>
          </CardTitle>

          <Card style={{ padding: 15, height: 110 }}>

            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Priority</th>
                  <th>Classification</th>
                </tr>
                </thead>

                {/* <tbody>
                {this.props.tickets.map((el, i) => (
                  <tr onClick={() => this.props.currentTicketHandler(i)}>
                    // <td>{el._id}</td>
                    // <td>{el.ticket_summary}</td>
                    <td>{el.ticket_priority}</td>
                    // <td>{el.ticket_classification}</td>
                    </tr>
                ))}

              </tbody> */}

                

                
             
            </Table>


          </Card>
         
          <Card style={{marginTop: 20, height: 212.2, overflow: "auto"}}>

          <Table>
            <thead>

                <tr>
                <th style={{textAlign: "center"}}>
                  Description

                </th>


                </tr>


            </thead>



          </Table>
       
                
               
               
          {this.state.history.map(el => <tr><td>{el.Description}</td>)</tr>)}

         



          </Card>



          <Card style={{marginTop: 20,height: 167, overflow: "auto"}}  >


<Table >
<thead>
      <tr>
        <th style={{textAlign: "center"}}>Feedback</th>
     
      </tr>
      </thead>

      {this.state.history.map(el => <tr><td>{el.Feedback}</td></tr> )}
  </Table>



</Card>




        </CardBody>
      </Card>


    



    </div>
  )
  }
}

export default History;