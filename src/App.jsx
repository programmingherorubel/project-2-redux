
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import logo from './assets/lws-logo.svg'
import FormUser from './components/FormUser'
import { deleteFlight } from './App/Action/Action'

function App() {
 const flight = useSelector((state)=> state.flight)
  const dispatch = useDispatch()

  const dispatchHandeler = (id)=>{
    dispatch(deleteFlight(id))
  }

  return (
    <body>
       <header id="header">
    <div class="container">
      <img src={logo} alt="logo" class="logo" />
      <div class="flex items-center">
        <a class="text-white min-w-[50px] font-medium" href="#">Home</a>
        <button class="log-btn btn">Login</button>
      </div>
    </div>
  </header>


  <section>
    {/* <!-- Input Data --> */}
    <div class="mt-[160px] mx-4 md:mt-[160px] relative">
      <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
        <FormUser></FormUser>
      </div>
    </div>

    {/* <!-- Preview Data --> */}
    <div class="table-container">
      <table class="booking-table">
        <thead class="bg-gray-100/50">
          <tr class="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th class="text-center">Journey Date</th>
            <th class="text-center">Guests</th>
            <th class="text-center">Class</th>
            <th class="text-center">Delete</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
          {
            flight.map((item,index)=> <tr key={index} class="lws-bookedTable text-black">
            <td class="px-6 py-4">
              <div class="flex items-center space-x-3">
                <p class="lws-bookedFrom">{item.from}</p>
              </div>
            </td>
            <td class="px-6 py-4">
              <p class="lws-bookedTo">{item.to}</p>
            </td>
            <td class="px-6 py-4 text-center">
              <p class="lws-bookedDate">{item.date}</p>
            </td>
            <td class="px-6 py-4 text-center">
              <p class="lws-bookedGustes">{item.guests}</p>
            </td>
            <td class="px-6 py-4 text-center">
              <span class="lws-bookedClass"> {item.ticketClass} </span>
            </td>
            <td class="px-6 py-4 text-center">
              <div class="flex justify-center gap-4">
                <button class="lws-remove" onClick={()=>dispatchHandeler(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  </section>
    </body>
  )
}

export default App
