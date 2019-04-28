//Search.js
import React from "react";
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
      <Card className="bg-info " style={{ height: 605 }}>
        <CardBody>
          <CardTitle>
            {" "}
            <h3>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle className="bg-primary mr-3">
                  Filter
                </DropdownToggle>
                {/* <Button color="success" size="md">Create Ticket</Button>{' '}  */}
                <CreateTicketModal />
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
                  <DropdownItem header>Status</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Open</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Completed</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Cancelled</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>Classification</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Classification 1</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Classification 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Classification 3</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>Urgency</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Urgency 1</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Urgency 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Urgency 3</DropdownItem>
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
                  <tr onClick={() => this.props.currentTicketHandler(i)}>
                    <td>{el._id}</td>
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

