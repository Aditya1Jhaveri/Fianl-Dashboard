import React from 'react'
import { Table } from 'react-bootstrap'
import './style.css'
import Navbar from '../Navigation/Navbar'

const UpcomingRides = () => {
  const data = [
    {
      job_id: 'AHD123',
      Pickup_date_time: '29-08-22 10:00',
      Pickup_postcode: 'TWJ35NJ',
      Dropoff_postcode: 'ASF35NJ',
      Pickup_address: 'Nirman Bhavan,Sector 10, Gandhinagar',
      Dropoff_address: 'Secor-22,gandhinagar',
      Service: 'Private',
      Driver_fare: '£100',
    },
    {
      job_id: 'ABD123',
      Pickup_date_time: '29-08-22 12:00',
      Pickup_postcode: 'AVDF75F',
      Dropoff_postcode: 'AFG35NJ',
      Pickup_address: 'Incomtax office',
      Dropoff_address: 'Airport,gandhinagar',
      Service: 'Private',
      Driver_fare: '',
    },
    {
      job_id: 'ADT864',
      Pickup_date_time: '29-08-22 04:00',
      Pickup_postcode: 'TQRF34X',
      Dropoff_postcode: 'DFG35NJ',
      Pickup_address: 'Railway Statiaon, Gandhinagar',
      Dropoff_address: 'Secor-22,gandhinagar',
      Service: 'Private',
      Driver_fare: '80.00$',
    },
    {
      job_id: 'WQZ765',
      Pickup_date_time: '30-08-22 10:00',
      Pickup_postcode: 'SDGFSG3',
      Dropoff_postcode: 'ASS35NJ',
      Pickup_address: 'Mahatama madir, Gandhinagar',
      Dropoff_address: 'Airport,gandhinagar',
      Service: 'Private',
      Driver_fare: '60.00$',
    },
    {
      job_id: 'AHD123',
      Pickup_date_time: '29-08-22 10:00',
      Pickup_postcode: 'TWJ35NJ',
      Dropoff_postcode: 'ASF35NJ',
      Pickup_address: 'Nirman Bhavan,Sector 10, Gandhinagar',
      Dropoff_address: 'Secor-22,gandhinagar',
      Service: 'Private',
      Driver_fare: '£100',
    },
    {
      job_id: 'ABD123',
      Pickup_date_time: '29-08-22 12:00',
      Pickup_postcode: 'AVDF75F',
      Dropoff_postcode: 'AFG35NJ',
      Pickup_address: 'Incomtax office',
      Dropoff_address: 'Airport,gandhinagar',
      Service: 'Private',
      Driver_fare: '',
    },
    {
      job_id: 'ADT864',
      Pickup_date_time: '29-08-22 04:00',
      Pickup_postcode: 'TQRF34X',
      Dropoff_postcode: 'DFG35NJ',
      Pickup_address: 'Railway Statiaon, Gandhinagar',
      Dropoff_address: 'Secor-22,gandhinagar',
      Service: 'Private',
      Driver_fare: '80.00$',
    },
    {
      job_id: 'WQZ765',
      Pickup_date_time: '30-08-22 10:00',
      Pickup_postcode: 'SDGFSG3',
      Dropoff_postcode: 'ASS35NJ',
      Pickup_address: 'Mahatama madir, Gandhinagar',
      Dropoff_address: 'Airport,gandhinagar',
      Service: 'Private',
      Driver_fare: '60.00$',
    },
    {
      job_id: 'AHD123',
      Pickup_date_time: '29-08-22 10:00',
      Pickup_postcode: 'TWJ35NJ',
      Dropoff_postcode: 'ASF35NJ',
      Pickup_address: 'Nirman Bhavan,Sector 10, Gandhinagar',
      Dropoff_address: 'Secor-22,gandhinagar',
      Service: 'Private',
      Driver_fare: '£100',
    },
    {
      job_id: 'ABD123',
      Pickup_date_time: '29-08-22 12:00',
      Pickup_postcode: 'AVDF75F',
      Dropoff_postcode: 'AFG35NJ',
      Pickup_address: 'Incomtax office',
      Dropoff_address: 'Airport,gandhinagar',
      Service: 'Private',
      Driver_fare: '',
    },
    {
      job_id: 'ADT864',
      Pickup_date_time: '29-08-22 04:00',
      Pickup_postcode: 'TQRF34X',
      Dropoff_postcode: 'DFG35NJ',
      Pickup_address: 'Railway Statiaon, Gandhinagar',
      Dropoff_address: 'Secor-22,gandhinagar',
      Service: 'Private',
      Driver_fare: '80.00$',
    },
    {
      job_id: 'WQZ765',
      Pickup_date_time: '30-08-22 10:00',
      Pickup_postcode: 'SDGFSG3',
      Dropoff_postcode: 'ASS35NJ',
      Pickup_address: 'Mahatama madir, Gandhinagar',
      Dropoff_address: 'Airport,gandhinagar',
      Service: 'Private',
      Driver_fare: '60.00$',
    },
    {
      job_id: 'AHD123',
      Pickup_date_time: '29-08-22 10:00',
      Pickup_postcode: 'TWJ35NJ',
      Dropoff_postcode: 'ASF35NJ',
      Pickup_address: 'Nirman Bhavan,Sector 10, Gandhinagar',
      Dropoff_address: 'Secor-22,gandhinagar',
      Service: 'Private',
      Driver_fare: '£100',
    },
    {
      job_id: 'ABD123',
      Pickup_date_time: '29-08-22 12:00',
      Pickup_postcode: 'AVDF75F',
      Dropoff_postcode: 'AFG35NJ',
      Pickup_address: 'Incomtax office',
      Dropoff_address: 'Airport,gandhinagar',
      Service: 'Private',
      Driver_fare: '',
    },
    {
      job_id: 'ADT864',
      Pickup_date_time: '29-08-22 04:00',
      Pickup_postcode: 'TQRF34X',
      Dropoff_postcode: 'DFG35NJ',
      Pickup_address: 'Railway Statiaon, Gandhinagar',
      Dropoff_address: 'Secor-22,gandhinagar',
      Service: 'Private',
      Driver_fare: '80.00$',
    },
    {
      job_id: 'WQZ765',
      Pickup_date_time: '30-08-22 10:00',
      Pickup_postcode: 'SDGFSG3',
      Dropoff_postcode: 'ASS35NJ',
      Pickup_address: 'Mahatama madir, Gandhinagar',
      Dropoff_address: 'Airport,gandhinagar',
      Service: 'Private',
      Driver_fare: '60.00$',
    },
    {
      job_id: 'AHD123',
      Pickup_date_time: '29-08-22 10:00',
      Pickup_postcode: 'TWJ35NJ',
      Dropoff_postcode: 'ASF35NJ',
      Pickup_address: 'Nirman Bhavan,Sector 10, Gandhinagar',
      Dropoff_address: 'Secor-22,gandhinagar',
      Service: 'Private',
      Driver_fare: '£100',
    },
    {
      job_id: 'ABD123',
      Pickup_date_time: '29-08-22 12:00',
      Pickup_postcode: 'AVDF75F',
      Dropoff_postcode: 'AFG35NJ',
      Pickup_address: 'Incomtax office',
      Dropoff_address: 'Airport,gandhinagar',
      Service: 'Private',
      Driver_fare: '',
    },
    {
      job_id: 'ADT864',
      Pickup_date_time: '29-08-22 04:00',
      Pickup_postcode: 'TQRF34X',
      Dropoff_postcode: 'DFG35NJ',
      Pickup_address: 'Railway Statiaon, Gandhinagar',
      Dropoff_address: 'Secor-22,gandhinagar',
      Service: 'Private',
      Driver_fare: '80.00$',
    },
    {
      job_id: 'WQZ765',
      Pickup_date_time: '30-08-22 10:00',
      Pickup_postcode: 'SDGFSG3',
      Dropoff_postcode: 'ASS35NJ',
      Pickup_address: 'Mahatama madir, Gandhinagar',
      Dropoff_address: 'Airport,gandhinagar',
      Service: 'Private',
      Driver_fare: '60.00$',
    },
  ]
  return (
    <div>
      <Navbar />
      <div className="dash">
        <Table>
          <thead>
            <tr className="tab">
              <th>Job#</th>
              <th>Pickup Date&Time</th>
              <th>Pickup Postcode</th>
              <th>Dropoff Postcode</th>
              <th>Pickup Address</th>
              <th>Dropoff Address</th>
              <th>Service</th>
              <th>Driver Fare</th>
              <th>Aproved</th>
            </tr>
          </thead>
          <tbody className="tab down">
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.job_id}</td>
                <td>{item.Pickup_date_time}</td>
                <td>{item.Pickup_postcode}</td>
                <td>{item.Dropoff_postcode}</td>
                <td>{item.Pickup_address}</td>
                <td>{item.Dropoff_address}</td>
                <td>{item.Service}</td>
                <td>{item.Driver_fare}</td>
                <td>
                  <button class="btn">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default UpcomingRides
