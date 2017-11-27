import React,{ Component } from 'react';
import CarTile from './searchbars/car_tiles';
import HomePageHeader from './headers/homepage_header';
import { connect } from 'react-redux';
class ShowCars extends Component {

constructor(){
    console.log("its show in constructor");
  super();
}
  render() {
    return (
              <div>
              <div>
              <HomePageHeader/>
              </div>

              <div className = "car-details-body">
                <div className ="car-details-body-left-nav">

                </div>
                <div className ="car-details-body-centre">
                    {this.props.cars.length > 0 ?
                        this.props.cars.map((car) => {
                            return (<div><CarTile data={car} style={{paddingTop: 10}}/></div>);
                        })
                        : ''
                    }
                </div>
                <div className ="car-details-body-right-nav">

                </div>
              </div>

              </div>
           );
  }
}
function mapStateToProps(state) {
    console.log("hiii"+state.cardetails_reducer.cars);
    return {
        cars: state.cardetails_reducer.cars,
    };

}
export default connect(mapStateToProps,null)(ShowCars);
