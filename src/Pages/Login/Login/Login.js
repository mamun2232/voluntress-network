import React from 'react';
import picture from '../../../Picture/logos/Group 1329.png'
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import auth from '../../../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Utilitis/Loading/Loading';
const Login = () => {
      const navigate = useNavigate()
      const [user] = useAuthState(auth)
      const [signInWithGoogle, users, loading, error] = useSignInWithGoogle(auth);
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";
      const googlesing = () => {
            signInWithGoogle()

      }
      if(loading){
            return <Loading></Loading>
      }
      if (user) {
            
            fetch('http://localhost:5000/login', {
                  method: 'POST',
                  body: JSON.stringify({
                        email: user.email

                  }),
                  headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                  },
            })
                  .then((response) => response.json())
                  .then((json) => {
                        localStorage.setItem('accessToken' , json.accessToken)
                        navigate(from, { replace: true });
                  });

      }
      return (
            <div className="login-seaction h-100">
                  <div className="nav-img">
                        <div className="text-center">
                              <img src={picture} alt="" />
                        </div>

                  </div>
                  <div className="login m-auto w-50 my-3">
                        <div>
                              <h3 className='text-center'>Login with</h3>
                              <div onClick={googlesing} className='google-login'>
                                    <div className='mt-2 text-center'>
                                          <span className='mx-3'><FcGoogle></FcGoogle></span>
                                          <span className=''>Continue with google</span>

                                    </div>




                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Login;