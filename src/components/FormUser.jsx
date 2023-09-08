import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addFlight } from '../App/Action/Action';
import { uid } from 'uid';

const FormUser = () => {
    const flight = useSelector((state)=> state.flight)
        const dispatch = useDispatch();
    
        const { register, handleSubmit } = useForm();
        const onSubmit = (data) => {
            const info = {
                ...data,
                id:uid()
            }
            dispatch(addFlight(info));
        };
    
        // ... Rest of your component code ...

    return (
        <form className="first-hero lws-inputform" onSubmit={handleSubmit(onSubmit)}>
            {/* Destination From */}
            <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                    <img src="./img/icons/Frame.svg" alt="" />
                    <select {...register("from", { required: true })} className="outline-none px-2 py-2 w-full" id="lws-from" required>
                        <option value="" hidden>Please Select</option>
                        <option>Dhaka</option>
                        <option>Sylhet</option>
                        <option>Saidpur</option>
                        <option>Cox's Bazar</option>
                    </select>
                </div>
            </div>

            {/* Destination To */}
            <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                    <img src="./img/icons/Frame.svg" alt="" />
                    <select {...register("to", { required: true })} className="outline-none px-2 py-2 w-full" id="lws-to" required>
                        <option value="" hidden>Please Select</option>
                        <option>Dhaka</option>
                        <option>Sylhet</option>
                        <option>Saidpur</option>
                        <option>Cox's Bazar</option>
                    </select>
                </div>
            </div>

            {/* Journey Date */}
            <div className="des-from">
                <p>Journey Date</p>
                <input {...register("date", { required: true })} type="date" className="outline-none px-2 py-2 w-full date" id="lws-date" required />
            </div>

            {/* Guests */}
            <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                    <img src="./img/icons/Vector (1).svg" alt="" />
                    <select {...register("guests", { required: true })} className="outline-none px-2 py-2 w-full" id="lws-guests" required>
                        <option value="" hidden>Please Select</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                    </select>
                </div>
            </div>

            {/* Class */}
            <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                    <img src="./img/icons/Vector (3).svg" alt="" />
                    <select {...register("ticketClass", { required: true })} className="outline-none px-2 py-2 w-full" id="lws-ticketClass" required>
                        <option value="" hidden>Please Select</option>
                        <option>Business</option>
                        <option>Economy</option>
                    </select>
                </div>
            </div>

            <button className="addCity" type="submit" id="lws-addCity" disabled={flight.length === 3}>
                <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span className="text-sm">Book</span>
            </button>
        </form>
    );
};

export default FormUser;
