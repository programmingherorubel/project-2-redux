import { flightDelete, newFlightBooking } from "../ActionType/ActionType";


const initialState = {
    flight: []
}

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case newFlightBooking: // Corrected action type comparison
            return {
                ...state,
                flight: [...state.flight, action.value]
            };
            case flightDelete:
                return {
                    ...state,
                    flight: state.flight.filter((item) => item.id !== action.value)
                };
        default:
            return state;
    }
}

export default flightReducer;
