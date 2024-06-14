import { useState, useEffect } from "react"
import sliderData from "../../data/sliderData"
import leftChevron from "../../assets/left-arrow.svg"
import rightChevron from "../../assets/right-arrow.svg"
import "./Slider.css"

export default function Slider() {

  const [sliderindex, setsliderindex] = useState(1)

  function toggleImage(indexPayload) {
    // let newState;

    // if(indexPayload + sliderindex > sliderData.length){
    //   newState = 1
    // }
    // else if(indexPayload + sliderindex < 1){
    //   newState = sliderData.length
    // }
    // else{
    //   newState = indexPayload + sliderindex
    // }

    setsliderindex(state => {
      if(indexPayload + state > sliderData.length){
        return 1
      }
      else if(indexPayload + sliderindex < 1){
        return sliderData.length
      }
      else{
        return state + indexPayload
      }
    })
  }

  useEffect(() => {

    const intervalId = setInterval(() => toggleImage(1), 2000)

    return () => clearInterval(intervalId)

  }, [])
  
  return (
    <>
      <p className="index-info">{sliderindex} / {sliderData.length}</p>
      
      <div className="slider">
        <div className="img-info">{sliderData.find(obj => obj.id === sliderindex).description}</div>
        <img src={`/images/img-${sliderindex}.jpg`} alt={sliderData.find(obj => obj.id === sliderindex).description} className="slider-img" />

        <button
        onClick={() => toggleImage(-1)} 
        className="navigation-button prev-button">
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
        onClick={() => toggleImage(1)} 
        className="navigation-button next-button">
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  )
}