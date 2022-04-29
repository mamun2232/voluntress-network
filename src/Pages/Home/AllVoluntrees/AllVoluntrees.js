import React, { useEffect, useState } from 'react';
import Voluntress from '../Voluntress/Voluntress';
import './ALLVolunTrees.css'

const AllVoluntrees = () => {
      const [voluntress , setVoluntrees] = useState([])
      useEffect(()=>{
          fetch('http://localhost:5000/service')
          .then(res => res.json())
          .then(data => setVoluntrees(data))
      },[])
      return (
            <div className="container">
                  <div className="voluntress-section mt-5">
                  {
                        voluntress.map(valuntres => <Voluntress valuntres={valuntres}
                              key={valuntres._id} 
                        ></Voluntress>)
                  }
            </div>
            </div>
      );
};

export default AllVoluntrees;