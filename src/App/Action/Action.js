import { flightDelete, newFlightBooking } from "../ActionType/ActionType"

export const  addFlight = (value)=>{
    return {
        type:newFlightBooking,
        value:value
    }
}
export const  deleteFlight = (value)=>{
    return {
        type:flightDelete,
        value:value
    }
}