import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import './Blog.css'

const Blog = () => {
      const [orders , setOrder] = useState([])
      
      useEffect(()=>{
            fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrder(data))
       
      },[])
      const delectbtn = (id) => {
            console.log(id);
            fetch(`http://localhost:5000/order/${id}` ,{
                  method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                  if(data.deletedCount > 0){
                        const remings = orders.filter(order => order._id !== id)
                        setOrder(remings)
                        
            }
            })}
  
     
    
      return (
            <div className="container">
                  <div className="order-section mt-5">
                        {
                              orders.map(order => <Order
                                     key={order._id}
                                     order={order}
                                     delectbtn={delectbtn}
                              
                              ></Order>)
                        }

                  </div>
            </div>
      );
};

export default Blog;