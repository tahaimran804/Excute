import React from 'react'
import Services_Card from './Services_Card'

const Services = () => {
  return (
    <>
      <div className="Our_Services">
        <div className='Hedding_Img'>
          <img src="/Images/our-services.png" alt="" />
        </div>

        <div className="Our_Service_Cards">
          <Services_Card img='/Images/mon150.png' hedd='R & D' titel='Dedicated and experienced R&D teams with skillsets of technologies that perform on any environment, platform and integration. From rapid prototype to global deployment.' />
          <Services_Card img='/Images/calc150.png' hedd='PRODUCT MANAGEMENT' titel='Outbound, Inbound and CPO level Product Management Consulting. From ideation and requirements to implementation teams hand off.' />
          <Services_Card img='/Images/pen150.png' hedd='UX / UI DESIGN' titel=' User centered approach with ideation, story maps, prototyping and validation. State of the art design that creates beautiful, easy to use products.' />
        </div>


      </div>
    </>
  )
}

export default Services
