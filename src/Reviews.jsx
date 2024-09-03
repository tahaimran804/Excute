import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from './Slider';

const Reviews = () => {
  return (
    <>
      <div className='reviews_Sec'>
        <div className="All_Reviews">
          <div className="Show_Reviews">

            <div className="Client_Say_Hedding">
              <img src="/Images/clients-say.png" alt="" />
            </div>


            <div className="Client_whats_says">
              <Slider />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews;
