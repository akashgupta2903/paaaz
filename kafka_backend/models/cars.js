var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
  model_no:{
    type:String,
    required : true
  },
  capacity:{
    type:Number,
    required : true
  },
  bags:{
    type:Number,
    required : true
  },
  no_of_doors:{
    type:Number,
    required : true
  },
  price:{
    type:Number,
    required : true
  },
  src_city:{
    type:String,
    required : true
  },
  destination_city:{
    type:String,
    required : true
  },
  rental_agency:{
    type:String,
    required : true
  },
  car_type:{
    type:String,
    required : true
  }
});

const Cars = mongoose.model('cars',carSchema);


function addNewCar(cardetail, callback){
    console.log("addNewCar:",cardetail);
    cardetail.save(callback);
}

function searchCars(src_city, destination_city, callback){
  var query = {};
  if(src_city)
    query.src_city = src_city;
  if(destination_city)
    query.destination_city = destination_city;
  console.log("searchCar:",query);
  Cars.find(query, callback);
}


module.exports.addNewCar = addNewCar;
module.exports.searchCars = searchCars;
module.exports.Cars = Users;
