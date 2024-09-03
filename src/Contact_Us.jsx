import React, { useEffect } from 'react'

const Contact_Us = () => {

  useEffect(() => {
    // Ensure that the reCAPTCHA script has loaded
    if (window.grecaptcha) {
      window.grecaptcha.render('recaptcha', {
        'sitekey': '6Lft-DMqAAAAAADm4zOohNr3TYek7lORf1rtdK1_'
      });
    }
  }, []);


  return (
    <>
      <div className="Contact_Us">
        <div className="Contact_From">

          <div className="contact_hedd_Img">
            <img src="/Images/tellabout2.png" alt="" />
          </div>

          <div className="From">
            <div>
              <input placeholder='Name' type="text" name="" id="" />
              <input placeholder='Email' type="email" name="" id="" />
            </div>
            <div>
              <input placeholder='Position' type="text" name="" id="" />
              <input placeholder='Organization NAme ' type="text" name="" id="" />
            </div>
            <textarea placeholder='Message' name="" className="TextArea"></textarea>
            <div className='human_Check'>
              <div id="recaptcha" className="g-recaptcha" data-sitekey="6Lft-DMqAAAAAADm4zOohNr3TYek7lORf1rtdK1_"></div>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact_Us
