import React,{ Component } from 'react';
import './../../images/home.css';
import carIcon from './../../images/audi.png';
import userIcon from './../../images/user1.png';
import baggageIcon from './../../images/car_baggage.png';
import cardoorIcon from './../../images/car_door.png';

class ViewCar extends Component {


  render() {
    return (
              <div className="view-car">
                  <div className="view-car-top-div">
                    <h3>You are reserving this rental car with</h3>
                  </div>
                  <hr></hr>
                  <div className="view-car-bottom-div">
                            <div className = "view-car-left-div">
                                <div className ="view-car-cardetails1">
                                    <strong style={{fontSize : 17}}>Economy (Hyundai Accent or similar)</strong><br></br>
                                    Automatic transmission, Air-conditioning<br></br>
                                    Sun, Dec 3 to Wed Dec 6 2017 (3 days)
                                </div>

                                <div className ="view-car-cardetails2" style={{float:"left",width:"100%"}}>
                                    <img src = {userIcon}/> 4 People
                                    <img src = {baggageIcon} style={{padding:10}}/> 1 Bag
                                    <img src = {cardoorIcon} style={{padding:10}}/> 5 Doors
                                </div>

                            </div>

                            <div className = "view-car-right-div">
                              <img src={carIcon}/>
                            </div>
                  </div>
              </div>

           );
  }
}

export default ViewCar;