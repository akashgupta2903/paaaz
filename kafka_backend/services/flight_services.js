var  Flights = require('./../models/flights');


exports.searchFlights = function(data, callback){
    Flights.searchFlights(data, function(err, result){
        if(err){
            console.log("[Kafka] Error while searching for ")
        }
        console.log("its result in flight_services for search flights"+result.src_city);
        callback(err, result);

    });
}

exports.addFlight = function(data, callback){
    var flight = new Flights.Flights({
        flight_id:data.flight_id,
        carrier_name:data.carrier_name,
        src_city:data.src_city,
        destination_city:data.destination_city,
        flight_duration:data.flight_duration,
        operational_day:data.operational_day,
        departure_time:data.departure_time,
        price:data.price
    });
    Flights.addNewFlight(flight, function(err, result){
        if(err){
            console.log("[Kafka] Error while adding new flight:",flight.carrier_name);
        }
        callback(err,result);
    });
}

exports.deleteFlight = function(data, callback){
    console.log("delete flight data",data);
    Flights.deleteFlight( data.flight_id , function(err , results){
        if(err){
            console.log("[Kafka] Error deleting car ")
        }
        callback(err,results);
    });
}

exports.editFlight = function(data, callback){
    console.log("edit car data",data);
    if(!data.flight_id){
        callback("Model No missing, failed to edit without model_no",null);
    }else{
        var flightData = {};
        if(data.flight_id)
            flightData.flight_id = data.flight_id;
        if(data.carrier_name)
            flightData.carrier_name = data.carrier_name;
        if(data.src_city)
            flightData.src_city = data.src_city;
        if(data.destination_city)
            flightData.destination_city = data.destination_city;
        if(data.flight_duration)
            flightData.flight_duration = data.flight_duration;
        if(data.src_city)
            flightData.src_city = data.src_city;
        if(data.destination_city)
            flightData.destination_city = data.destination_city;
        if(data.operational_day)
            flightData.operational_day = data.operational_day;
        if(data.departure_time)
            flightData.departure_time = data.departure_time;
        if(data.price)
            flightData.price = data.price;
        Flights.editFlight(data.flight_id, flightData, function(err,result){
            if(err){
                console.log("[Kafka] Error while editing flight detail");
            }
            callback(err, result);
        });
    }

}
