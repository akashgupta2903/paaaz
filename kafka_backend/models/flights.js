var mongoose = require('mongoose');


var flightSchema = mongoose.Schema({
  flight_id:{
    type:String,
    required:true
  },
  carrier_name:{
    type:String,
    required : true
  },
  src_city :{
    type : String,
    required : true
  },
  destination_city :{
    type : String,
    required : true
  },
  flight_duration : {
    type : Number,
    required : true
  },
  operational_day : {
    type : String,
    required : true
  },
  departure_time : {
    type : String,
    required : true
  },
  // arrival_time can be calculated from departure_time and flight_duration
  /*arrival_time : {
    type : String,
    required : true
  },*/
  price : {
    type  : Number,
    required : true
  }
});

const Flights = mongoose.model('Flights',flightSchema);


function addNewFlight(flightDetail, callback){
  flightDetail.save(callback);
}
function deleteFlight(flight_id, callback){
    Flights.deleteOne({flight_id:flight_id}, callback);
}

function editFlight(flight_id, flightDetail, callback){
  Flights.update({ flight_id: flight_id}, {$set: flightDetail}, callback);
}

function searchFlights(parameter, callback){
  Flights.find(parameter, callback);
}

function searchFlight(parameter, callback){
  Flights.findOne(parameter, callback);
}

function searchFlightsAdmin(flight_id, carrier_name, callback){
  var query = {};
  if(flight_id)
    query.flight_id = flight_id;
  if(carrier_name)
    query.carrier_name = carrier_name;
  console.log("searchFlightAdmin:",query);
  Flights.find(query, callback);
}


function updateFlightAdmin(flightDetail,callback){
  Flights.update({flight_id : flightDetail.flight_id},{$set:{
    carrier_name : flightDetail.carrier_name,
    src_city :flightDetail.src_city,
    destination_city :flightDetail.destination_city,
    flight_duration :flightDetail.flight_duration,
    operational_day :flightDetail.operational_day,
    departure_time :flightDetail.departure_time,
    price :flightDetail.price
  }},callback);
}


module.exports.addNewFlight = addNewFlight;
module.exports.searchFlights = searchFlights;
module.exports.searchFlight = searchFlight;
module.exports.editFlight = editFlight;
module.exports.deleteFlight = deleteFlight;
module.exports.searchFlightsAdmin = searchFlightsAdmin;
module.exports.updateFlightAdmin = updateFlightAdmin;
module.exports.Flights = Flights;
