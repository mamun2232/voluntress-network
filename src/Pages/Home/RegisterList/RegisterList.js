import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import Register from '../Register/Register';
import delet from '../../../Picture/logos/trash-2 9.png'
import { ToastContainer, toast } from 'react-toastify';
const RegisterList = () => {
      const [registers, setRegister] = useState([])
      useEffect(() => {
            fetch('http://localhost:5000/person')
                  .then(res => res.json())
                  .then(data => setRegister(data))
      }, [])
      const deletOrder = (id) => {
            const delet = window.confirm('are you sure delete ?')
            if(delet){
                  fetch(`http://localhost:5000/person/${id}`, {
                        method:"DELETE"
                  })
                  .then(res => res.json())
                  .then(data => {
                        if(data.deletedCount > 0){
                              const remaing = registers.filter(register => register._id !== id)
                              setRegister(remaing)
                        }
                  })
                  
            }
            console.log(id);
           

      }
      return (
            <div className="register-list mt-5">
                  <div className="container">


                        <Table striped bordered hover size="sm">
                              <thead>
                                    <tr>

                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>Date</th>
                                          <th>Description</th>
                                          <th>BookList</th>
                                          <th>Acction</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          registers.map(register =>

                                                <tr>

                                                      <td>{register.name}</td>
                                                      <td>{register.email}</td>
                                                      <td>{register.date}</td>
                                                      <td>{register.description}</td>
                                                      <td>{register.booklist}</td>
                                                      <td className='text-center'>
                                                            <div onClick={() => deletOrder(register._id)} className='table-delete'>
                                                                  <img src={delet} alt="" />
                                                            </div>
                                                      </td>

                                                </tr>



                                          )
                                    }


                              </tbody>
                        </Table>


                  </div>
            </div>
      );
};

export default RegisterList;