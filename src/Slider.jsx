import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Client_say from './Client_say';

const Slider = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  // Custom arrows
  const CustomLeftArrow = () => <div style={{ display: 'none' }} />;
  const CustomRightArrow = () => <div style={{ display: 'none' }} />;

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={"mobile" ? true : false}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .1"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      <div className='Client_say'><Client_say name='Nimrod Betzer ' Work=' CEO, Adam Milo' titel="Together with Execute, Adam Milo have saved more than 30% of our operating costs on our in-house and remote candidate testing systems" /></div>
      <div className='Client_say'><Client_say name='Alon Ketzef  ' Work='CEO, David Sheild' titel="Execute completely changed our Agents approach to selling insurance, enabling Tablet application to fullfill our complex business processes." /></div>
      <div className='Client_say'><Client_say name='Vered Zur' Work=' VP Global Sales Operations & Business Enablment, Amdocs' titel="Execute have implemented the first ever integrated tablet application into Amdocs, after seeing the level and speed of execution our appetite grew, and now we are over 20 projects implemented and deployed and still counting." /></div>
    </Carousel>
  );
};

export default Slider;
