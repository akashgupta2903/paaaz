// Add rest api calls related to admin
import {history} from "../utils/util";
import * as adminActions from './../actions/admin_action';
import * as carActions from './../actions/car_action';
import * as hotelActions from './../actions/hotel_action';
import * as flightActions from './../actions/flight_action';

const server_url = "http://localhost:3010"
const headers = {
    'Accept': 'application/json'
};

export const adminLogin = function(admindetail){
 console.log("userlogin details:",admindetail)
 return (dispatch) => {
   fetch(`${server_url}/admin/adminsignin`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(admindetail)
     }).then(res => {
         if(res.status === 201){
           return res.json();
         }else{
           alert((res.message)?res.message:"Admin does not exist !!!");
         }
    }).then(result=>{
        console.log("result",result," token :",result)
        dispatch(adminActions.updateTotalSales(result.result));
        dispatch(getTotalSales());
        //history.push('/admindashboard');
 }).catch(err => {
         console.log("Error admin login!!!");
         return err;
       });
   };
};


export const getHotelAnalysis = function(data){
 console.log("hotel analysis request data: ",data)
 return (dispatch) => {
   fetch(`${server_url}/analysis/one`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
        console.log("get hotel analysis res:",res.status);
         if(res.status === 201){
           return res.json();
         }else{
           alert((res.message)?res.message:"Admin does not exist !!!");
         }
    }).then(result=>{
        console.log("result.finalResult:",result.result.finalResult);
        dispatch(adminActions.updateHotelSalesAnalysis(result.result.finalResult));
        history.push('/hotelgraphs');
 }).catch(err => {
         console.log("Error while retrieving hotel graph!!!");
         return err;
       });
   };
};


export const addCarAdmin = function(cardetail){
 console.log("add car details:",cardetail)
 return (dispatch) => {
   fetch(`${server_url}/cars/addcar`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(cardetail)
     }).then(res => {
         if(res.status === 201){
           alert(" New car with model:"+cardetail.model_no+" is added successfully !!!");
           history.push('/admindashboard');
         }else{
           alert((res.message)?res.message:"Failed to add new car !!!");
         }
    }).catch(err => {
         console.log("Error while retrieving hotel graph!!!");
         return err;
       });
   };
};

export const addFlightAdmin = function(flightdetail){
 console.log("add flight details:",flightdetail)
 return (dispatch) => {
   fetch(`${server_url}/flights/addflight`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(flightdetail)
     }).then(res => {
         if(res.status === 201){
           alert(" New flight with carrier:"+flightdetail.carrier_name+" is added successfully !!!");
           history.push('/admindashboard');
         }else{
           alert((res.message)?res.message:"Failed to add new flight !!!");
         }
    }).catch(err => {
         console.log("Error while adding new flight!!!");
         return err;
       });
   };
};

export const addHotelAdmin = function(hoteldetail){
 console.log("add hotel details:",hoteldetail)
 return (dispatch) => {
   fetch(`${server_url}/hotels/addhotel`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(hoteldetail)
     }).then(res => {
         if(res.status === 201){
           alert(" New Hotel with id:"+hoteldetail.hotel_id+" is added successfully !!!");
           history.push('/admindashboard');
         }else{
           alert((res.message)?res.message:"Failed to add new Hotel !!!");
         }
    }).catch(err => {
         console.log("Error while adding new Hotel!!!");
         return err;
       });
   };
};

export const getHotelBillingInfo = function(data){
 console.log("getHotelBillingInfo api",data)
 return (dispatch) => {
   fetch(`${server_url}/admin/adminhotelbilling`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
           if(res.status === 201){
               return res.json();
           }else{
               alert((res.message)?res.message:"Failed to get billing information !!!");
           }
     }).then(result =>{
          if(result.result.length >0  ){
            dispatch(adminActions.updateHotelBillingInformation(result.result));
          }else{
            alert("No billing information found for specific date or month");
          }
          history.push('/adminhotelbilling');
    }).catch(err => {
            console.log("Error while retrieving hotel billing information !!!");
            return err;
          });
      };
   };

export const getCarBillingInfo = function(data){
    console.log("getCarBillingInfo api",data)
    return (dispatch) => {
      fetch(`${server_url}/admin/admincarbilling`, {
          method: 'POST',
          credentials:'include',
          mode: 'cors',
          headers: { ...headers,'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(res => {
              if(res.status === 201){
                  return res.json();
              }else{
                  alert((res.message)?res.message:"Failed to get billing information !!!");
              }
        }).then(result =>{
          console.log("result: ",result);
            if(result.result.length >0){
               dispatch(adminActions.updateCarBillingInformation(result.result));
            }else{
              alert("No billing information found for specific date or month");
            }
            history.push('/admincarbilling');
       }).catch(err => {
               console.log("Error while retrieving hotcarel billing information !!!");
               return err;
        });
      };
};

export const getFlightBillingInfo = function(data){
 console.log("getFlightBillingInfo api",data)
 return (dispatch) => {
   fetch(`${server_url}/admin/adminflightbilling`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
           if(res.status === 201){
               return res.json();
           }else{
               alert((res.message)?res.message:"Failed to get billing information !!!");
           }
     }).then(result =>{
       console.log("result: ",result);
         if(result.result.length >0){
            dispatch(adminActions.updateFlightBillingInformation(result.result));
         }else{
           alert("No billing information found for specific date or month");
         }
         history.push('/adminflightbilling');
    }).catch(err => {
            console.log("Error while retrieving flight billing information !!!");
            return err;
     });
   };
};


