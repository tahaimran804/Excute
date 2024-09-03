import { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const GoTOTop = () => {
  const [Display, setDisplay] = useState(false)

  const ToScroll = () => {
    let height = 700;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(windowScroll);


    if (windowScroll > height) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }


  }

  useEffect(() => {
    window.addEventListener('scroll', ToScroll)
  }, [])

  return (
    <>
      {Display && <div onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }} className="Back_To_Top"><button><IoIosArrowUp /></button></div>}
    </>
  )
}

export default GoTOTop
