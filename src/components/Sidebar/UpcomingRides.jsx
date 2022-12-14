import React, { useState } from 'react'
import './table.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { data } from './Users'

import Navbar from '../Navigation/Navbar'

// import './style.css';

const UpcomingRides = () => {
  const [expandedRows, setExpandedRows] = useState([])

  const [expandState, setExpandState] = useState({})

  const handleEpandRow = (event, userId) => {
    const currentExpandedRows = expandedRows
    const isRowExpanded = currentExpandedRows.includes(userId)

    let obj = {}
    isRowExpanded ? (obj[userId] = false) : (obj[userId] = true)
    setExpandState(obj)

    const newExpandedRows = isRowExpanded
      ? currentExpandedRows.filter((id) => id !== userId)
      : currentExpandedRows.concat(userId)

    setExpandedRows(newExpandedRows)
  }

  return (
    <>
      <header>
      <Navbar />
      </header>
      <Container>
        <Row>
          <Col lg={55}>
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>Job id</th>
                  <th>Pickup Date&Time</th>
                  <th>Pickup Postcode</th>
                  <th>Dropoff Postcode</th>
                  <th>Pickup Address</th>
                  <th>Dropoff Address</th>
                  <th>Service</th>
                  <th>Driver Fare</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <>
                    <tr key={user.id}>
                      <td>{user['job_id']}</td>
                      <td>{user['pickup_date_time']}</td>
                      <td>{user['pickup_postcode']}</td>
                      <td>{user['drpoff_poostcode']}</td>
                      <td>{user['pickup_address']}</td>
                      <td>{user['dropoff_address']}</td>
                      <td>{user['service']}</td>
                      <td>{user['drive_fare']}</td>

                      <td>
                        <Button
                          // variant="link"
                          onClick={(event) => handleEpandRow(event, user.id)}
                          
                        >
                          {expandState[user.id] ? 'Hide' : 'Show'}
                        </Button>
                      </td>
                    </tr>
                    <>
                      {expandedRows.includes(user.id) ? (
                        <tr>
                          <td colspan="6">
                            <div
                              style={{
                                backgroundColor: 'grey',
                                color: 'white',
                                padding: '10px',
                              }}
                            >
                              <h2> Details </h2>
                              <ul>
                                <li>
                                  <span>
                                    <b>Full Name:</b>
                                  </span>{' '}
                                  <span>
                                    {' '}
                                    {user['first_name']} {user['last_name']}{' '}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <b>Company:</b>
                                  </span>{' '}
                                  <span> {user.company} </span>
                                </li>
                                <li>
                                  <span>
                                    <b>Department:</b>
                                  </span>{' '}
                                  <span> {user.department} </span>
                                </li>
                                <li>
                                  <span>
                                    <b>Ip:</b>
                                  </span>{' '}
                                  <span> {user['ip_address']} </span>
                                </li>
                                {/* <li>
                                  <span>
                                    <b>Best Movie:</b>
                                  </span>{' '}
                                  <span> {user.movies} </span>
                                </li> */}
                                <li>
                                  <span>
                                    <b>About:</b>
                                  </span>{' '}
                                  <span> {user.about} </span>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ) : null}
                    </>
                  </>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UpcomingRides