export const getCarAnalysis = function(data){
 console.log("Car analysis request data: ",data)
 return (dispatch) => {
   fetch(`${server_url}/analysis/caranalysis`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
        console.log("get car analysis res:",res.status);
         if(res.status === 201){
           return res.json();
         }else{
           alert((res.message)?res.message:"Admin does not exist !!!");
         }
    }).then(result=>{
        console.log("result.finalResult:",result.result.finalResult);
        dispatch(adminActions.updateCarSalesAnalysis(result.result.finalResult));
        history.push('/cargraphs');
 }).catch(err => {
         console.log("Error while retrieving car graph!!!");
         return err;
       });
   };
};


export const getFlightAnalysis = function(data){
 console.log("Flight analysis request data: ",data)
 return (dispatch) => {
   fetch(`${server_url}/analysis/flightanalysis`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
        console.log("get flight analysis res:",res.status);
         if(res.status === 201){
           return res.json();
         }else{
           alert((res.message)?res.message:"Admin does not exist !!!");
         }
    }).then(result=>{
        console.log("result.finalResult:",result.result.finalResult);
        dispatch(adminActions.updateFlightSalesAnalysis(result.result.finalResult));
        history.push('/flightgraphs');
 }).catch(err => {
         console.log("Error while retrieving flight graph!!!");
         return err;
       });
   };
};



export const handleHotelSearch = function(data){
 console.log("Admin hotel search request data: ",data)
 return (dispatch) => {
   fetch(`${server_url}/admin/searchhotelsadmin`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
        console.log("get hotel search res:",res.status);
         if(res.status === 201){
           dispatch(hotelActions.updateLastAdminSearch(data));
           return res.json();
         }else{
           alert((res.message)?res.message:"Hotel doesn't exist!!!");
         }
    }).then(result=>{
        console.log("result:",result);
        dispatch(adminActions.updateListOfSearchedHotels(result.result));
 }).catch(err => {
         console.log("Error while retrieving hotels!!!");
         return err;
       });
   };
};


export const handleHotelUpdate = function(hoteldetail){
 console.log("update hotel details:",hoteldetail)
 return (dispatch) => {
   fetch(`${server_url}/admin/updatehoteladmin`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(hoteldetail)
     }).then(res => {
         if(res.status === 201){
           alert(" updated Hotel with id:"+hoteldetail.hotel_id+" successfully !!!");
           history.push('/admindashboard');
         }else{
           alert((res.message)?res.message:"Failed to update new Hotel !!!");
         }
    }).catch(err => {
         console.log("Error while updating new Hotel!!!");
         return err;
       });
   };
};


export const handleCarSearch = function(data){
 console.log("Admin car search request data: ",data)
 return (dispatch) => {
   fetch(`${server_url}/admin/searchcarsadmin`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
        console.log("get car search res:",res.status);
         if(res.status === 201){
           dispatch(carActions.updateLastAdminSearch(data));
           return res.json();
         }else{
           alert((res.message)?res.message:"Car doesn't exist!!!");
         }
    }).then(result=>{
        console.log("result:",result);
        dispatch(adminActions.updateListOfSearchedCars(result.result));
 }).catch(err => {
         console.log("Error while retrieving cars!!!");
         return err;
       });
   };
};

export const adminCarDelete = function(data, last_search){
 console.log("car delete api data: ",data, "last_search: ",last_search);
 return (dispatch) => {
   fetch(`${server_url}/cars/deletecar`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
        console.log("hotel delete response:",res.status);
         if(res.status === 201){
           dispatch(handleCarSearch(last_search));
         }else{
           alert((res.message)?res.message:"Failed to delete car !!!");
         }
    }).catch(err => {
         console.log("Error while deleting car !!!");
         return err;
       });
   };
};

export const adminflightDelete = function(data, last_search){
 console.log("flight delete api data: ",data, "last_search: ",last_search);
 return (dispatch) => {
   fetch(`${server_url}/flights/deleteflight`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
        console.log("flight delete response:",res.status);
         if(res.status === 201){
           dispatch(handleFlightSearch(last_search));
         }else{
           alert((res.message)?res.message:"Failed to delete flight !!!");
         }
    }).catch(err => {
         console.log("Error while deleting flight !!!");
         return err;
       });
   };
};

