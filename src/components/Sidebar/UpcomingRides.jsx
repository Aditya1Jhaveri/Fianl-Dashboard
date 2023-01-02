import React, { useState, useEffect } from 'react'
import './table.css'

// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { data } from './Users'
import Navbar from '../Navigation/Navbar'

const UpcomingRides = () => {
  if (localStorage.getItem('result') === '') {
    window.location.href = '/'
  }

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

  function refreshPage() {
    window.location.reload()
  }
  // const [data,setData]=useState([])
  // useEffect(() => {

  //   const result = JSON.parse(localStorage.getItem('result'))
  //   console.log(result)

  //   let DriverMasterID = result.response.driverMasterID;

  //   console.log(DriverMasterID);
  //      fetch(
  //       'https://driverportalapi.adsdev.uk/1/UpcomingRaids',
  //       {
  //         method: 'post',
  //         // mode: 'cors',
  //         body: JSON.stringify({ DriverMasterID }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Accept: 'application/json',
  //         },
  //       },
  //     ).then((table)=>{
  //       table.json().then((resp)=>{
  //           console.log("data",resp.response)
  //           setData(resp.response)

  //       })
  //     })

  // },[])

  return (
    <div className="wholebody">
      <Navbar />
      <br />
      <Button onClick={refreshPage} style={{ marginLeft: 28 }}>
        Refresh
      </Button>
      {/* <Row> */}

      <Col lg={120}>
        <div style={{ margin: 20 }} className="table-responsive">
          <Table>
            <thead id="example">
              <tr>
                <th>Job id</th>
                <th>Pickup Date&Time</th>
                <th>Pickup Postcode</th>
                <th>Dropoff Postcode</th>
                <th>Pickup Address</th>
                <th>Dropoff Address</th>
                <th>Service</th>
                <th>Confirm</th>
              </tr>
            </thead>
            <tbody id="exam">
              {data.map((user) => (
                <>
                  <tr key={user.id}>
                    <td data-th="Job id">{user['job_id']}</td>
                    <td data-th="Pickup Date&Time">
                      {user['pickup_date_time']}
                    </td>
                    <td data-th="Pickup Postcode">{user['pickup_postcode']}</td>
                    <td data-th="Dropoff Postcode">
                      {user['drpoff_poostcode']}
                    </td>
                    <td data-th="Pickup Address">{user['pickup_address']}</td>
                    <td data-th="Dropoff Address">{user['dropoff_address']}</td>
                    <td data-th="Dropoff Address">{user['service_type']}</td>
                    <td data-th="Job id">
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
                                  <b>Pickup Address:</b>
                                </span>{' '}
                                <span> {user['pickup_address']}</span>
                              </li>
                              <br />
                              <li>
                                <span>
                                  <b>Dropoff Address:</b>
                                </span>{' '}
                                <span> {user['dropoff_address']} </span>
                              </li>

                              {/* <li>
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
                                </li> */}
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
      {/* </Row> */}
    </div>
  )
}

export default UpcomingRides
