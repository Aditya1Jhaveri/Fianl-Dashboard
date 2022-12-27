import React, { useState, useEffect } from 'react'
import './table.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { data } from './Users'

import Navbar from '../Navigation/Navbar'

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
  const result = JSON.parse(localStorage.getItem('result'))
  console.log(result)

  useEffect(() => {
    {
      table()
    }
  }, [])
  async function table() {
    let DriverMasterID = result.response.driverMasterID
    console.log(DriverMasterID)

    let table = await fetch(
      'https://driverportalapi.adsdev.uk/1/UpcomingRaids',
      {
        method: 'post',
        // mode: 'cors',
        body: JSON.stringify({ DriverMasterID }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
    table = await table.json()
    console.log(table)
    if (table.response) {
      localStorage.setItem('table', JSON.stringify(table))
    }
  }

  return (
    <div>
      <Navbar />

      <Row>
        <Col lg={150}>
          <div style={{ margin: 50 }} className="table-responsive">
            <Table className="table table-bordered">
              <thead id="example">
                <tr>
                  <th>Job id</th>
                  <th>Pickup Date&Time</th>
                  <th>Pickup Postcode</th>
                  <th>Dropoff Postcode</th>
                  <th>Pickup Address</th>
                  <th>Dropoff Address</th>
                  <th>Service</th>
                  <th>Driver Fare</th>
                  <th>Confirm</th>
                </tr>
              </thead>
              <tbody id="exam">
                {data.map((user) => (
                  <>
                    <tr key={user.id}>
                      <td>{user['job_id']}</td>
                      <td>{user['pickup_date_time']}</td>
                      <td>{user['pickup_postcode']}</td>
                      <td>{user['drpoff_poostcode']}</td>
                      <td>{user['pickup_address']}</td>
                      <td>{user['dropoff_address']}</td>
                      <td>{user['service_type']}</td>
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
                          <td colspan="10">
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
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UpcomingRides