export const adminHotelDelete = function(data, last_search){
 console.log("hotel delete api data: ",data, "last_search: ",last_search);
 return (dispatch) => {
   fetch(`${server_url}/hotels/deletehotel`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
        console.log("hotel delete response:",res.status);
         if(res.status === 201){
           dispatch(handleHotelSearch(last_search));
         }else{
           alert((res.message)?res.message:"Failed to delete hotel !!!");
         }
    }).catch(err => {
         console.log("Error while deleting hotel !!!");
         return err;
       });
   };
};


export const handleCarUpdate = function(cardetail){
 console.log("update hotel details:",cardetail)
 return (dispatch) => {
   fetch(`${server_url}/admin/updatecaradmin`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(cardetail)
     }).then(res => {
         if(res.status === 201){
           alert(" updated car with id:"+cardetail.model_no+" successfully !!!");
           history.push('/admindashboard');
         }else{
           alert((res.message)?res.message:"Failed to update car !!!");
         }
    }).catch(err => {
         console.log("Error while updating new car!!!");
         return err;
       });
   };
};


export const handleFlightSearch = function(data){
 console.log("Admin flight search request data: ",data)
 return (dispatch) => {
   fetch(`${server_url}/admin/searchflightsadmin`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
        console.log("get flight search res:",res.status);
         if(res.status === 201){
           dispatch(flightActions.updateLastAdminSearch(data));
           return res.json();
         }else{
           alert((res.message)?res.message:"Flight doesn't exist!!!");
         }
    }).then(result=>{
        console.log("result:",result);
        dispatch(adminActions.updateListOfSearchedFlights(result.result));
 }).catch(err => {
         console.log("Error while retrieving cars!!!");
         return err;
       });
   };
};


export const handleFlightUpdate = function(flightdetail){
 console.log("update flight details:",flightdetail)
 return (dispatch) => {
   fetch(`${server_url}/admin/updateflightadmin`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(flightdetail)
     }).then(res => {
         if(res.status === 201){
           alert(" updated flight with id:"+flightdetail.flight_id+" successfully !!!");
           history.push('/admindashboard');
         }else{
           alert((res.message)?res.message:"Failed to update flight !!!");
         }
    }).catch(err => {
         console.log("Error while updating flight!!!");
         return err;
       });
   };
};

export const getTotalSales = function(){
 console.log("getTotalSales ")
 return (dispatch) => {
   fetch(`${server_url}/analysis/admintotalsales`, {
       method: 'GET',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' }
     }).then(res => {
        console.log("get total sales res:",res.status);
         if(res.status === 201){
           return res.json();
         }else{
           alert((res.message)?res.message:"Could not retrieve total sales information!!!");
         }
    }).then(result=>{
        console.log("result:",result.result);
        dispatch(adminActions.updateTotalSalesAnalysis(result.result));
        history.push('/admindashboard');
 }).catch(err => {
         console.log("Error while retrieving total sales graph!!!");
         return err;
       });
   };
};

export const addUserAdmin = function(userdetail){
 console.log("add user details:",userdetail)
 return (dispatch) => {
   fetch(`${server_url}/users/adduser`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(userdetail)
     }).then(res => {
         if(res.status === 201){
           alert(" New user with userid:"+userdetail.email+" is added successfully !!!");
           history.push('/admindashboard');
         }
         else if(res.status === 401){
           alert("user with userid:"+userdetail.email+" already exists!!!");
           history.push('/adduseradmin');
         }else{
           alert((res.message)?res.message:"Failed to add new user !!!");
         }
    }).catch(err => {
         console.log("Error while adding new user!!!");
         return err;
       });
   };
};


export const handleUserSearch = function(data){
 console.log("Admin user search request data: ",data)
 return (dispatch) => {
   fetch(`${server_url}/users/searchuser`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
         if(res.status === 201){
           return res.json();
         }else{
           alert((res.message)?res.message:"User does not exist !!!");
         }
    }).then(result=>{
        console.log("result",result)
        dispatch(adminActions.updateSearchedUser(result.result));
}).catch(err => {
         console.log("Error in finding user!!!");
         return err;
       });
   };
};


export const handleUserUpdate = function(userdetail){
 console.log("update user details:",userdetail)
 return (dispatch) => {
   fetch(`${server_url}/users/updateuserdetails`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(userdetail)
     }).then(res => {
         if(res.status === 201){
           alert(" updated user with id:"+userdetail.email+" successfully !!!");
           history.push('/admindashboard');
         }else{
           alert((res.message)?res.message:"Failed to update user !!!");
         }
    }).catch(err => {
         console.log("Error while updating new user!!!");
         return err;
       });
   };
};
