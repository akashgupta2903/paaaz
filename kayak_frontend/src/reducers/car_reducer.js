var cars=[];
var displaycars=[];
export default function cardetails_reducer(state = {cars:{'name':'pooja'}}, action) {
    switch (action.type) {

        case 'CAR_SUCCESS':
            return {
                ...state,
                cars: action.result
            };
        case 'CAR_FAILURE':
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}