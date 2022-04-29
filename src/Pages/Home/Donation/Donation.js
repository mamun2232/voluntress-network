import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Donation.css'
import { ToastContainer, toast } from 'react-toastify';
const Donation = () => {
      const [user] = useAuthState(auth)
      const nameRef = useRef('')
      const emailRef = useRef('')
      const dateRef = useRef('')
      const desRef = useRef('')
      const bookListRef = useRef('')
      const registionsubmit = event => {
            event.preventDefault()
            const name = nameRef.current.value
            const email = emailRef.current.value
            const date = dateRef.current.value
            const description = desRef.current.value
            const booklist = bookListRef.current.value
            console.log(name, email, date, description, booklist);
            fetch('http://localhost:5000/person', {
                  method: 'POST',
                  body: JSON.stringify({
                        name, email, date, description, booklist
                  }),
                  headers: {
                        'authorization': `${email} ${localStorage.getItem('accessToken')}`,
                        'Content-type': 'application/json',
                  },
            })
                  .then((response) => response.json())
                  .then((json) => {
                        toast(json.success)
                        event.target.reset();
                  });

      }
      return (
            <div className="registion-section mt-3">
                  <div className="container">
                        <div className="register-form mx-auto w-50">
                              <div>
                                    <form onSubmit={registionsubmit}>
                                          <h3 className='text-center my-5'>Register as a voluntress</h3>
                                          <div className="input-grup my-4">
                                                <input ref={nameRef} placeholder='Full Name' type="text" name="name" id="" />
                                          </div>
                                          <div className="input-grup my-4">
                                                <input ref={emailRef} placeholder='User And Email' type="email" value={user.email} readOnly name="name" id="" />
                                          </div>
                                          <div className="input-grup my-4">
                                                <input ref={dateRef} placeholder='Date' type="date" name="name" id="" />
                                          </div>
                                          <div className="input-grup my-4">
                                                <input ref={desRef} placeholder='Descrption' type="text" name="name" id="" />
                                          </div>
                                          <div className="input-grup my-4">
                                                <input ref={bookListRef} placeholder='Organaztion Book List' type="text" name="name" id="" />
                                          </div>
                                          <div className="input-grup my-4">
                                                <input className='submit' type="submit" value="Registion" />
                                          </div>


                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Donation;