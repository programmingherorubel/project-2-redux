import { createStore } from "redux";
import flightReducer from "./FlightReducer/FlightReducer";

const store = createStore(flightReducer);

export default store;