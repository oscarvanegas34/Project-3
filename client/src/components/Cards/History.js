import React from "react"
import {
  Card, CardBody,
  CardTitle, Button, Table
} from 'reactstrap';
import ReplyModal from "../Modals/Reply/ReplyModal";

function History() {

  return (

    <div >
      <Card style={{ marginRight: 0, height: 400 }}>
        <CardBody className="bg-secondary">

          <CardTitle>

            <h3 className="text-white"> History

              <Button color="success" style={{ float: "right", marginLeft: 10 }}>Forward</Button>

              {/* <Button  color="primary" style={{float:"right"}}>Reply</Button> */}
              <ReplyModal />
            </h3>
          </CardTitle>

          <Card style={{ padding: 5 }}>

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