
export const updateTotalSales = (total_Sales) =>{
  console.log("Action UPDATE_TOTAL_SALES");
  return {type:'UPDATE_TOTAL_SALES',total_Sales:total_Sales}
}

export const updateHotelSalesAnalysis = (sales_analysis) =>{
  console.log("Action UPDATE_HOTEL_ANALYSIS");
  return {
    type:"UPDATE_HOTEL_ANALYSIS",
    hotel_analysis_data:sales_analysis
  }
}

export const updateHotelBillingInformation = (hotel_billing_info) => {
    console.log("Action UPDATE_HOTEL_BILLING_INFO");
    return {
        type: "UPDATE_HOTEL_BILLING_INFO",
        hotel_billing_info: hotel_billing_info
    }
}
export const updateCarSalesAnalysis = (sales_analysis) =>{
    console.log("Action UPDATE_CAR_ANALYSIS");
    return {
      type:"UPDATE_CAR_ANALYSIS",
      car_analysis_data:sales_analysis
    }
}

export const updateFlightSalesAnalysis = (sales_analysis) =>{
    console.log("Action UPDATE_FLIGHT_ANALYSIS");
    return {
      type:"UPDATE_FLIGHT_ANALYSIS",
      flight_analysis_data:sales_analysis
    }
}


export const updateListOfSearchedHotels = (payload) =>{
    console.log("Action UPDATE_LIST_OF_SEARCHED_HOTELS");
    return {
      type:"UPDATE_LIST_OF_SEARCHED_HOTELS",
      payload:payload
    }
}

export const editHotelAdmin = (hotelinfo) =>{
    console.log("Action EDIT_HOTEL_INFO");
    return {
      type:"EDIT_HOTEL_INFO",
      hotelinfo:hotelinfo
    }
}

export const updateListOfSearchedCars = (payload) =>{
    console.log("Action UPDATE_LIST_OF_SEARCHED_CARS");
    return {
      type:"UPDATE_LIST_OF_SEARCHED_CARS",
      payload:payload
    }
}

export const editCarAdmin = (carinfo) =>{
    console.log("Action EDIT_CAR_INFO");
    return {
      type:"EDIT_CAR_INFO",
      carinfo:carinfo
    }
}

export const updateListOfSearchedFlights = (payload) =>{
    console.log("Action UPDATE_LIST_OF_SEARCHED_CARS");
    return {
      type:"UPDATE_LIST_OF_SEARCHED_FLIGHTS",
      payload:payload
    }
}

export const editFlightAdmin = (flightinfo) =>{
    console.log("Action EDIT_FLIGHT_INFO");
    return {
      type:"EDIT_FLIGHT_INFO",
      carinfo:flightinfo
    }
}
