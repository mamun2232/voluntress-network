import React from 'react';
import './Order.css'

const Order = ({ order , delectbtn }) => {
      const { _id, title, url, date, descrption } = order
      
    
      return (
            <div>
                  <div className="card">
                        <div className="order">
                              <div className="order-img p-2">
                                    <img src={url} alt="" />
                              </div>
                              <div className="order-info p-2">
                                    <h3>{title}</h3>
                                    <h5>{date}</h5>
                                    <p>{descrption}</p>
                                    <div className='text-end'>
                                          <button onClick={() => delectbtn(_id)} className='cancle-btn' >Cancle</button>

                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Order;