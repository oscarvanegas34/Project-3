//History.js

import React from "react"
import { Card, CardText, CardBody,
    CardTitle, Button, Table } from 'reactstrap';
  



function History(){

return (

    <div className="col-7" style={{float:"right"}}>
      <Card  style={{marginRight: 30, height: 400}}>
        <CardBody className="bg-secondary">

        <CardTitle>
            
            <h3 className="text-white"> History 

        <Button  caret color="success" style={{float: "right"}}>Forward</Button> 

        <Button  classNAme="mr-2" caret color="primary" style={{float:"right", marginLeft: 400}}>Reply</Button>
        </h3>
        </CardTitle>

        <Card style={{padding: 5}}>
         
         <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
       
        </Table>
          
        
        </Card>
    </CardBody>
      </Card>
    </div>
)
}

export default History;