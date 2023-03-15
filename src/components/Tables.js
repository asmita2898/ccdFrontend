import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
import "./tables.css";
import { ToastContainer, toast } from 'react-toastify';
import { choicechangefunc } from '../services/Apis';


const Tables = ({ userdata, deleteUser, userGet }) => {

  const handleChange = async (id, choice) => {
    const response = await choicechangefunc(id, choice);
    if (response.status === 200) {
      userGet();
      toast.success("Status Updated")
    }
    else {
      toast.error("Status not Updated")
    }
  }
  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-0">
            <Card className='shadow'>
              <Table className='table_home align-items-center table-responsive table-borderless' responsive="sm">
                <thead className='thead-dark'>
                  <tr className=''>
                    <th>ID</th>
                    <th>FULL NAME</th>
                    <th>EMAIL</th>
                    <th>CATEGORY</th>
                    <th>&nbsp;&nbsp;TYPE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    userdata.length > 0 ? userdata.map((element, index) => {
                      return (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{element.fname + element.lname}</td>
                            <td>{element.email}</td>
                            <td>{element.category == "Coffee" ? "Coffee" : "Brownie" &&
                              element.category == "Brownie" ? "Brownie" : "Custard"}</td>
                            <td className='d-flex align-items-center'>
                              <Dropdown className='text-center'>

                                <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                  <Badge bg={element.choice == "Cold" ? "primary" : "warning"}>{element.choice} &nbsp;
                                    <i class="fa-solid fa-angle-down"></i>
                                  </Badge>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item onClick={() => handleChange(element._id, "Cold")}>Cold</Dropdown.Item>
                                  <Dropdown.Item onClick={() => handleChange(element._id, "Hot")}>Hot</Dropdown.Item>
                                </Dropdown.Menu>

                              </Dropdown>
                            </td>

                            <td>
                              <Dropdown>
                                <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                                  <i class="fa-solid fa-ellipsis-vertical text-white"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item >
                                    <NavLink className="text-decoration-none" to={`/userprofile/${element._id}`}>
                                      <i class="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                                    </NavLink>
                                  </Dropdown.Item>

                                  <Dropdown.Item >
                                    <NavLink className="text-decoration-none" to={`/edit/${element._id}`}>
                                      <i class="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span>
                                    </NavLink>
                                  </Dropdown.Item>

                                  <Dropdown.Item >
                                    <div onClick={() => deleteUser(element._id)}>
                                      <i class="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span>
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        </>
                      )
                    }) : <div className='no_data text-center'>No data found</div>
                  }

                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        <ToastContainer />
      </div>
    </>
  )
}

export default Tables
