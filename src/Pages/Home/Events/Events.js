import React, { useRef } from 'react';
import './Event.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Events = () => {
      const titleRef = useRef('')
      const desRef = useRef('')
      const dateRef = useRef('')
      const urlRef = useRef('')
      const navigate = useNavigate()

      const uplodeEvent = (event) => {
            event.preventDefault()
            const title = titleRef.current.value
            const descrption = desRef.current.value
            const date = dateRef.current.value
            const url = urlRef.current.value
            console.log(title, descrption, date, url);
            fetch('http://localhost:5000/booking', {
                  method: 'POST',
                  body: JSON.stringify({
                       title , descrption , date , url
                  }),
                  headers: {
                        'Content-type': 'application/json',
                  },
            })
                  .then((response) => response.json())
                  .then((json) => {
                        toast(json.success)
                        event.target.reset();
                  });
      }
      const register = () =>{
            navigate('/regiterlist')
      }



      return (
            <div className="event-section mt-5">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-2">
                                    <div className="register-section p-3 bg-white h-100">
                                          <p onClick={register}>Volentress register list</p>
                                          <h5>Add Event</h5>

                                    </div>
                              </div>
                              <div className="col-lg-10">

                                    <div className="event p-3 bg-white">
                                          <form onSubmit={uplodeEvent} >

                                                <div className="row">
                                                      <div className="col-lg-6">
                                                            <div className="input-fled ">
                                                                  <label >Event Title</label>
                                                                  <input ref={titleRef} placeholder='Enter Title' type="title" name="" id="" />

                                                            </div>
                                                            <div className="input-fled my-3">
                                                                  <label >Description</label>
                                                                  <textarea ref={desRef} placeholder='Enter Description ' type="text" name="description" id="" />

                                                            </div>

                                                      </div>
                                                      <div className="col-lg-6">
                                                            <div className="input-fled my-3">
                                                                  <label >Event Date</label>
                                                                  <input ref={dateRef} type="date" name="date" id="" />

                                                            </div>
                                                            <div className="input-fled my-3">
                                                                  <label >Photo Url</label>
                                                                  <input ref={urlRef} placeholder='Enter Photo Url' type="text" name="image" id="" />

                                                            </div>

                                                      </div>
                                                </div>
                                                <div className='text-end '>
                                                      <input className='submit' type="submit" value="Submit" />
                                                </div>
                                          </form>


                                    </div>

                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default Events;