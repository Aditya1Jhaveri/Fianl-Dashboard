import React, { useState, useEffect } from 'react'
import './table.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

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
  const [data,setData]=useState([])
  useEffect(() => {
    
   
    const result = JSON.parse(localStorage.getItem('result'))
    console.log(result)
 
    let DriverMasterID = result.response.driverMasterID;  
    
    console.log(DriverMasterID);
       fetch(
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
      ).then((table)=>{
        table.json().then((resp)=>{
            console.log("data",resp.response)
            setData(resp.response)
           
        })
      })
      
  },[])  
  
  return (
   
    <div>
      
      <Navbar />
      
      <div>
      <button className='refresh'  >
      {/* onClick={(Refresh)} */}  </button>
      Refresh
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

                  <th>Service</th>
                  {/* <th>Driver Fare</th> */}
                  <th>Confirm</th>
                </tr>
              </thead>
              <tbody id="exam">
                {data.map((user,i) => (
                  <>
                    <tr key={i}>
                      <td>{user.jobNo}</td>
                      <td>{user.pickUpDateTime}</td>
                      <td>{user.pickUpPostCode}</td>
                      <td>{user.dropoffPostCode}</td>
                      <td>{user.pickupAddressLine}</td>
                      <td>{user.serviceType}</td>
                      <td>
                        <Button
                          // variant="link"
                          onClick={(event) => handleEpandRow(event, i)}
                        >
                          {expandState[i] ? 'Hide' : 'Show'}
                        </Button>
                      </td>
                    </tr>
                    <>
                      {expandedRows.includes(i) ? (
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
                                  <span>
                                    {' '}
                                    {user.pickupAddressLine}
                                  </span>
                                </li>
                                <br />
                                <li>
                                  <span>
                                    <b>Dropoff Address:</b>
                                  </span>{' '}
                                  <span> {user.dropoffAddressLine} </span>
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
       
      </Row>
      </div>
    </div>
   
  )
}

export default UpcomingRides
