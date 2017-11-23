import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addFlightAdmin} from './../../api/adminAPI';

import './../../images/admin.css';

class AddFlightAdmin extends Component {

  constructor(){
    super();
    this.flightdetail ={}
  }


  render() {

    return (
            <div className = "add-flight-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-flight-admin-body">
                  <h2>Add Flight</h2>
                  <hr/>

                  <label>Flight id</label>
                  <input type="text" style={{width:400}} className="form-control" id="flight_id"  placeholder="Enter flight id" size="35" onChange={(flight_id) => {this.flightdetail.flight_id = flight_id.target.value}}/>
                  <br></br>
                  <label>Carrier Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="carrier_name"  placeholder="Enter carrier name" size="35" onChange={(carrier_name) => {this.flightdetail.carrier_name = carrier_name.target.value}}/>
                  <br></br>
                  <label>Source city</label>
                  <input type="text" style={{width:400}} className="form-control" id="src_city"  placeholder="Enter the source city" size="35" onChange={(src_city) => {this.flightdetail.src_city = src_city.target.value}}/>
                  <br></br>
                  <label>Destination city</label>
                  <input type="text" style={{width:400}} className="form-control" id="destination_city"  placeholder="Enter the destination city" size="35" onChange={(destination_city) => {this.flightdetail.destination_city = destination_city.target.value}}/>
                  <br></br>
                  <label>Flight duration</label>
                  <input type="text" style={{width:400}} className="form-control" id="flight_duration"  placeholder="Enter the flight duration" size="35" onChange={(flight_duration) => {this.flightdetail.flight_duration = flight_duration.target.value}}/>
                  <br></br>
                  <label>Operational day</label>
                  <div className="form-group">
                    <select  className="form-control" id="operational_day"  style={{width:400}}
                    onChange={(operational_day) => {this.flightdetail.operational_day = operational_day.target.value}}>
                      <option>Select operational day</option>
                      <option value = {1}>Monday</option>
                      <option value = {2}>Tuesday</option>
                      <option value = {3}>Wednesday</option>
                      <option value = {4}>Thrusday</option>
                      <option value = {5}>Friday</option>
                      <option value = {6}>Saturday</option>
                      <option value = {0}>Sunday</option>
                    </select>
                  </div>
                  <label>Departure time</label>
                  <input type="text" style={{width:400}} className="form-control" id="departure_time"  placeholder="Enter the departure time" size="35" onChange={(departure_time) => {this.flightdetail.departure_time = departure_time.target.value}}/>
                  <br></br>
                  <label>Price</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the base price" size="35" onChange={(price) => {this.flightdetail.price = price.target.value}}/>
                  <br></br>


                  <button type="submit" className="btn btn-primary" style={{width:150}}
                  onClick={() => this.props.addFlightAdmin(this.flightdetail)}>Add</button>


                </div>



            </div>
           );
  }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({addFlightAdmin:addFlightAdmin},dispatch);
}

export default connect(null,mapDispatchToProps)(AddFlightAdmin);
