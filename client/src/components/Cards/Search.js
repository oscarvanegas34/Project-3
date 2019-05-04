//Search.js
import React from "react";
import "./Search.css";
import {
  Card,
  CardBody,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
import CreateTicketModal from "../Modals/CreateTicket/CreateTicketModal";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
 

  componentDidMount;

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Card className="bg-info " style={{ height: 605, overflow: "Auto" }}>
        <CardBody>
          <CardTitle>
            {" "}
            <h3>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle className="bg-primary mr-3">
                  Filter
                </DropdownToggle>
                {/* <Button color="success" size="md">Create Ticket</Button>{' '}  */}
                <CreateTicketModal refresh={this.props.refresh}/>
                <DropdownMenu
                  modifiers={{
                    setMaxHeight: {
                      enabled: true,
                      order: 890,
                      fn: data => {
                        return {
                          ...data,
                          styles: {
                            ...data.styles,
                            overflow: "auto",
                            maxHeight: 200
                          }
                        };
                      }
                    }
                  }}
                >
                  
                  
                  <DropdownItem onClick={this.props.filterHandler} value="Display All" >Display All</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>Status</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.filterHandler} value="Open" >Open</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.filterHandler} value="Completed">Completed</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.filterHandler} value="Cancelled">Cancelled</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>Classification</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.filterHandler} value="Defect">Defect</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.filterHandler} value="Change Request">Change Request</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.filterHandler} value="Training Request">Training Request</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>Priority</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.filterHandler} value="Urgent">Urgent</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.filterHandler} value="High">High</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.filterHandler} value="Low">Low</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </h3>
          </CardTitle>

          <Card>
            <Table>
              <thead>
                <tr>
                  <th>Ticket#</th>
                  <th>Summary</th>
                </tr>
              </thead>

              <tbody>
                {this.props.tickets.map((el, i) => (
                  <tr className="cards" key={el._id} onClick={() => this.props.currentTicketHandler(i)}>
                    <td>{el._id.slice(-6)}</td>
                    <td>{el.ticket_summary}</td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </CardBody>
      </Card>
    );
  }
}

