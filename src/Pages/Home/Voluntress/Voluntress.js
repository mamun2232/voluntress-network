import React from 'react';
import './Voluntress.css'

const Voluntress = ({valuntres}) => {
      const {img , comment} = valuntres
      
      return (
            <div className="service-section">
                 <div className="container">
                 <div className="card ">
                        <div className="service-img p-2">
                              <img src={img} alt="" />
                        </div>
                        <div className="service-name">
                              <h4>{comment}</h4>

                        </div>
                  </div>
                 </div>
            </div>
      );
};

export default Voluntress;